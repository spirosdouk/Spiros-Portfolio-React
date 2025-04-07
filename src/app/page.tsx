import { Metadata } from "next";
import ContactFormSection from "./components/contact/ContactMeMobile";
import CoursesSection from "./components/courses/CoursesSection";
import ExperienceSection from "./components/experience/ExperienceSection";
import HeroSection from "./components/hero/HeroSection";
import DesktopNavbar from "./components/navbar/DesktopNavbar";
import MobileNavbar from "./components/navbar/MobileNavbar";
import ProjectSection from "./components/projects/ProjectSection";

export const metadata: Metadata = {
  title: "Spiros Doukeris - Front End Developer Portfolio",
  description:
    "Explore the portfolio of Spiros Doukeris, a dedicated Front End Developer showcasing his journey.",
  openGraph: {
    title: "Spiros Doukeris - Front End Developer",
    description:
      "Discover the projects and technical skills of Spiros Doukeris on his official portfolio website.",
    images: [
      {
        url: "https://spiros-portfolio.vercel.app/images/profile.png",
        width: 800,
        height: 600,
        alt: "",
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
  ],
};

export default function Home() {
  return (
    <>
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
