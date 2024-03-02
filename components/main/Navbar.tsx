'use client'

import React, { useState } from "react";
import { WindowIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full h-[65px] backdrop-blur-md fixed top-0 bg-[#03001417] z-[1000] px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
          <WindowIcon className="h-10 w-10 text-gray-300" />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            PORTFOLIO
          </span>
        </a>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-300 focus:outline-none"
          >
            {/* You can use a mobile menu icon here */}
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div
          className={`md:hidden ${
            isMobileMenuOpen ? "flex" : "hidden"
          } flex-col absolute top-[65px] left-0 right-0 bg-[#0300145e] px-4 py-2 rounded-lg`}
        >
          <Link href="/" className="cursor-pointer text-gray-200 mb-2 hover:scale-110">
            Home
          </Link>
          <Link href="#about-me" className="cursor-pointer text-gray-200 mb-2 hover:scale-110">
            About Me
          </Link>
          <Link href="#projects" className="cursor-pointer text-gray-200 mb-2 hover:scale-110">
            Projects
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex flex-row items-center justify-between w-[400px] h-full">
          <div className="backdrop-blur-md shadow-lg shadow-[#333333] flex items-center w-full justify-between h-auto border border-[#333333] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href="/" className="cursor-pointer hover:scale-110">
              Home
            </Link>
            <Link href="#about-me" className="cursor-pointer hover:scale-110">
              About Me
            </Link>
            <Link href="#projects" className="cursor-pointer hover:scale-110">
              Projects
            </Link>
          </div>
        </div>

        <div className="py-2 px-5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
          <button
            onClick={() => {
              const url =
                "https://drive.google.com/uc?export=download&id=1KnF59HTHbur3J_BZ0xswG6b77IiQCHur";
              const link = document.createElement("a");
              link.href = url;
              link.download = "LOSHAN_CV.pdf";
              link.target = "_blank";
              link.rel = "noopener noreferrer"; 
              link.click();
            }}
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
