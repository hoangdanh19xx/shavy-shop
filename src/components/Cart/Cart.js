import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getListCarts,
  getTotalPrice,
  toggleOffCart,
} from 'redux/cartSlice/cartSlice'
import './Cart.scss'
import CartItem from './CartItem/CartItem'

function Cart() {
  const dispatch = useDispatch()
  const carts = useSelector(getListCarts)
  console.log('object', carts)
  const totalPrice = useSelector(getTotalPrice)

  const handleCloseCart = (e) => {
    e.stopPropagation()
  }

  return (
    <section className='cart'>
      <div className='cart__container' onClick={handleCloseCart}>
        <div className='cart__header'>
          <a
            href='!#'
            className='cart__action'
            onClick={() => dispatch(toggleOffCart())}
          >
            Close
          </a>
        </div>
        <div className='cart__content'>
          <ul className='cart__list'>
            {carts.length > 0 ? (
              carts.map((cart) => {
                return <CartItem key={cart.id} cart={cart} />
              })
            ) : (
              <div className='not-product'>No products in the cart.</div>
            )}
            {/* <div className="not-product">No products in the cart.</div> */}
          </ul>
          <div className='cart__summary'>
            <p>
              Subtotal: <span className='price'>${totalPrice}</span>
            </p>
            <a href='!#' className='cart__button cart__button--outline'>
              View Cart
            </a>
            <a href='!#' className='cart__button'>
              Checkout
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
