import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  carts: [],
  isToggleCart: false,
  totalAllProductPrice: 0,
  quantity: 1
}

export const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    toggleOnCart: (state) => {
      state.isToggleCart = true
    },
    toggleOffCart: (state) => {
      state.isToggleCart = false
    },
    addToCart: (state, action) => {
      const cart = state.carts.find((c) => c.id === action.payload.id)
      if (cart) {
        let data = state.carts.map((c) => {
          return c.id === action.payload.id
            ? {
              ...c,
              sold_quantity: c.sold_quantity + state.quantity,
              totalPrice: (c.sold_quantity + state.quantity) * c.normal_price
            }
            : c
        })
        state.carts = data
      } else {
        state.carts.push({
          ...action.payload,
          sold_quantity: state.quantity,
          totalPrice: state.quantity * action.payload.normal_price
        })
      }
      state.quantity = 1
    },

    deleteToCart: (state, action) => {
      let data = state.carts.filter(c => c.id !== action.payload)
      state.totalAllProductPrice = data.reduce((total, curr) => total + curr.totalPrice, 0)
      state.carts = data
    },
    addQuantityToItem: (state, action) => {
      state.carts.flat().forEach((item) => {
        if (item.id === action.payload) {
          item.sold_quantity += 1;
          item.totalPrice = item.sold_quantity * item.normal_price
          state.totalAllProductPrice = state.carts.reduce((total, curr) => total + curr.totalPrice, 0)
        }
      });
    },
    subtractQuantityFromItem: (state, action) => {
      state.carts.flat().forEach((item) => {
        if (item.id === action.payload) {
          if (item.sold_quantity === 1) return;
          item.sold_quantity -= 1;
          item.totalPrice = item.sold_quantity * item.normal_price
          state.totalAllProductPrice = state.carts.reduce((total, curr) => total + curr.totalPrice, 0)
        }
      });
    },
    calculateTotalPriceProduct: (state) => {
      state.totalAllProductPrice = state.carts.reduce((total, curr) => total + curr.totalPrice, 0)
    },
    decrementQuantity: (state, action) => {
      if (state.quantity === 1) return;
      state.quantity -= action.payload
    },
    incrementQuantity: (state, action) => {
      state.quantity += action.payload
    }
  },
})

export const {
  toggleOnCart,
  toggleOffCart,
  addToCart,
  deleteToCart,
  calculateTotalPriceProduct,
  decrementQuantity,
  incrementQuantity,
  addQuantityToItem,
  subtractQuantityFromItem
} = cartSlice.actions

export const toggleOpenCart = (state) => {
  return state.carts.isToggleCart
}

export const getListCarts = (state) => {
  return state.carts.carts
}

export const getQuantityValue = (state) => {
  return state.carts.quantity
}

export const getTotalPrice = (state) => {
  return state.carts.totalAllProductPrice
}

export default cartSlice.reducer
