import React from "react";
import NikeLogo from "../img/Logo/Nikelogo.svg"

const NavBar = () => {
  return (
    <div className="w-full flex justify-between my-7 bg-white p-5 sticky top-0 left-0 right-0 z-50 shadow-md">
      <div>
        <img src={NikeLogo} width='' height='' alt="Nike Logo" className="w-16 h-10" />
      </div>
      <div className="flex gap-5 list-none text-md font-semibold">
        <li>New & Featured</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Jordan</li>
        <li>Sale</li>
      </div>
      <div className="flex gap-5">
        <input type="text" placeholder="Search" className="bg-gray-200 border-none p-2 rounded-2xl" />
        <p>kvn</p>
        <p></p>
      </div>
    </div>
  );
};

export default NavBar;
