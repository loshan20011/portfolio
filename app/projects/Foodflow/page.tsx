'use client';

import React from 'react'
import Image from 'next/image';

const functionalities = ["User Authentication", "Product Browsing", "Cart Management", "Responsive UI"]
const techStack = ["HTML5", "NodeJS", "MongoDB", "CSS3", "JavaScript", "Bootstrap5"];

const page = () => {
  return (
    <div className="md:h-[88vh] w-full flex flex-row justify-center md:items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-10 md:mx-40">
        {/* Left side */}
        <div className="flex flex-col items-start">
          <div className="mt-20 md:mt-24 mb-40 md:mb-0 w-[340px] md:w-[400px] md:h-[200px] h-0 relative">
            <Image
              src= "/foodflow.png"
              alt= "FoodFlow"
              width={800}
              height={200}
              className="object-cover md:[500px] rounded-lg shadow-lg border border-[#333333]"
              onClick={() => {
                window.open("https://thefoodflow.live", "_blank");
              }}
            />
          </div>
          <h1 className="text-white md:text-left mt-16 md:mt-8 mb-4 text-3xl font-bold">
            FoodFlow
          </h1>
          <p className="text-justify mb-8 md:text-lg md:text-white text-base text-gray-400 mr-4 md:text-left">
          In this project, I developed the website responsiveness for optimal user experience on diverse devices.
            The foodflow led back-end development efforts for the web application.
            in this group project I played a key role in developing front of the application.          </p>
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
            {functionalities.map((functional, index) => (
              <div key={index}>
                <div className="block md:hidden text-white">- {functional}</div>
                <div className="hidden md:block text-white">- {functional}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-row gap-4 w-full mb-14 ">
            <div className="py-2 px-5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
              <button
                onClick={ () => {
                  window.open("https://thefoodflow.live", "_blank");
                } }
              >
                Visit Site
              </button>
            </div>

            <div className="py-2 px-5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
              <button
                onClick={ () => {
                  window.open("https://thefoodflow.live", "_blank")
                } }
              >
                Visit GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
