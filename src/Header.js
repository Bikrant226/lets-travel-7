import React from 'react'
import './header.css'
function Header() {
  return (
    <div className='header'>
        <header className='top-bar'>
            <a href='#'>Home</a>
            <a href='#'>Destinations</a>
            <a href='#'>Login</a>
        </header>
        <h1>India's coolest travel community</h1>
        <input type="search" placeholder='Search here' id="search-bar"/>

    </div>
  )
}

export default Header