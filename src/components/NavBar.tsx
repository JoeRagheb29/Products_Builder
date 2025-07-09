import React from 'react';
import { NavLink } from 'react-router-dom'
import './App.css'



function NavBar() {
  return (
    <div className='Nav flex justify-around items-center bg-gray-300 p-3'>
      <NavLink className={' hover:bg-gray-400'} to="/" end>Home</NavLink>
      <NavLink className={' hover:bg-gray-400'} to="/Learn" end>Learn</NavLink>
      <NavLink className={' hover:bg-gray-400'} to="/products">Products</NavLink>
      <NavLink className={' hover:bg-gray-400'} to="/about">About</NavLink>
      <NavLink className={' hover:bg-gray-400'} to="/contribute">Contribute</NavLink>
      <NavLink className={' hover:bg-gray-400'} to="/login">Login</NavLink>
    </div>
  )
}

export default NavBar
