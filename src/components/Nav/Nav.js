import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'

import Bags from 'assets/images/bags.jpg'
import Headphone from 'assets/images/headphone.jpg'
import Chain from 'assets/images/chain.jpg'
import Tree from 'assets/images/tree.jpg'
import Plus from 'assets/images/plus.jpg'

function Nav({ isOpenBar, setIsOpenBars }) {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false)

  const scrollToElement = () => {
    let height = document.getElementById('slide')
    window.scrollTo({ top: height.clientHeight, behavior: 'smooth' })
    setIsOpenBars(false)
  }

  const handleOpenMenu = () => {
    setIsOpenSubMenu(!isOpenSubMenu)
  }

  return (
    <nav className={`nav ${isOpenBar ? 'nav__open' : ''}`}>
      <ul className='nav-menu'>
        <li className='nav-menu__item'>
          <Link to='/shop'>Shop</Link>
        </li>
        <li className='nav-menu__item' onClick={handleOpenMenu}>
          <Link to='/categories'>
            Categories <span>New</span>
            <i className={`fa-solid ${isOpenSubMenu ? 'fa-minus' : 'fa-plus'}  plus-icon`}></i>
          </Link>
          <ul className={`sub-menu ${isOpenSubMenu ? 'open' : ''}`}>
            <li className='sub-menu__item'>
              <Link to="/bags" onClick={scrollToElement}>
                <img src={Bags} alt='' />
                <span>Bags &#38; Backpacks</span>
              </Link>
            </li>
            <li className='sub-menu__item'>
              <Link to='/decoration' onClick={scrollToElement}>
                <img src={Tree} alt='' />
                <span>Decoration</span>
              </Link>
            </li>
            <li className='sub-menu__item'>
              <Link to='/essential' onClick={scrollToElement}>
                <img src={Headphone} alt='' />
                <span>Essential</span>
              </Link>
            </li>
            <li className='sub-menu__item'>
              <Link to='/interior' onClick={scrollToElement}>
                <img src={Chain} alt='' />
                <span>Interior</span>
              </Link>
            </li>
            <li className='sub-menu__item'>
              <Link to='/' onClick={scrollToElement}>
                <img src={Plus} alt='' />
                <span>Shop All</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className='nav-menu__item'>
          <Link to='/pages'>Pages</Link>
        </li>
        <li className='nav-menu__item'>
          <Link to='/elements'>Elements</Link>
        </li>
      </ul>
      <div className="mobile-signin">
        <a href='/signIn'>Sign In</a>
        <a href='/wishlist'>Wishlist</a>
      </div>
    </nav>
  )
}

export default Nav
