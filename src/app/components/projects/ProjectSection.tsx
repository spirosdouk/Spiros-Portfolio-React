import React from "react";
import { promises as fs } from "fs";
import path from "path";
import { Project } from "./Cards/projectData";
import ProjectCard from "./Cards/ProjectCards";

export default async function ProjectsSection() {
  const filePath = path.join(process.cwd(), "public", "projects.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const projects: Project[] = JSON.parse(fileContents);

  return (
    <section
      id="projects"
      className="text-primary px-4 lg:px-12 pt-14 lg:pt-18"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-center lg:py-4">
          Some Of My Projects
        </h2>
        {projects && projects.length > 0 ? (
          <div className="pt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                imageAlt={project.imageAlt}
                techStack={project.techStack}
                liveDemoUrl={project.liveDemoUrl}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 pt-12">
            No projects to display yet.
          </p>
        )}
      </div>
    </section>
  );
}
