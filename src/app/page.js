import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar"
import About from "./components/AboutMe"
import AboutSection from "./components/AboutMe";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto px-12 py-4">
      <Navbar/>
      <div class="container mx-auto px-12 py-20">
      <HeroSection />
      <div className="py-8"></div>
      <AboutSection />
      <div className="py-8"></div>
      <ProjectsSection />
      </div>
    </main>
  );
}
