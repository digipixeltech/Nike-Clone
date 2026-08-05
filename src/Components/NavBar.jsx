import React from "react";
import NikeLogo from "../img/Logo/Nikelogo.svg"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full flex justify-between my-7 bg-white p-5 sticky top-0 left-0 right-0 z-50 shadow-md">
      <Link to='/'>
        <img src={NikeLogo} width='' height='' alt="Nike Logo" className="w-16 h-10" />
      </Link>
      <nav className="flex gap-5 list-none text-md font-semibold">
        <Link to="/newAndFeatured">New & Featured</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/kids">Kids</Link>
        <Link to="/jordan">Jordan</Link>
        <Link to="/sale">Sale</Link>
      </nav>
      <div className="flex gap-5">
        <input type="text" placeholder="Search" className="bg-gray-200 border-none p-2 rounded-2xl" />
        <p>kvn</p>
        <p></p>
      </div>
    </div>
  );
};

export default NavBar;
