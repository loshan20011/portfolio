"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Socials } from "@/constants";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <div className="flex flex-row gap-5 mt-20">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[15px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">Mobile App Developer</h1>
          </motion.div>
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[15px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">Fullstack Developer</h1>
          </motion.div>
        </div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hey,
            <div className="mt-5">
              I&apos;m
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                Loshan Selvaraj{" "}
              </span>
            </div>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a self-taught full-stack developer with a degree in Computer
          Science from the University of Westminster. I&apos;m committed to
          constantly improving my skills and staying updated with the latest
          technologies. My combination of
          technical expertise and strong interpersonal skills makes me a
          valuable addition to any team. If you're seeking a motivated,
          passionate, and skilled tech professional, I&apos;m the right fit for
          your team!
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn more
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center  items-center"
      >
        <img
          src="/mainIconsdark.svg"
          alt="tech-stack-icon"
          className="w-[650px] mt-[5.5rem] object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
