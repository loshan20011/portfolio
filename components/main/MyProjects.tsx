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
            title="EliteBlue Print"
            description="In this project, I pioneered and executed a groundbreaking concept: transforming text descriptions into visually stunning 2D floor plans through innovative implementation. It led back-end CRUD operations, API connections and front-end.
            The elite blue print implemented the backend logic (algorithm), responsible for the innovative generation of 2D floor plans."
            techStack={["React", "Tailwind CSS", "MongoDB"]}
          />
        </Link>
        <Link href="./projects/SmartEdu">
          <ProjectCard
            src="/foodflow.png"
            title="The FoodFlow"
            description="In this project, I developed the website responsiveness for optimal user experience on diverse devices.
            The foodflow led back-end development efforts for the web application.
            in this group project I played a key role in developing front of the application."
            techStack={["HTML", "Node.js", "MongoDB"]}
          />
        </Link>
        <Link href="./projects/AmazonClone">
          <ProjectCard
            src="/sportsnext.png"
            title="Sports Next"
            description="In this project, I designed and built an e-commerce website showcasing products, complete with a user-friendly shopping cart system."
            techStack={["HTML5", "CSS3", "JavaScript"]}
          />
        </Link>
      </div>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mb-10">
        {/* <Link href=""> */}
        <Link href="./projects/Thrive360">
          <ProjectCard
            src="/beehoney.png"
            title="BeeHoney"
            description="In this project, I have crafted a conceptualized, designed, and developed a responsive website for the business.."
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
        <Link href="./projects/SmartEdu">
          <ProjectCard
            src="/smartedu.png"
            title="SmartEdu"
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
            src="/hminterior.png"
            title="HM Interior"
            description="In this project, I have crafted a fully functional Amazon Clone using the popular React library and integrated secure authentication through Firebase. This e-commerce application mirrors the design and functionality of Amazon, allowing users to browse products, add them to the cart, and proceed with a seamless and responsive user interface."
            techStack={["React", "Next.js", "Tailwind CSS", "Firebase"]}
          />
        </Link>
        <Link href="./projects/AmazonClone">
          <ProjectCard
            src="/amazonclone.png"
            title="Shopping Center"
            description="In this project, I developed an application utilizing Java for console operations and Java Swing for GUI, featuring product storage, basket cart management, and user authentication with file handling capabilities."
            techStack={["React", "Next.js", "Tailwind CSS", "Firebase"]}
          />
        </Link>
      </div>
    </section>
  );
};

export default MyProjects;
