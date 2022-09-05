import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_GET_PRODUCT, ACCESS_TOKEN, API_GET_CATEGORIES } from 'utilities/constants'

const initialState = {
  products: [],
  productItem: {},
  isOpenProductInfo: false,
  searchItem: '',
  categories: []
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

export const getListCategories = createAsyncThunk(
  'productSlice/categories', async () => {
    const config = {
      headers: {
        Authorization: ACCESS_TOKEN,
      },
    }
    const request = await axios(API_GET_CATEGORIES, config)
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
    },
    handleSearchItem: (state, action) => {
      state.searchItem = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getListProducts.fulfilled, (state, action) => {
      const defaultImage = ["https://images.unsplash.com/photo-1662241131527-f57cadcacf32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"]
      let data = action.payload?.data.map(item => Object.keys(item.images).length === 0 ? { ...item, images: defaultImage } : item)
      state.products = { ...action.payload, data }
    })

    builder.addCase(getListCategories.fulfilled, (state, action) => {
      let data = action.payload
      state.categories = data
    })
  },
})

export const {
  toggleOnProduct,
  toggleOffProduct,
  displayProductInfo,
  handleSearchItem,
  filterProductsByKey
} = productSlice.actions

export const getAllProducts = (state) => {
  return state.products.products
}

export const getCategories = (state) => {
  return state.products.categories
}

export const getProductItem = (state) => {
  return state.products.productItem
}

export const toggleOpenProduct = (state) => {
  return state.products.isOpenProductInfo
}

export default productSlice.reducer
