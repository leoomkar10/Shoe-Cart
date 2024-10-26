import React from 'react'
import Navigation from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './SideBar/Sidebar'

const App = () => {
  return (
    <div>
      <Sidebar/>
      <Navigation/>
      <Recommended/>
      <Products/>
    </div>
  )
}

export default App