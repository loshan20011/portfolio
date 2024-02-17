import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mb-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Project 1"
          description="This is a project"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Project 2"
          description="This is a project"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Project 3"
          description="This is a project"
        />
      </div>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mb-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Project 1"
          description="This is a project"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Project 2"
          description="This is a project"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Project 3"
          description="This is a project"
        />
      </div>
    </div>
  );
};

export default Projects;
