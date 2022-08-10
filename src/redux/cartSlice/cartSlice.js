import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  carts: [],
  isToggleCart: false,
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
        state.carts.map((c) =>
          c.id === action.payload.id
            ? console.log({
                ...c,
                sold_quantity: c.sold_quantity + action.payload.num,
              })
            : c
        )
      } else {
        state.carts.push(action.payload)
      }
    },
  },
})

export const {
  toggleOnCart,
  toggleOffCart,
  addToCart,
  decrementQuantity,
  incrementQuantity,
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
  return state.carts.totalPrice
}

export default cartSlice.reducer
