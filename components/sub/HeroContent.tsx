"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { BoltIcon } from "@heroicons/react/24/solid";
import { Socials } from "@/constants";
import Image from "next/image";
import banner from "../../public/Programming-Language.png";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="h-full flex flex-row items-center justify-center md:px-20 px-10 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col md:gap-5 justify-center md:m-auto m-0 text-start">
        <div className="flex flex-col md:flex-row md:gap-5 gap-2 md:mt-[120px] mt-[100px]">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[15px] border border-[#8080808b] opacity-[0.9]"
          >
            <BoltIcon className="text-[#8080808b] mr-[10px] h-5 w-5 md:size-5 size-10" />
            <h1 className="Welcome-text text-[13px]">Fullstack Developer</h1>
          </motion.div>

          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[15px] border border-[#8080808b] opacity-[0.9]"
          >
            <BoltIcon className="text-[#8080808b] mr-[10px] h-5 w-5 md:size-5 size-10" />
            <h1 className="Welcome-text text-[13px]">Mobile App Developer</h1>
          </motion.div>
        </div>
        
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white md:max-w-[600px] w-auto h-auto"
        >
          <span className="md:text-6xl text-4xl">
            Hey,
            <div className="mt-5">
              I&apos;m
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c7c7c7] to-[#3a3a3a]">
                {" "}
                Loshan Selvaraj{" "}
              </span>
            </div>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="md:text-lg text-base text-gray-400 text-justify my-5 max-w-[600px]"
        >
          I&apos;m a self-taught full-stack developer with a degree in Computer
          Science from the University of Westminster. I&apos;m committed to
          constantly improving my skills and staying updated with the latest
          technologies. My combination of technical expertise and strong
          interpersonal skills makes me a valuable addition to any team. If
          you&apos;re seeking a motivated, passionate, and skilled tech
          professional, I&apos;m the right fit for your team!
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 w-full flex flex-row gap-5 text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          <div className="flex flex-row gap-5">
            {Socials.map((social) => (
              <Image
                key={social.name}
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="cursor-pointer hover:animate-slowspin hover:scale-110 z-[50]"
                onClick={() => {
                  window.open(social.link, "_blank");
                }}
              />
            ))}
          </div>
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full md:flex justify-center hidden items-center"
      >
        <Image
          src={banner}
          alt="tech-stack-icon"
          className="w-[650px] opacity-45 h-[450px] mt-[6rem] object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
