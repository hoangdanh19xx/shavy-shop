import React from 'react'
import { useDispatch } from 'react-redux'
import {
  deleteToCart,
  addQuantityToItem,
  subtractQuantityFromItem
} from 'redux/cartSlice/cartSlice'
import './CartItem.scss'
import numberWithCommas from 'utilities/numberWithCommas'

function CartItem({ cart }) {
  const dispatch = useDispatch()
  const { id, name, images, sold_quantity, totalPrice } = cart

  const handleDeleteToCart = (id) => {
    dispatch(deleteToCart(id))
  }

  return (
    <li className='cart__item'>
      <div className='cart__thumbnail'>
        <a href='!#'>
          <img src={images} alt={name} />
        </a>
      </div>
      <div className='cart__details'>
        <h3 className='cart__title'>{name}</h3>
        <span className='close' onClick={() => handleDeleteToCart(id)}>
          <i className='fa-solid fa-xmark'></i>
        </span>
        <div className='cart__quantity'>
          <p>
            Qty:
            <span>
              <i className='fa-solid fa-caret-left' onClick={() => dispatch(subtractQuantityFromItem(id))}></i>
              {sold_quantity}
              <i className='fa-solid fa-caret-right' onClick={() => dispatch(addQuantityToItem(id))}></i>
            </span>
          </p>
          <span className='price'>{`${numberWithCommas(totalPrice)} VNĐ`}</span>
        </div>
      </div>
    </li>
  )
}

export default CartItem
