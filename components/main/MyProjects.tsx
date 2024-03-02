'use client'

import React from "react";
import ProjectCard from "./ProjectCard";

const MyProjects = () => {
  return (
    <section
    id="projects"
    className="flex flex-col items-center justify-center">
      <h1 className="text-[40px] font-semibold bg-clip-text bg-gradient-to-r text-[#c7c7c7ad] to-[#3a3a3a]  py-20">
        My Projects
      </h1>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mb-10">
        <ProjectCard
          src="/thrive360.png"
          title="Thrive360"
          description="In this project, I have crafted a fully functional Amazon Clone using the popular React library and integrated secure authentication through Firebase. This e-commerce application mirrors the design and functionality of Amazon, allowing users to browse products, add them to the cart, and proceed with a seamless and responsive user interface."
          techStack={["React", "Next.js", "Tailwind-CSS", "Firebase"]}
          setClick={() => {
            window.open("https://thethrive360.net/", "_blank");
          }}
        />
        <ProjectCard
          src="/smartedu.png"
          title="SmartEdu"
          description="In this project, I have crafted a fully functional Amazon Clone using the popular React library and integrated secure authentication through Firebase. This e-commerce application mirrors the design and functionality of Amazon, allowing users to browse products, add them to the cart, and proceed with a seamless and responsive user interface."
          techStack={["React", "Next.js", "Tailwind CSS", "Firebase"]}
          setClick={() => {
            window.open("https://smartedu.com.lk/", "_blank");            
          }}
        />
        <ProjectCard
          src="/amazonclone.png"
          title="Amazon Clone"
          description="In this project, I have crafted a fully functional Amazon Clone using the popular React library and integrated secure authentication through Firebase. This e-commerce application mirrors the design and functionality of Amazon, allowing users to browse products, add them to the cart, and proceed with a seamless and responsive user interface."
          techStack={["React", "Next.js", "Tailwind CSS", "Firebase"]}
          setClick={() => {
            window.open("https://clone-45ed0.web.app/", "_blank");
          }}
        />
      </div>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mb-10">
        <ProjectCard
          src="/foodflow.png"
          title="FoodFlow"
          description="In this project, I have crafted a fully functional Amazon Clone using the popular React library and integrated secure authentication through Firebase. This e-commerce application mirrors the design and functionality of Amazon, allowing users to browse products, add them to the cart, and proceed with a seamless and responsive user interface."
          techStack={["React", "Next.js", "Tailwind CSS", "Firebase"]}
          setClick={() => {
            window.open("https://thefoodflow.live/", "_blank");
          }}
        />
        <ProjectCard
          src="/sportsnext.png"
          title="SportNext"
          description="In this project, I have crafted a fully functional Amazon Clone using the popular React library and integrated secure authentication through Firebase. This e-commerce application mirrors the design and functionality of Amazon, allowing users to browse products, add them to the cart, and proceed with a seamless and responsive user interface."
          techStack={["React", "Next.js", "Tailwind CSS", "Firebase"]}
          setClick={() => {
            window.open("https://sports-next.vercel.app/", "_blank");            
          }}
        />
        <ProjectCard
          src="/amazonclone.png"
          title="Amazon Clone"
          description="In this project, I have crafted a fully functional Amazon Clone using the popular React library and integrated secure authentication through Firebase. This e-commerce application mirrors the design and functionality of Amazon, allowing users to browse products, add them to the cart, and proceed with a seamless and responsive user interface."
          techStack={["React", "Next.js", "Tailwind CSS", "Firebase"]}
          setClick={() => {
            window.open("https://clone-45ed0.web.app/", "_blank");
          }}
        />
      </div>
    </section>
  );
};

export default MyProjects;
