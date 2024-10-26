import React from 'react'
import './Sidebar.css'
import { GiShoppingCart } from 'react-icons/gi'
import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
const Sidebar = () => {
  return (
    <>
        <section className="sidebar">
            <div className="logo-container">
                <h1><GiShoppingCart/></h1>
            </div>

            <Category/>
            <Price/>
            <Colors/>
        </section>
    </>
  )
}

export default Sidebar