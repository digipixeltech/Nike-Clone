import React, { useState } from "react";
import NikeLogo from "../img/Logo/Nikelogo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showNavHover, setShowNavHover] = useState(false);

  return (
    <div className="relative">
      <div className="w-full flex justify-between mt-7 bg-white p-5 sticky top-0 left-0 right-0 z-50 shadow-md">
        <Link to="/">
          <img
            src={NikeLogo}
            alt="Nike Logo"
            className="w-16 h-10"
          />
        </Link>
        <nav className="flex gap-5 list-none text-md font-semibold items-center">
          <div
            className="relative"
            onMouseEnter={() => setShowNavHover(true)}
            onMouseLeave={() => setShowNavHover(false)}
          >
            <Link to="/newAndFeatured" className="newfeature">
              New & Featured
            </Link>
            <div
              className={`nav-hover gap-25 justify-center transition duration-300 ease-in-out ${
                showNavHover ? "flex" : "hidden"
              }`}
              onMouseEnter={() => setShowNavHover(true)}
              onMouseLeave={() => setShowNavHover(false)}
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-sm mb-1">Featured</h2>
                <a href="#!" className="text-xs text-gray-600">New Arrivals</a>
                <a href="#!" className="text-xs text-gray-600">Bestsellers</a>
                <a href="#!" className="text-xs text-gray-600">Top Picks Under ₹4999</a>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-sm mb-1">Trending</h2>
                <a href="#!" className="text-xs text-gray-600">Retro Running</a>
                <a href="#!" className="text-xs text-gray-600">Just Do The Work</a>
                <a href="#!" className="text-xs text-gray-600">All Conditions Gear</a>
              </div> 
              <div className="flex flex-col gap-2">
                <h2 className="text-sm mb-1">Shop Icons</h2>
                <a href="#!" className="text-xs text-gray-600">Air Force 1</a>
                <a href="#!" className="text-xs text-gray-600">Air Jordan 1</a>
                <a href="#!" className="text-xs text-gray-600">Air Max</a>
                <a href="#!" className="text-xs text-gray-600">Dunk</a>
                <a href="#!" className="text-xs text-gray-600">Pegasus</a>
                <a href="#!" className="text-xs text-gray-600">Vomero</a>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-sm mb-1">Sports</h2>
                <a href="#!" className="text-xs text-gray-600">Running</a>
                <a href="#!" className="text-xs text-gray-600">Gym & Training</a>
                <a href="#!" className="text-xs text-gray-600">Sportswear</a>
                <a href="#!" className="text-xs text-gray-600">Football</a>
                <a href="#!" className="text-xs text-gray-600">Basketball</a>
              </div>
            </div>
          </div>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/kids">Kids</Link>
          <Link to="/jordan">Jordan</Link>
          <Link to="/sale">Sale</Link>
        </nav>
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-200 border-none p-2 rounded-2xl"
          />
          <p>kvn</p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
