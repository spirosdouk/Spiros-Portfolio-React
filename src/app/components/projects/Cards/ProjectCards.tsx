import React from "react";
import Image from "next/image";
import { Project, techIconComponents } from "./projectData";

type ProjectCardProps = Omit<Project, "id">;

export default function ProjectCard({
  title,
  description,
  imageUrl,
  imageAlt,
  techStack,
  liveDemoUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="project-card rounded-lg p-6 shadow-lg">
      <div className="mb-4 relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
          priority={false}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
      <div className="tech-stack flex flex-wrap gap-2 mb-4">
        {techStack.map((techKey) =>
          React.cloneElement(techIconComponents[techKey], { key: techKey }),
        )}
      </div>
      <div className="links flex space-x-4 mt-auto pt-4">
        {liveDemoUrl ? (
          <a
            href={liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-blue text-white px-4 py-2 rounded-lg hover:bg-accent-blue-hover transition-colors duration-200 text-sm font-medium"
          >
            Live Demo
          </a>
        ) : (
          <span className="bg-dark-accent text-gray-200 px-4 py-2 rounded-lg cursor-not-allowed opacity-60 text-sm font-medium">
            Live Demo
          </span>
        )}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-dark-secondary text-primary px-4 py-2 rounded-lg hover:bg-dark-tertiary transition-colors duration-200 text-sm font-medium"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
