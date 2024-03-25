"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

const MyProjects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center"
    >
      <h1 className="text-[40px] font-semibold bg-clip-text bg-gradient-to-r text-[#c7c7c7ad] to-[#3a3a3a]  py-20">
        My Projects
      </h1>

      
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mb-10">
        {/* <Link href=""> */}
        <Link href="./projects/EliteBluPrint">
          <ProjectCard
            src="/elitebluprint.png"
            title="Thrive360"
            description="In this project, I have crafted a fully functional Amazon Clone using the popular React library and integrated secure authentication through Firebase. This e-commerce application mirrors the design and functionality of Amazon, allowing users to browse products, add them to the cart, and proceed with a seamless and responsive user interface."
            techStack={["React", "Next.js", "Tailwind CSS", "Firebase"]}
          />
        </Link>
        <Link href="./projects/SmartEdu">
          <ProjectCard
            src="/smartedu.png"
            title="SmartEdu"
            description="In this project, I have crafted a fully functional Amazon Clone using the popular React library and integrated secure authentication through Firebase. This e-commerce application mirrors the design and functionality of Amazon, allowing users to browse products, add them to the cart, and proceed with a seamless and responsive user interface."
            techStack={["React", "Next.js", "Tailwind CSS", "Firebase"]}
          />
        </Link>
        <Link href="./projects/AmazonClone">
          <ProjectCard
            src="/amazonclone.png"
            title="Amazon Clone"
            description="In this project, I have crafted a fully functional Amazon Clone using the popular React library and integrated secure authentication through Firebase. This e-commerce application mirrors the design and functionality of Amazon, allowing users to browse products, add them to the cart, and proceed with a seamless and responsive user interface."
            techStack={["React", "Next.js", "Tailwind CSS", "Firebase"]}
          />
        </Link>
      </div>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mb-10">
        {/* <Link href=""> */}
        <Link href="./projects/Thrive360">
          <ProjectCard
            src="/thrive360.png"
            title="Thrive360"
            description="In this project, I have crafted a fully functional Amazon Clone using the popular React library and integrated secure authentication through Firebase. This e-commerce application mirrors the design and functionality of Amazon, allowing users to browse products, add them to the cart, and proceed with a seamless and responsive user interface."
            techStack={["React", "Next.js", "Tailwind CSS", "Firebase"]}
          />
        </Link>
        <Link href="./projects/SmartEdu">
          <ProjectCard
            src="/smartedu.png"
            title="SmartEdu"
            description="In this project, I have crafted a fully functional Amazon Clone using the popular React library and integrated secure authentication through Firebase. This e-commerce application mirrors the design and functionality of Amazon, allowing users to browse products, add them to the cart, and proceed with a seamless and responsive user interface."
            techStack={["React", "Next.js", "Tailwind CSS", "Firebase"]}
          />
        </Link>
        <Link href="./projects/AmazonClone">
          <ProjectCard
            src="/amazonclone.png"
            title="Amazon Clone"
            description="In this project, I have crafted a fully functional Amazon Clone using the popular React library and integrated secure authentication through Firebase. This e-commerce application mirrors the design and functionality of Amazon, allowing users to browse products, add them to the cart, and proceed with a seamless and responsive user interface."
            techStack={["React", "Next.js", "Tailwind CSS", "Firebase"]}
          />
        </Link>
      </div>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mb-10">
        {/* <Link href=""> */}
        <Link href="./projects/Thrive360">
          <ProjectCard
            src="/thrive360.png"
            title="Thrive360"
            description="In this project, I have crafted a fully functional Amazon Clone using the popular React library and integrated secure authentication through Firebase. This e-commerce application mirrors the design and functionality of Amazon, allowing users to browse products, add them to the cart, and proceed with a seamless and responsive user interface."
            techStack={["React", "Next.js", "Tailwind CSS", "Firebase"]}
          />
        </Link>
        <Link href="./projects/SmartEdu">
          <ProjectCard
            src="/smartedu.png"
            title="SmartEdu"
            description="In this project, I have crafted a fully functional Amazon Clone using the popular React library and integrated secure authentication through Firebase. This e-commerce application mirrors the design and functionality of Amazon, allowing users to browse products, add them to the cart, and proceed with a seamless and responsive user interface."
            techStack={["React", "Next.js", "Tailwind CSS", "Firebase"]}
          />
        </Link>
        <Link href="./projects/AmazonClone">
          <ProjectCard
            src="/amazonclone.png"
            title="Amazon Clone"
            description="In this project, I have crafted a fully functional Amazon Clone using the popular React library and integrated secure authentication through Firebase. This e-commerce application mirrors the design and functionality of Amazon, allowing users to browse products, add them to the cart, and proceed with a seamless and responsive user interface."
            techStack={["React", "Next.js", "Tailwind CSS", "Firebase"]}
          />
        </Link>
      </div>
    </section>
  );
};

export default MyProjects;
