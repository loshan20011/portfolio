'use client';

import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="md:h-[88vh] w-full flex flex-row justify-center md:items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-14 md:mx-40">
        {/* Left side */}
        <div className="flex flex-col items-start">
          <div className="mt-20 md:mt-24 mb-40 md:mb-0 w-[355px] md:w-[400px] md:h-[200px] h-0 relative">
            <Image
              src="/foodflow.png"
              alt="FoodFlow"
              width={800}
              height={200}
              className="object-cover md:[500px] rounded-lg shadow-lg border border-[#333333]"
              onClick={() => window.open("https://thefoodflow.live/", "_blank")}
            />
          </div>
          <h1 className="text-white md:text-left mt-16 md:mt-8 mb-4 text-3xl font-bold">
            FoodFlow
          </h1>
          <p className="text-justify mb-8 md:text-lg md:text-white text-base text-gray-400 mr-4 md:text-left">
            In this project, I have crafted a fully functional Amazon Clone
            using the popular React library and integrated secure authentication
            through Firebase. This e-commerce application mirrors the design and
            functionality of Amazon, allowing users to browse products, add them
            to the cart, and proceed with a seamless and responsive user
            interface.
          </p>
        </div>

        {/* Right side */}
        <div className="flex flex-col ml-0 md:ml-16 justify-center">
          <div className="text-white mb-8 md:ml-0">
            <span className="font-semibold">Tech Stack:</span>
            <span> React | Next.js | Tailwind CSS | Firebase</span>
          </div>
          <div className="text-white mb-8 md:ml-0">
            <h2 className="text-xl font-semibold mb-4">Functionalities</h2>
            <ul>
              <li>- Browse products</li>
              <li>- Add products to cart</li>
              <li>- Seamless user interface</li>
              {/* Add more functionalities as needed */}
            </ul>
          </div>
          <div className="flex flex-row gap-4 w-full mb-14 ">
            <div className="py-2 px-5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
              <button
                onClick={() =>
                  window.open("https://thefoodflow.live/", "_blank")
                }
              >
                Visit Site
              </button>
            </div>

            <div className="py-2 px-5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
              <button
                onClick={() =>
                  window.open("https://thefoodflow.live/", "_blank")
                }
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
