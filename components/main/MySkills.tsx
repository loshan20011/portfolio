"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Skill_data } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const MySkills = () => {
  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center">
      <h1 className="text-[40px] font-semibold bg-clip-text bg-gradient-to-r text-[#c7c7c7ad] to-[#3a3a3a] py-20">
        My Technical Skills
      </h1>
      <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
        <Swiper
          slidesPerView={5}
          loop={true} 
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {Skill_data.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                className="hover:scale-105"
                src={skill.Image}
                alt={skill.skill_name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {Skill_data.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                className="hover:scale-105"
                src={skill.Image}
                alt={skill.skill_name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MySkills;
