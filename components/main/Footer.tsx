"use client";

import React from "react";
import { RxDiscordLogo, RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="font-bold text-[16px]">Reach me on</div>
          <div className=" h-auto flex flex-row gap-20 items-center justify-start">
            <div
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/loshan-selvaraj-a78638215/",
                  "_blank"
                )
              }
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </div>
            <p
              onClick={() => {
                window.open("https://github.com/loshan20011", "_blank");
              }}
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p>
          </div>

          <div className="text-[15px] text-center">
            &copy; 2024 Loshan Selvaraj. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
