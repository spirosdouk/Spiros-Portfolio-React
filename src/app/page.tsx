import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";
import ExperienceSection from "./components/experienceSection";
import CoursesSection from "./components/coursesSection";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <CoursesSection />
    </>
  );
}
