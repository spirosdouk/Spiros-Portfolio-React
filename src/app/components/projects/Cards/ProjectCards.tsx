import React from "react";
import Image from "next/image";
import { Project, techIconComponents } from "./projectData";

type ProjectCardProps = Omit<Project, "id">;

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  techStack,
  liveDemoUrl,
  githubUrl,
}) => {
  return (
    <div className="project-card rounded-lg p-6 shadow-lg">
      <div className="mb-4">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={800}
          height={450}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="tech-stack flex flex-wrap gap-2 mb-4">
        {techStack.map((techKey) =>
          React.cloneElement(techIconComponents[techKey], { key: techKey })
        )}
      </div>
      <div className="links flex space-x-4 mt-auto pt-4">
        {liveDemoUrl ? (
          <a
            href={liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-blue text-primary px-4 py-2 rounded-lg hover:bg-accent-blue-hover transition text-sm font-medium"
          >
            Live Demo
          </a>
        ) : (
          <span className="bg-dark-accent text-light-secondary px-4 py-2 rounded-lg cursor-not-allowed opacity-60 text-sm font-medium">
            Live Demo
          </span>
        )}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-dark-secondary text-primary px-4 py-2 rounded-lg hover:bg-dark-tertiary transition text-sm font-medium"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};
