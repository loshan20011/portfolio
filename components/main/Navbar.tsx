import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";

const Navbar = () => {
    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61] bg-[#03001417] backdrop-blur-md z-50 px-10">
            <div className="w-full h-full backdrop-blur-md flex flex-row items-center justify-between m-auto px-[10px]">
                <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
                    <span className="font-bold ml-[10px] hidden md:block text-gray-300">
                        Loshan Selvaraj
                    </span>
                </a>

                <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
                    <div className="flex items-center w-full justify-between h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        <a href="#about-me" className="cursor-pointer">About Me</a>
                        <a href="#projects" className="cursor-pointer">Projects</a>
                        <a href="#contact" className="cursor-pointer">Contact</a>
                    </div>
                </div>

                <div className="flex flex-row gap-5">
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
                </div>
            </div>
        </div>
    );
};

export default Navbar;
