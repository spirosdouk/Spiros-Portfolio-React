"use client";

import React from "react";
import { ProjectCard } from "./Cards/ProjectCards";
import useProjects from "@/app/hooks/useProjects";

const ProjectsSection = () => {
  const { projects } = useProjects();

  return (
    <section id="projects" className="text-white px-4 lg:px-12 pt-14 lg:pt-18">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-center lg:py-4 ">
          Some Of My Projects
        </h2>

        {projects && projects.length > 0 ? (
          <div className="pt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">
            No projects to display yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
