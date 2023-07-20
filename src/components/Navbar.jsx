import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import {ShoppingCart} from '@phosphor-icons/react'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="links">
        <Link to='/'>Shop</Link>
        <Link to='/cart'>
          <ShoppingCart size={32}/>
        </Link>
      </div>
      navbar</div>
  )
}

export default Navbar; 