import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    alert(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="flex items-center justify-center  w-full">
      <div className="relative w-full ">
        {/* Search Icon */}
      

        {/* Input Field */}
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          className="w-full pl-3 pr-4 py-2  border border-black  outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800 text-gray-800"
        />

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="absolute inset-y-0 right-0  flex items-center px-4 bg-orange text-white font-bold  hover:bg-blue-600 transition duration-300"
        >
          <FaSearch />

        </button>
      </div>
    </div>
  );
};

export default SearchBar;
