// AboutMe.js
"use client";

import Image from "next/image";
import React, { useTransition, useState } from "react";
import image from "../../public/loshan.png";
import TabButton from "../sub/TabButton";

const TAB_DATA = [
  {
    id: "education",
    label:
      "- University of Westminster ( Informatics Institute of Technology | Sri Lanka ) \n2022 - present\n- D.S.Senanayake College - Colombo 07 \nGCE A/L Exam | GCE O/L Exam",
  },
  {
    id: "workExperience",
    label:
      "- Sales Executive ( Tele Sales Agent ) \nAcent Services – 302, Galle Road, Colombo - 04, Sri Lanka 12/2021 – 06/2022 | rejoined 6/2023 - 10/2023",
  },
];

const AboutMe = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const active = true;

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
     id="about-me"
     className="flex flex-col items-center min-h-[100vh] justify-center">
      <h1 className="text-[40px] text-center font-semibold bg-clip-text bg-gradient-to-r text-[#c7c7c7ad] to-[#3a3a3a] py-20">
        About Me
      </h1>

      <div className="h-full md:max-w-[65%] md:ml-40 w-full text-left flex md:flex-row flex-col md:justify-start gap-10 items-center">
        <Image
          src={image}
          alt="loshan"
          width={300}
          height={300}
          className="rounded-full bg-[#c7c7c7] shadow-lg"
        />
        <hr className="min-w-36 h-1 bg-gray-300 hidden md:block rotate-90" />
        <div className="flex flex-col md:m-auto w-full m-auto justify-center md:justify-start">
          <div className="flex justify-center flex-row md:gap-10 gap-3 flex-nowrap relative z-50">
            <TabButton
              selectTab={() => {
                handleTabChange("education");
                console.log("Education");
              }}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => {
                handleTabChange("workExperience");
                console.log("Work Experience");
              }}
              active={tab === "workExperience"}
            >
              Work Experience
            </TabButton>
          </div>

          <div className="mt-8 md:w-[85%] w-full px-10 md:px-0 min-h-40 text-gray-400 flex gap-3 flex-col md:justify-items-start ">
            {TAB_DATA.find((item) => item.id === tab)
              ?.label.split("\n")
              .map((line, index) => (
                <p key={index}>{line}</p>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
