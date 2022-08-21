import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getListCarts,
  toggleOffCart,
  calculateTotalPriceProduct,
  getTotalPrice
} from 'redux/cartSlice/cartSlice'
import './Cart.scss'
import CartItem from './CartItem/CartItem'
import numberWithCommas from 'utilities/numberWithCommas'

function Cart() {
  const dispatch = useDispatch()
  const carts = useSelector(getListCarts)
  const totalProductsPrice = useSelector(getTotalPrice)

  useEffect(() => {
    dispatch(calculateTotalPriceProduct())
  }, [dispatch])

  const handleCloseCart = (e) => {
    e.stopPropagation()
  }

  return (
    <section className='cart' onClick={() => dispatch(toggleOffCart())}>
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
          </ul>
          <div className='cart__summary'>
            <p>
              Subtotal: <span className='price'>{`${numberWithCommas(totalProductsPrice)} VNĐ`}</span>
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
