// src/components/SearchBar.js
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-7 h-full w-full">
     
        <h1 className="text-5xl">How can we help?</h1>
     
      <div className=" flex  justify-center items-center w-1/2">
        <input
          type="text"
          className="border border-black p-2 h-8 w-2/3"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className=" text-black/70 relative right-6 text-xl"><FaArrowRight /></button>
      </div>
    </div>
  );
};

export default SearchBar;
