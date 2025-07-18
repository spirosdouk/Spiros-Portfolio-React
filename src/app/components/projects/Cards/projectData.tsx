import React from "react";
import { FaAngular, FaBootstrap, FaReact, FaUnity } from "react-icons/fa";
/* eslint-disable-next-line react/no-danger */
import {
  SiTypescript,
  SiNextdotjs,
  SiChakraui,
  SiVercel,
  SiC,
} from "react-icons/si";

export type TechKey =
  | "react"
  | "typescript"
  | "chakraui"
  | "vercel"
  | "angular"
  | "bootstrap"
  | "nextjs"
  | "unity"
  | "csharp";

export const techIconComponents: Record<TechKey, JSX.Element> = {
  react: <FaReact className="h-6 w-6 text-blue-500" title="React" />,
  typescript: (
    <SiTypescript className="h-6 w-6 text-blue-600" title="TypeScript" />
  ),
  chakraui: <SiChakraui className="h-6 w-6 text-teal-500" title="Chakra UI" />,
  vercel: <SiVercel className="h-6 w-6 text-black" title="Vercel" />,
  angular: <FaAngular className="h-6 w-6 text-red-600" title="Angular" />,
  bootstrap: (
    <FaBootstrap className="h-6 w-6 text-purple-600" title="Bootstrap" />
  ),
  nextjs: <SiNextdotjs className="h-6 w-6 text-gray-800" title="Next.js" />,
  unity: <FaUnity className="h-6 w-6 white-purple-500" title="Unity" />,
  csharp: <SiC className="h-6 w-6 text-purple-700" title="C#" />,
};

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  techStack: TechKey[];
  liveDemoUrl: string | null;
  githubUrl: string;
}
