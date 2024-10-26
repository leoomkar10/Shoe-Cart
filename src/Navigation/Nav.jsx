import React from 'react'
import './Nav.css'
import { FiHeart } from 'react-icons/fi'
import { HiOutlineShoppingCart, HiOutlineUserAdd } from 'react-icons/hi'
const Nav = () => {
  return (
    <nav>
      <div className='nav-container'>
        <input type="text" className='search-input' placeholder='Enter Your Search Shoes...'  />
      </div>
      <div className='profile-container'>
        <a href="#">
          <FiHeart className='nav-icons'/>
        </a>
        <a href="#">
          <HiOutlineShoppingCart className='nav-icons'/>
        </a>
        <a href="#">
          <HiOutlineUserAdd className='nav-icons'/>
        </a>
      </div>
    </nav>
  )
}

export default Nav