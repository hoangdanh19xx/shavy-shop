import React from 'react'
import './Nav.scss'
import Bags from 'assets/images/bags.jpg'
import Headphone from 'assets/images/headphone.jpg'
import Chain from 'assets/images/chain.jpg'
import Tree from 'assets/images/tree.jpg'
import Plus from 'assets/images/plus.jpg'

function Nav() {
  return (
    <nav className='nav'>
      <ul className='nav-menu'>
        <li className='nav-menu__item'>
          <a href='!#'>Shop</a>
        </li>
        <li className='nav-menu__item'>
          <a href='!#'>
            Categories <span>New</span>
          </a>
          <ul className='sub-menu'>
            <li className='sub-menu__item'>
              <a href='!#'>
                <img src={Bags} alt='' />
                <span>Bags & Backpacks</span>
              </a>
            </li>
            <li className='sub-menu__item'>
              <a href='!#'>
                <img src={Tree} alt='' />
                <span>Decoration</span>
              </a>
            </li>
            <li className='sub-menu__item'>
              <a href='!#'>
                <img src={Headphone} alt='' />
                <span>Essential</span>
              </a>
            </li>
            <li className='sub-menu__item'>
              <a href='!#'>
                <img src={Chain} alt='' />
                <span>Interior</span>
              </a>
            </li>
            <li className='sub-menu__item'>
              <a href='!#'>
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
    </nav>
  )
}

export default Nav
