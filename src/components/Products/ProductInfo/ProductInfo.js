import React from 'react'
import './ProductInfo.scss'

import { useDispatch, useSelector } from 'react-redux'
import {
  toggleOffProduct,
  getProductItem,
} from 'redux/productSlice/productSlice'
import { toggleOnCart } from 'redux/cartSlice/cartSlice'
import {
  addToCart, 
  getQuantityValue, 
  incrementQuantity,
  decrementQuantity
} from 'redux/cartSlice/cartSlice'
import numberWithCommas from 'utilities/numberWithCommas'

function ProductInfo() {
  const dispatch = useDispatch()
  const productItem = useSelector(getProductItem)
  const quantity = useSelector(getQuantityValue)
  const { name, normal_price, images, description } = productItem

  const handleCloseToggle = (e) => {
    e.stopPropagation()
    dispatch(toggleOffProduct())
  }

  const handleStopClose = (e) => {
    e.stopPropagation()
  }

  const handleAddProductToCart = (obj) => {
    dispatch(addToCart(obj))
    dispatch(toggleOffProduct())
    setTimeout(() => {
      dispatch(toggleOnCart())
    }, 200)
  }

  return (
    <section className='product-detail' onClick={handleCloseToggle}>
      <div className='product-detail__inner' onClick={handleStopClose}>
        <div
          className='close-icon'
          onClick={() => dispatch(toggleOffProduct())}
        >
          <i className='fa-solid fa-xmark'></i>
        </div>
        <div className='product-detail__content'>
          <div className='product-detail__top'>
            <h3 className='title'>{name}</h3>
            <span className='price'>{`${numberWithCommas(normal_price)} VNĐ`}</span>
          </div>
          <div className='product-detail__bottom'>
            <p className='desc'>{description}</p>
            <div className='quantity'>
              <i
                className='fa-solid fa-caret-left'
                onClick={() => dispatch(decrementQuantity(1))}
              ></i>
              {quantity}
              <i
                className='fa-solid fa-caret-right'
                onClick={() => dispatch(incrementQuantity(1))}
              ></i>
            </div>
            <button
              className='btn'
              onClick={() => handleAddProductToCart(productItem)}
            >
              Add to cart
            </button>
            <div className='actions'>
              <i className='fa-solid fa-heart'></i>
              <i className='fa-brands fa-facebook'></i>
              <i className='fa-brands fa-instagram'></i>
              <i className='fa-brands fa-twitter'></i>
            </div>
          </div>
        </div>
        <div className='product-detail__image'>
          <img src={images} alt='' />
        </div>
      </div>
    </section>
  )
}

export default ProductInfo
