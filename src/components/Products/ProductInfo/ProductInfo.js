import React from 'react'
import './ProductInfo.scss'

import { useDispatch, useSelector } from 'react-redux'
import {
  toggleOpenProduct,
  toggleOffProduct,
  getProductItem
} from 'redux/productSlice/productSlice'

function ProductInfo() {
  const dispatch = useDispatch()
  const isProductInfo = useSelector(toggleOpenProduct)
  const productItem = useSelector(getProductItem)
  console.log("info", productItem)
  const { name, normal_price, images, description } = productItem

  const handleCloseToggle = (e) => {
    dispatch(!isProductInfo)
    e.stopPropagation()
  }

  const handleStopClose = (e) => {
    e.stopPropagation()
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
            <span className='price'>${normal_price}</span>
          </div>
          <div className='product-detail__bottom'>
            <p className='desc'>{description}</p>
            <div className='quantity'>
              <i
                className='fa-solid fa-caret-left'
              // onClick={() => dispatch(decrementQuantity(1))}
              ></i>
              {/* {sold_quantity === 0 ? 1 : sold_quantity} */}0
              <i
                className='fa-solid fa-caret-right'
              // onClick={() => dispatch(incrementQuantity(1))}
              ></i>
            </div>
            <button
              className='btn'
            // onClick={() => handleAddProductToCart(productItem)}
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
