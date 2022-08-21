import React from 'react'
import './ProductItem.scss'

import { useDispatch } from 'react-redux'
import {
  toggleOnProduct,
  displayProductInfo
} from 'redux/productSlice/productSlice'
import numberWithCommas from 'utilities/numberWithCommas'

function ProductItem({ product }) {
  const dispatch = useDispatch()
  let { images, name, normal_price } = product

  const handleProductItem = (product) => {
    dispatch(displayProductInfo(product))
    dispatch(toggleOnProduct())
  }

  return (
    <li className='product-list__item' onClick={() => handleProductItem(product)}>
      <div className='image'>
        <img src={images} alt='' />
      </div>
      <div className='content'>
        <div className='title'>
          <h4>{name}</h4>
          <i className='fa-solid fa-heart'></i>
        </div>
        <span className='price'>{`${numberWithCommas(normal_price)} VNĐ`}</span>
      </div>
      <span className='show-me' onClick={() => handleProductItem(product)}>
        Show me
      </span>
    </li>
  )
}

export default ProductItem
