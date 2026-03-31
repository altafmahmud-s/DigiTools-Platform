import React from 'react';

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <div className="navbar bg-white/80 backdrop-blur-md sticky top-0 z-50 px-4 md:px-12 border-b border-gray-100">
      <div className="flex-1">
        <a className="text-2xl font-bold flex items-center gap-2 cursor-pointer" onClick={() => window.location.reload()}>
          <span className="text-primary italic">Digi</span>Tools
        </a>
      </div>
      <div className="flex-none gap-4">
        <ul className="menu menu-horizontal px-1 hidden md:flex font-medium">
          <li><a>Home</a></li>
          <li><a>Products</a></li>
          <li><a>Contact</a></li>
        </ul>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={onCartClick}>
            <div className="indicator">
              <i className="fa-solid fa-cart-shopping text-xl"></i>
              <span className="badge badge-sm indicator-item badge-primary text-white">{cartCount}</span>
            </div>
          </div>
        </div>
        <button className="btn btn-primary text-white hidden md:flex">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
