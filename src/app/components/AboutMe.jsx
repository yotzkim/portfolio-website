"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li><strong>Languages:</strong> Python, Java, JavaScript, TypeScript, C, C++</li>
        <li><strong>Frameworks and Libraries:</strong> React, Next.js, Node.js, Express, Pandas, NumPy, Tensorflow, Tkinter, JUnit</li>
        <li><strong>Tools:</strong> Linux, Git, GitHub, LaTeX, MATLAB</li>
        <li><strong>Databases:</strong> MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Roles",
    id: "roles",
    content: (
      <ul className="list-disc pl-2">
        <li>
         Software Development Intern @ <a href="https://cer.ucsd.edu/" className="underline">Center for Energy Research</a>
        </li>
        <li>
          Deep Learning Researcher @ <a href="https://knightlab.ucsd.edu/" className="underline">Knight Lab at UCSD</a>
        </li>
        <li>
          Software Developer @ <a href="https://tse.ucsd.edu/" className="underline">Triton Software Engineering</a>
        </li>
      </ul>
    ),
  }
  


];

const AboutSection = () => {
  const [tab, setTab] = useState("roles");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-sta py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image src="/images/meAndMom.png" alt="Me and my Mom" className="py-8" width={400} height={400} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4"><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500">About Me</span></h2>
          <p className="text-base lg:text-lg">
            My journey in software development first began when I made a simple to-do app for my mom. I inevitably ran into 
            many bugs and difficulties, but it sparked a passion and curiosity in me that pushed me to delve deeper into the world of development.

            <br></br>
            <br></br>

            Since then, I&apos;ve found meaningful ways to utilize technology to make positive impacts and serve my community. This includes fine-tuning neural networks
            to drive biomedical innovation at the Knight Lab, creating user-friendly, digital solutions for nonprofit organizations as a developer at
            Triton Software Engineering, and educating the next wave of technological innovators at Juni Learning. 
            <br></br>
            <br></br>
            Currently, I&apos;m developing at the Center for Energy Research, building a mobile app designed to educate users on clean energy. I hope to continue to collaborate with other passionate
            people to utilize tech for good and transform innovative ideas into reality!
            <br></br>
            <br></br>

            Outside of development, I love to cook, hike, and spend time with friends and family!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("roles")}
              active={tab === "roles"}
            >
              {" "}
              Current Roles{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>


          </div>
          <div className="mt-2">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


