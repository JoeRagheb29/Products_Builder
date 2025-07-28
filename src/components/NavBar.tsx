import React from 'react'

function NavBar({scrollHandler}) {
  return (
    <nav className=" flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <h1 className="text-2xl  font-bold text-indigo-600">Products Builder</h1>
      <ul className="flex space-x-6">
        <li className="text-gray-700 hover:text-indigo-600 cursor-pointer">Home</li>
        <li className="text-gray-700 hover:text-indigo-600 cursor-pointer" onClick={scrollHandler}>Products</li>
        <li className="text-gray-700 hover:text-indigo-600 cursor-pointer">About</li>
      </ul>
    </nav>
  )
}

export default NavBar

