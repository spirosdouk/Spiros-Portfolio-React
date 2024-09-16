import HeroSection from "./components/heroSection";
import ExperienceSection from "./components/experienceSection";
import CoursesSection from "./components/coursesSection";
import DesktopNavbar from "./components/desktopNavbar";
import MobileNavbar from "./components/mobileNavbar";
import ContactFormSection from "./components/contactMeMobile";

export default function Home() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
      <HeroSection />
      <ExperienceSection />
      <CoursesSection />
      <ContactFormSection />
    </>
  );
}
