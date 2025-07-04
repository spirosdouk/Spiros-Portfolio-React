import { Metadata } from "next";
import ContactFormSection from "./components/contact/ContactMeMobile";
import CoursesSection from "./components/courses/CoursesSection";
import ExperienceSection from "./components/experience/ExperienceSection";
import HeroSection from "./components/hero/HeroSection";
import DesktopNavbar from "./components/navbar/DesktopNavbar";
import MobileNavbar from "./components/navbar/MobileNavbar";
import ProjectSection from "./components/projects/ProjectSection";
import StructuredData from "./components/StructuredData";

export const metadata: Metadata = {
  title: "Spiros Doukeris - Frontend Developer Portfolio",
  description:
    "Explore the portfolio of Spiros Doukeris, a dedicated Frontend Developer showcasing his journey from Computer Science student to professional developer at Logicea.",
  openGraph: {
    title: "Spiros Doukeris - Frontend Developer",
    description:
      "Discover the projects and technical skills of Spiros Doukeris on his official portfolio website. Featuring React, Next.js, TypeScript, and Unity projects.",
    images: [
      {
        url: "https://spiros-portfolio.vercel.app/images/profile.png",
        width: 800,
        height: 600,
        alt: "Spiros Doukeris - Frontend Developer Profile Picture",
      },
    ],
    url: "https://spiros-portfolio.vercel.app/",
  },
  keywords: [
    "frontend development",
    "web development",
    "programming portfolio",
    "Spiros Doukeris",
    "Computer Science Under-Graduate",
    "Computer Science",
    "React",
    "Next.js",
    "TypeScript",
    "Logicea",
    "University of Crete",
    "React Native",
    "Angular",
    "Unity",
    "C#",
    "JavaScript",
    "Full Stack Developer",
  ],
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <DesktopNavbar />
      <MobileNavbar />
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <CoursesSection />
      <ContactFormSection />
    </>
  );
}
