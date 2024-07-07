"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Center for Energy Research App",
    description: "⚠️ Currently under development! ⚠️ \nA mobile app designed to educate users on clean energy using interactive data models and visualizations",
    toolsUsed: "React Native, TypeScript, MySQL, Express.js, TypeScript",
    image: "/images/cer.png",
    gitUrl: "https://github.com/Center-For-Energy-TEC-App/Tec-App",
    previewUrl: "https://github.com/Center-For-Energy-TEC-App/Tec-App",
  },
  {
    id: 2,
    title: "Patriots and Paws",
    description: "A web app built for nonprofit Patriots and Paws to process and analyze veteran service requests, includes an admin portal for staff",
    toolsUsed: "MongoDB, React, Node.js, Express.js, TypeScript, Next.js, MaterialUI",
    image: "/images/pap.png",
    gitUrl: "https://github.com/TritonSE/PAP-Inventory-Processing",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "CrapGPT",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Portfolio website",
    description: "Personal portfolio website showcasing my projects that you're currently on!",
    toolsUsed: "JavaScript, React, Next.js, Tailwind CSS",
    image: "/images/projects/6.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "IBM Accelerate: To-do App",
    description: "⚠️ Currently under development! ⚠️",
    image: "/images/projects/5.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Demiya Website",
    description: "My first React project! Home page for Demiya restaurant, serving 300+ users daily across 3 locations",
    toolsUsed: "JavaScript, React, Next.js, CSS, Git, GitHub",
    image: "/images/demiya.png",
    gitUrl: "https://github.com/yotzkim/demiya-website",
    previewUrl: "https://www.demiya.restaurant/",
  },
];

const ProjectsSection = () => {
  return (
    <section className="my-8 md:my-12" id="projects">
      <h2 className="text-center text-4xl font-bold text-emerald-400 mt-4 mb-8 md:mb-12">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500">My Projects</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            toolsUsed={project.toolsUsed}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;