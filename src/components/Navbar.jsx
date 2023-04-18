import { Link } from 'react-router-dom'
import { useContext } from "react";
import { ShopContext } from '../context/shop-context';
import { ShoppingCart } from 'phosphor-react'
import './Navbar.css'
import { useState } from 'react'

function Navbar() {


  return (
    <div className="navbar">
      <div className="navbar-wrapper">
          <h1 className='navbar-title'>Abidas <span>РЫНОК</span></h1>
        <div className="links">
          <Link to="/">Shop</Link>
          <Link to="/cart">
            <ShoppingCart size={32} color='black' className='navbar-icon'/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
