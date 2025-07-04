"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  // {
  //   id: 1,
  //   title: "Psyches of Color",
  //   description: "A mobile app for providing mental health support and guiding users to get mental health care",
  //   toolsUsed: "TypeScript, React Native",
  //   image: "/images/cer.png",
  //   gitUrl: "https://github.com/Center-For-Energy-TEC-App/Tec-App",
  //   previewUrl: "https://github.com/Center-For-Energy-TEC-App/Tec-App",
  // },
  {
    id: 2,
    title: "Center for Energy Research App",
    description: "A mobile app designed to educate users on clean energy using interactive data models and visualizations",
    toolsUsed: "TypeScript, React Native, PostgreSQL, Node.js, Express.js, CSS",
    image: "/images/cer.png",
    gitUrl: "https://github.com/Center-For-Energy-TEC-App/Tec-App",
    previewUrl: "https://github.com/Center-For-Energy-TEC-App/Tec-App",
  },
  {
    id: 3,
    title: "Patriots and Paws",
    description: "A web app built for nonprofit Patriots and Paws to process and analyze veteran service requests (VSRs), includes an admin portal for staff (preview is only VSR)",
    toolsUsed: "TypeScript, React, Next.js, Node.js, MongoDB, Express.js, CSS, MaterialUI, Git",
    image: "/images/pap.png",
    gitUrl: "https://github.com/TritonSE/PAP-Inventory-Processing",
    previewUrl: "https://pap-frontend.vercel.app/vsr",
  },
  {
    id: 4,
    title: "CrapGPT",
    description: "An attention-based neural network trained on 7,037 samples to predict dietary factors from the human gut microbiome",
    image: "/images/crapgpt.png",
    toolsUsed: "Linux, Python, TensorFlow, Pandas, NumPy, Matplotlib, Seaborn",
    gitUrl: "https://github.com/kwcantrell/attention-all-microbes",
    previewUrl: "https://drive.google.com/file/d/1Je8GKGgWp9ZgSt9cR3vF2-ZzjPm55J0y/view?usp=sharing",
  },
  {
    id: 5,
    title: "Portfolio website",
    description: "Personal portfolio website showcasing my projects that you're currently on!",
    toolsUsed: "JavaScript, React, Next.js, Tailwind CSS",
    image: "/images/personal.png",
    gitUrl: "https://github.com/yotzkim/portfolio-website",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "IBM Accelerate: To-do App",
    description: "Iteratively created a React todo web application through weekly labs under IBM developers",
    toolsUsed: "JavaScript, React, CSS, Express, Material UI, React Testing Library, GitHub",
    image: "/images/ibm.png",
    gitUrl: "https://github.com/2024-IBM-Accelerate-SW-Track/to-do-list-week-7-yotzkim",
    previewUrl: "https://github.com/2024-IBM-Accelerate-SW-Track/to-do-list-week-7-yotzkim",
  },
  {
    id: 7,
    title: "Demiya Website",
    description: "My first React project! Home page for Demiya restaurant, serving 300+ users daily across 3 locations",
    toolsUsed: "JavaScript, React, Next.js, CSS, Git",
    image: "/images/demiya.png",
    gitUrl: "https://github.com/yotzkim/demiya-website",
    previewUrl: "https://www.demiya.restaurant/",
  },
  // {
  //   id: 8,
  //   title: "Habitizer App",
  //   description: "A routine and task management application, built as part of my Software Engineering class (CSE 110)",
  //   toolsUsed: "Java, Agile, JUnit, Android Studio, Git, GitHub",
  //   image: "/images/demiya.png",
  //   gitUrl: "https://github.com/yotzkim/demiya-website",
  //   previewUrl: "https://www.demiya.restaurant/",
  // },
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