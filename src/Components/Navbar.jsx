import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">MyWebsite</div>
        <div className="listitems">
          <ul className="flex space-x-4">
            <li>
              <NavLink 
                to="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                activeClassName="text-white bg-gray-700"
                exact
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                activeClassName="text-white bg-gray-700"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar;