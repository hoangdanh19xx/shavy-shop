import React from 'react'
import './ProductItem.scss'


import { useDispatch, useSelector } from 'react-redux'
import {
  toggleOpenProduct,
  toggleOnProduct,
  displayProductInfo
} from 'redux/productSlice/productSlice'

function ProductItem({ product }) {
  const dispatch = useDispatch()
  const { images, name, normal_price } = product

  const handleProductItem = (product) => {
    dispatch(displayProductInfo(product))
    dispatch(toggleOnProduct())
  }

  return (
    <li className='product-list__item'>
      <div className='image'>
        <img src={images} alt='' />
      </div>
      <div className='content'>
        <div className='title'>
          <h4>{name}</h4>
          <i className='fa-solid fa-heart'></i>
        </div>
        <span className='price'>${normal_price}</span>
      </div>
      <span className='show-me' onClick={() => handleProductItem(product)}>
        Show me
      </span>
    </li>
  )
}

export default ProductItem
