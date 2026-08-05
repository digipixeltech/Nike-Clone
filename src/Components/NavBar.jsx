import React from "react";
import NikeLogo from "../img/Logo/Nikelogo.svg";
import { Link } from "react-router-dom";
import { a } from "motion/react-client";

const NavBar = () => {
  const handleNavHover = (show) => {
    const navHover = document.querySelector(".nav-hover");
    if (navHover) {
      navHover.style.display = show ? "flex" : "none";
    }
  };

  return (
    <div className="relative">
      <div className="w-full flex justify-between mt-7 bg-white p-5 sticky top-0 left-0 right-0 z-50 shadow-md">
        <Link to="/">
          <img
            src={NikeLogo}
            width=""
            height=""
            alt="Nike Logo"
            className="w-16 h-10"
          />
        </Link>
        <nav className="flex gap-5 list-none text-md font-semibold">
          <Link
            to="/newAndFeatured"
            className="newfeature"
            onMouseEnter={() => handleNavHover(true)}
            onMouseLeave={() => handleNavHover(false)}
          >
            New & Featured
          </Link>
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
      <div
        className="h-50 z-5 flex justify-between px-80 nav-hover transition duration-300 ease-in-out transform hover:scale-105"
        onMouseEnter={() => handleNavHover(true)}
        onMouseLeave={() => handleNavHover(false)}
      >
        <div className="flex flex-col">
          <h2>Featured</h2>
          <a href="">New Arrivals</a>
          <a href="">Bestsellers</a>
          <a href="">Top Picks Under ₹4999</a>
        </div>
        <div className="flex flex-col">
          <h2>Trending</h2>
          <a href="">Retro Running</a>
          <a href="">Just Do The Work</a>
          <a href="">All Conditions Gear</a>
        </div>
        <div className="flex flex-col">
          <h2>Shop Icons </h2>
          <a href="">Air Force 1</a>
          <a href="">Air Jordan 1</a>
          <a href="">Air Max</a>
          <a href="">Dunk</a>
          <a href="">Pegasus</a>
          <a href="">Vomero</a>
        </div>
        <div className="flex flex-col">
          <h2>Sports </h2>
          <a href="">Running</a>
          <a href="">Gym & Training</a>
          <a href="">Sportswear</a>
          <a href="">Football</a>
          <a href="">Basketball</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
