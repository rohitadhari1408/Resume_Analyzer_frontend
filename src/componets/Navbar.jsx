import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Get the navigate function

  return (
    <div className="bg-white text-blue-700">
      {/* Navbar */}
      <nav className="bg-white px-6 py-4 flex justify-between items-center shadow-md fixed top-0 left-0 w-full z-50">
        <h1 className="text-2xl font-bold text-blue-700">ResumeAI</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {["Home", "Features", "Review", "FAQ", "Contact"].map((item) => (
            <a key={item} href="#" className="hover:text-blue-500 transition">
              {item}
            </a>
          ))}
        </div>

        {/* Login Button */}
        <div className="hidden md:flex">
          <button
            onClick={() => navigate("/login")} // Navigate on click
            className="bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition"
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white py-4 space-y-4 shadow-md mt-[64px]">
          {["Home", "Features", "Review", "FAQ", "Contact"].map((item) => (
            <a key={item} href="#" className="hover:text-blue-500 transition">
              {item}
            </a>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              navigate("/login"); // Navigate on click and close menu
            }}
            className="bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
