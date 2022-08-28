import React from 'react'
import './Nav.scss'
import Bags from 'assets/images/bags.jpg'
import Headphone from 'assets/images/headphone.jpg'
import Chain from 'assets/images/chain.jpg'
import Tree from 'assets/images/tree.jpg'
import Plus from 'assets/images/plus.jpg'
import { useState } from 'react'

function Nav({ isOpenBar }) {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false)

  return (
    <nav className={`nav ${isOpenBar ? 'nav__open' : ''}`}>
      <ul className='nav-menu'>
        <li className='nav-menu__item'>
          <a href='!#'>Shop</a>
        </li>
        <li className='nav-menu__item' onClick={() => setIsOpenSubMenu(!isOpenSubMenu)}>
          <a href='!#'>
            Categories <span>New</span>
            <i className={`fa-solid ${isOpenSubMenu ? 'fa-minus' : 'fa-plus'}  plus-icon`}></i>
          </a>
          <ul className={`sub-menu ${isOpenSubMenu ? 'open' : ''}`}>
            <li className='sub-menu__item'>
              <a href='#products'>
                <img src={Bags} alt='' />
                <span>Bags & Backpacks</span>
              </a>
            </li>
            <li className='sub-menu__item'>
              <a href='#products'>
                <img src={Tree} alt='' />
                <span>Decoration</span>
              </a>
            </li>
            <li className='sub-menu__item'>
              <a href='#products'>
                <img src={Headphone} alt='' />
                <span>Essential</span>
              </a>
            </li>
            <li className='sub-menu__item'>
              <a href='#products'>
                <img src={Chain} alt='' />
                <span>Interior</span>
              </a>
            </li>
            <li className='sub-menu__item'>
              <a href='#products'>
                <img src={Plus} alt='' />
                <span>Shop All</span>
              </a>
            </li>
          </ul>
        </li>
        <li className='nav-menu__item'>
          <a href='!#'>Pages</a>
        </li>
        <li className='nav-menu__item'>
          <a href='!#'>Elements</a>
        </li>
      </ul>
      <div className="mobile-signin">
        <a href='!#'>Sign In</a>
        <a href='!#'>Wishlist</a>
      </div>
    </nav>
  )
}

export default Nav
