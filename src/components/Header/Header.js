import React from 'react'
import './Header.scss'

import Nav from 'components/Nav/Nav'
import { useDispatch, useSelector } from 'react-redux'
import {
  getListCarts,
  toggleOnCart,
  toggleOpenCart,
} from 'redux/cartSlice/cartSlice'
import Cart from 'components/Cart/Cart'

function Header() {
  const dispatch = useDispatch()
  const carts = useSelector(getListCarts)
  const isOpenCart = useSelector(toggleOpenCart)

  return (
    <header className='header'>
      <div className='container header__container'>
        <Nav />
        <h1 className='header__logo'>
          <a href='!#'>Savoy</a>
        </h1>
        <div className='header__actions'>
          <ul className='nav-menu'>
            <li className='nav-menu__item'>
              <a href='!#'>
                <i className='fa-solid fa-heart'></i>
              </a>
            </li>
            <li className='nav-menu__item'>
              <a href='!#'>Sign In</a>
            </li>
            <li
              className='nav-menu__item'
              onClick={() => dispatch(toggleOnCart())}
            >
              <a href='!#'>
                Card<span className='zero'>{carts.length}</span>
              </a>
            </li>
            {isOpenCart && <Cart />}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
