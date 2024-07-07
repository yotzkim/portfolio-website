
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar"
import AboutSection from "./components/AboutMe";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mx-auto px-12 py-20">
      <HeroSection />
      <div className="py-8"></div>
      <AboutSection />
      <div className="py-8"></div>
      <ProjectsSection />
      </div>
      <Footer/>
    </main>
  );
}
