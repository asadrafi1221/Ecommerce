import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useLocation and useNavigate
import Button from "../UI/button";
import SearchBar from "../UI/SearchBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Hook to get the current location
  const navigate = useNavigate(); // Corrected to 'navigate'

  // Navigation links data
  const navLinks = [
    { id: 1, name: "Home", href: "/" },
    { id: 3, name: "About Us", href: "/about" },
    { id: 5, name: "Contact us", href: "/contact" },
    { id: 5, name: "Profile", href: "/profile" },

  ];

  return (
    <nav className="p-5 py-10 md:p-10 bg-navy gap-10 uppercase text-white">
      {/* Mobile Navbar */}
      <div className="flex justify-between items-center md:hidden">
        <div className="text-[5vw] font-bold">US-ECOMMERCE</div>
        <div className="text-[7vw] text-orange relative items-center cursor-pointer font-bold flex gap-5">
          <Button text={"login"} onClick={()=>{
            navigate('/login');
          }}/>
          <BsCart3 className="text-[5vw]" />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoClose /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "h-52" : "h-0"
        } pt-10 -mb-10 md:hidden flex flex-col gap-5 text-[4vw] transition-all duration-700`}
      >
        {navLinks.map((ele, index) => (
          <Link
            to={ele.href}
            key={index}
            className={`hover:text-orange-500 ${location.pathname === ele.href ? 'underline' : ''}`}
          >
            {ele.name}
          </Link>
        ))}
      </div>

      {/* Desktop Navbar */}
      <div className="justify-between items-center hidden md:flex">
        <div className="text-[3vw] font-bold">ECOMMERCE</div>
        <div className="w-[55%]">
          <SearchBar />
        </div>
        <div className="flex items-center gap-5">
          <Button text={"login"} onClick={()=>navigate('/login')}/>
          <BsCart3 className="text-[4vw] text-orange" onClick={() => navigate('/cart')} />
        </div>
      </div>

      <div className="gap-10 capitalize mt-10 hidden md:flex text-sm xl:text-lg items-center">
        {navLinks.map((ele, index) => (
          <Link
            key={index}
            to={ele.href}
            className={`group-hover:text-orange-500 ${
              location.pathname === ele.href
                ? 'bg-orange py-2 px-2 font-bold shadow-black shadow-lg text-white'
                : ''
            }`}
          >
            {ele.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;