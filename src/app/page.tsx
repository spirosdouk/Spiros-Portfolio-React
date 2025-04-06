import { Metadata } from "next";
import ContactFormSection from "./components/contactMeMobile";
import CoursesSection from "./components/coursesSection";
import ExperienceSection from "./components/experienceSection";
import HeroSection from "./components/heroSection";
import DesktopNavbar from "./components/navbar/desktopNavbar";
import MobileNavbar from "./components/navbar/mobileNavbar";
import ProjectSection from "./components/projectSection";

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
