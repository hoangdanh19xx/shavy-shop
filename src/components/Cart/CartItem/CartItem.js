import React from 'react'
import './CartItem.scss'

function CartItem({ cart }) {
  const { name, images, sold_quantity } = cart

  return (
    <li className='cart__item'>
      <div className='cart__thumbnail'>
        <a href='!#'>
          <img src={images} alt={name} />
        </a>
      </div>
      <div className='cart__details'>
        <h3 className='cart__title'>{name}</h3>
        <span className='close'>
          <i className='fa-solid fa-xmark'></i>
        </span>
        <div className='cart__quantity'>
          <p>
            Qty:
            <span>
              <i className='fa-solid fa-caret-left'></i>
              {sold_quantity === 0 ? 1 : sold_quantity}
              <i className='fa-solid fa-caret-right'></i>
            </span>
          </p>
          <span className='price'>$0</span>
        </div>
      </div>
    </li>
  )
}

export default CartItem
