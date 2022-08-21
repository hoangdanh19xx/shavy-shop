import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_GET_PRODUCT, ACCESS_TOKEN } from 'utilities/constants'

const initialState = {
  products: [],
  productItem: {},
  isOpenProductInfo: false,
  searchItem: ''
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
    },
    handleSearchItem: (state, action) => {
      state.searchItem = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getListProducts.fulfilled, (state, action) => {
      const defaultImage = ["https://d3hr4eej8cfgwy.cloudfront.net/finan-stg/1bff25f2-52fb-4472-b88a-3adf2635d083/image/56373c10-c1fa-470b-80e8-f21f4e4d3fe0.jpg"]
      let data = action.payload?.data.map(item => Object.keys(item.images).length === 0 ? { ...item, images: defaultImage } : item)
      state.products = { ...action.payload, data }
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

export const getProductItem = (state) => {
  return state.products.productItem
}

export const toggleOpenProduct = (state) => {
  return state.products.isOpenProductInfo
}

export default productSlice.reducer
