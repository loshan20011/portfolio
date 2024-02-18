'use client';

import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";
import { WindowIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] backdrop-blur-md fixed top-0 bg-[#03001417] z-[1000] px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <WindowIcon className="h-10 w-10 text-gray-300" />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            PORTFOLIO
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="backdrop-blur-md shadow-lg shadow-[#333333] flex items-center w-full justify-between h-auto border border-[#333333] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About Me
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#contact" className="cursor-pointer">
              Contact
            </a>
          </div>
        </div>

        <div 
        className="py-2 px-5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
          <button onClick={() => {
            console.log("Download CV");
          }}> 
            Download CV
          </button>
        </div>
        {/* <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              key={social.name}
              src={social.src}
              alt={social.name}
              width={24}
              height={24}
              className="cursor-pointer hover:animate-slowspin"
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
