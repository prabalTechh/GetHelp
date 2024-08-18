import React from "react";
import logo from "../assets/logo.png";

const Navbar = ({ onButtonClick }) => {
  return (
    <nav className="bg-[#060606] py-4 text-white flex justify-between  lg:px-28 md:20 sm:px-16 px-4 sticky top-0 z-20">
      <div className="flex gap-2 items-center">
        <img src={logo} alt="logo" className="h-6 w-6 rounded-lg " />
        <h1 className="text-md font-semibold">Abstract | Help Center</h1>
      </div>
      <div className="hidden lg:block">
        <button onClick={onButtonClick} className="px-4 border text-sm border-[#595959] py-0.5">Submit a request</button>
      </div>
    </nav>
  );
};

export default Navbar;
