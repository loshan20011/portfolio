'use client'

import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#c7c7c7] to-[#3a3a3a]  py-20">
        My Projects
      </h1>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mb-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Amazon Clone"
          description="In this project, I have crafted a fully functional Amazon Clone using the popular React library and integrated secure authentication through Firebase. This e-commerce application mirrors the design and functionality of Amazon, allowing users to browse products, add them to the cart, and proceed with a seamless and responsive user interface."
          techStack={["React", "Next.js", "Tailwind CSS", "Firebase"]}
          setClick={() => {
            console.log("Visit Site");
          }}
        />
        <ProjectCard
          src="/NextWebsite.png"
          title="Amazon Clone"
          description="In this project, I have crafted a fully functional Amazon Clone using the popular React library and integrated secure authentication through Firebase. This e-commerce application mirrors the design and functionality of Amazon, allowing users to browse products, add them to the cart, and proceed with a seamless and responsive user interface."
          techStack={["React", "Next.js", "Tailwind CSS", "Firebase"]}
          setClick={() => {
            console.log("Visit Site");
          }}
        />
        <ProjectCard
          src="/NextWebsite.png"
          title="Amazon Clone"
          description="In this project, I have crafted a fully functional Amazon Clone using the popular React library and integrated secure authentication through Firebase. This e-commerce application mirrors the design and functionality of Amazon, allowing users to browse products, add them to the cart, and proceed with a seamless and responsive user interface."
          techStack={["React", "Next.js", "Tailwind CSS", "Firebase"]}
          setClick={() => {
            console.log("Visit Site");
          }}
        />
      </div>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mb-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Amazon Clone"
          description="In this project, I have crafted a fully functional Amazon Clone using the popular React library and integrated secure authentication through Firebase. This e-commerce application mirrors the design and functionality of Amazon, allowing users to browse products, add them to the cart, and proceed with a seamless and responsive user interface."
          techStack={["React", "Next.js", "Tailwind CSS", "Firebase"]}
          setClick={() => {
            console.log("Visit Site");
          }}
        />
        <ProjectCard
          src="/NextWebsite.png"
          title="Amazon Clone"
          description="In this project, I have crafted a fully functional Amazon Clone using the popular React library and integrated secure authentication through Firebase. This e-commerce application mirrors the design and functionality of Amazon, allowing users to browse products, add them to the cart, and proceed with a seamless and responsive user interface."
          techStack={["React", "Next.js", "Tailwind CSS", "Firebase"]}
          setClick={() => {
            console.log("Visit Site");
          }}
        />
        <ProjectCard
          src="/NextWebsite.png"
          title="Amazon Clone"
          description="In this project, I have crafted a fully functional Amazon Clone using the popular React library and integrated secure authentication through Firebase. This e-commerce application mirrors the design and functionality of Amazon, allowing users to browse products, add them to the cart, and proceed with a seamless and responsive user interface."
          techStack={["React", "Next.js", "Tailwind CSS", "Firebase"]}
          setClick={() => {
            console.log("Visit Site");
          }}
        />
      </div>
    </div>
  );
};

export default Projects;
