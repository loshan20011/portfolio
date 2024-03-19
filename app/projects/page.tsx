'use client';

import React from "react";
import Image from "next/image";

interface Prop {
  src: string;
  alt: string;
  title: string;
  description: string;
  techStack: string[];
  functionalities: string[];
  onclick: () => void;
}

const Page = ({
  src,
  alt,
  title,
  description,
  techStack,
  functionalities,
  onclick,
}: Prop) => {
  return (
    <div className="md:h-[88vh] w-full flex flex-row justify-center md:items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-10 md:mx-40">
        {/* Left side */}
        <div className="flex flex-col items-start">
          <div className="mt-20 md:mt-24 mb-40 md:mb-0 w-[340px] md:w-[400px] md:h-[200px] h-0 relative">
            <Image
              src= {src}
              alt= {alt}
              width={800}
              height={200}
              className="object-cover md:[500px] rounded-lg shadow-lg border border-[#333333]"
              onClick={onclick}
            />
          </div>
          <h1 className="text-white md:text-left mt-16 md:mt-8 mb-4 text-3xl font-bold">
            {title}
          </h1>
          <p className="text-justify mb-8 md:text-lg md:text-white text-base text-gray-400 mr-4 md:text-left">
            {description}
          </p>
        </div>

        {/* Right side */}
        <div className="flex flex-col ml-0 md:ml-16 justify-center">
          <div className="text-white flex flex-row mb-8 md:ml-0">
            <span className="mr-3 font-semibold">Tech Stack:</span>
            
            {techStack.map((tech, index) => (
              <div key={index}>
                <span className="block md:hidden text-gray-400">{tech}</span>
                <span className="hidden md:block text-gray-400 ml-1">{tech} |</span>
              </div>
            ))}
          </div>
          <div className="text-white mb-8 md:ml-0">
            <h2 className="text-xl font-semibold mb-4">Functionalities</h2>
            <ul>
            {functionalities.map((functional, index) => (
              <div key={index}>
                <li className="block md:hidden text-white">- {functional}</li>
                <li className="hidden md:block text-white">- {functional}</li>
              </div>
            ))}
            </ul>
          </div>
          <div className="flex flex-row gap-4 w-full mb-14 ">
            <div className="py-2 px-5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
              <button
                onClick={onclick}
              >
                Visit Site
              </button>
            </div>

            <div className="py-2 px-5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
              <button
                onClick={ onclick }
              >
                Visit GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
