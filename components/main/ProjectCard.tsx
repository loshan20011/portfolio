'use client'

import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  techStack: string[];
  setClick: () => void;
}

const ProjectCard = ({ src, title, description, techStack, setClick }: Props) => {
  return (
      <button onClick={setClick}
        className="text-left relative z-50 project-primary overflow-hidden rounded-lg shadow-lg border border-[#333333]">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="md:max-h-[240px] w-full"
        />

        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-400">{description}</p>
          <div className="flex flex-col md:flex-row gap-2 mt-4">
            <span className="text-gray-400">Tech Stack:</span>
            <div className="flex flex-row md:gap-2 gap-2">
              {techStack.map((tech, index) =>
                techStack.length - 1 !== index ? (
                  <div>
                    <span key={index} className="block md:hidden text-gray-400">
                      {tech} 
                    </span>
                    <span key={index} className="hidden md:block text-gray-400">
                      {tech} |
                    </span>
                  </div>
                ) : (
                  <span key={index} className="text-gray-400">
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </button>
  );
};

export default ProjectCard;
