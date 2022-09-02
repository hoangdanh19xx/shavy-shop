import React, { useState } from 'react'
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
  const [isOpenBars, setIsOpenBars] = useState(false)

  return (
    <header className='header'>
      <div className='container header__container'>
        <div className="bars" onClick={() => setIsOpenBars(!isOpenBars)}>
          <i className={`fa-solid ${isOpenBars ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>
        <Nav isOpenBar={isOpenBars} setIsOpenBars={setIsOpenBars} />
        <h1 className='header__logo'>
          <a href='!#'>Savoy</a>
        </h1>
        <div className='header__actions'>
          <a href='!#' className='hiden'>
            <i className='fa-solid fa-heart'></i>
          </a>
          <a href='!#' className='hiden'>Sign In</a>
          <a href='!#' onClick={() => dispatch(toggleOnCart())}>
            Card<span className='zero'>{carts.length}</span>
          </a>

          {isOpenCart && <Cart />}
        </div>
      </div>
    </header>
  )
}

export default Header
