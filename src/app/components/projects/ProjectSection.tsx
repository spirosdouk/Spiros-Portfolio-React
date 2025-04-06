import React from "react";
import Image from "next/image";
import { FaAngular, FaBootstrap, FaReact, FaUnity } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiChakraui,
  SiVercel,
  SiCsharp,
} from "react-icons/si";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="text-white px-4 lg:px-12 pt-14 lg:pt-18">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-center lg:py-4 ">
          Some Of My Projects
        </h2>

        <div className="pt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {/* Project 1: GameHub */}
          <div className="project-card rounded-lg p-6 shadow-lg">
            <div className="mb-4">
              <Image
                src="/images/gamelib.png"
                alt="GameHub Screenshot"
                width={800}
                height={450}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2">GameHub</h3>
            <p className="text-gray-300 mb-4">
              A video game discovery app that helps you find new and interesting
              games to play.
            </p>
            <div className="tech-stack flex space-x-2 mb-4">
              <FaReact className="h-6 w-6 text-blue-500" />
              <SiTypescript className="h-6 w-6 text-blue-600" />
              <SiChakraui className="h-6 w-6 text-teal-500" />
              <SiVercel className="h-6 w-6 text-black" />
            </div>
            <div className="links space-x-4">
              <a
                href="https://game-hub-pi-blue-85.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/spirosdouk/GameLib-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Project 2: RecipeSharing Platform */}
          <div className="project-card rounded-lg p-6 shadow-lg">
            <div className="mb-7">
              <Image
                src="/images/recipesapp.png"
                alt="RecipeSharing App Screenshot"
                width={800}
                height={450}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              RecipeSharing Platform
            </h3>
            <p className="text-gray-300 mb-4">
              A web app for sharing and discovering recipes based on dietary
              preferences, cuisine, and available ingredients.
            </p>
            <div className="tech-stack flex space-x-2 mb-4">
              <FaAngular className="h-6 w-6 text-red-600" />
              <SiTypescript className="h-6 w-6 text-blue-600" />
              <FaBootstrap className="h-6 w-6 text-purple-600" />
              <SiNextdotjs className="h-6 w-6 text-gray-800" />
            </div>
            <div className="links space-x-4">
              <a
                href="#"
                className="bg-gray-500 text-white px-4 py-2 rounded-lg cursor-not-allowed opacity-50"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/spirosdouk/RecipeSharing-App"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Project 3: Unity WebGL Game */}
          <div className="project-card rounded-lg p-6 shadow-lg">
            <div className="mb-4">
              <Image
                src="/images/runnersgame.png"
                alt="GameHub Screenshot"
                width={800}
                height={450}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2">Unity Runner Game</h3>
            <p className="text-gray-300 mb-4">
              A fast-paced runner game developed using Unity and deployed as a
              WebGL application. Navigate through obstacles, collect power-ups,
              and achieve high scores!
            </p>
            <div className="tech-stack flex space-x-2 mb-4">
              <FaUnity className="h-6 w-6 text-purple-600" />
              <SiCsharp className="h-6 w-6 text-blue-700" />
            </div>
            <div className="links space-x-4">
              <a
                href="https://spirosdouk.github.io/runner-game/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/spirosdouk/runner-game"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
