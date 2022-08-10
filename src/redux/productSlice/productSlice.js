import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_GET_PRODUCT, ACCESS_TOKEN } from 'utilities/constants'

const initialState = {
  products: [],
  productItem: {},
  isOpenProductInfo: false,
}

export const getListProducts = createAsyncThunk(
  'productSlice/products',
  async () => {
    const config = {
      headers: {
        Authorization: ACCESS_TOKEN,
      },
    }
    const request = await axios(API_GET_PRODUCT, config)
    return request.data
  }
)

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleOnProduct: (state) => {
      state.isOpenProductInfo = true
    },
    toggleOffProduct: (state) => {
      state.isOpenProductInfo = false
    },
    displayProductInfo: (state, action) => {
      state.productItem = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getListProducts.fulfilled, (state, action) => {
      state.products = action.payload
    })
  },
})

export const { toggleOnProduct, toggleOffProduct, displayProductInfo } = productSlice.actions

export const getAllProducts = (state) => {
  return state.products.products
}

export const getProductItem = (state) => {
  return state.products.productItem
}

export const toggleOpenProduct = (state) => {
  return state.products.isOpenProductInfo
}

export default productSlice.reducer
