import { Metadata } from "next";
import HeroSection from "./components/heroSection";
import ExperienceSection from "./components/experienceSection";
import CoursesSection from "./components/coursesSection";
import DesktopNavbar from "./components/desktopNavbar";
import MobileNavbar from "./components/mobileNavbar";
import ContactFormSection from "./components/contactMeMobile";
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
        url: "http://yourdomain.com/images/profile.png",
        width: 800,
        height: 600,
        alt: "A descriptive alternative text for your image",
      },
    ],
    url: "https://yourdomain.com",
  },
  keywords: [
    "frontend development",
    "web development",
    "programming portfolio",
    "Spiros Doukeris",
    "Computer Science Under-Graduate",
    "Computer Science",
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
