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
        <li>
          <strong>Languages:</strong> Python, Java, JavaScript, TypeScript, C,
          C++, SQL, HTML/CSS, MATLAB
        </li>
        <li>
          <strong>Frameworks and Libraries:</strong> React, Next.js, Node.js,
          Express, Pandas, NumPy, Tensorflow
        </li>
        <li>
          <strong>Tools:</strong> Linux, Git, GitHub, GraphQL, Docker, Visual
          Studio Code, LaTeX
        </li>
        <li>
          <strong>Databases:</strong> MongoDB, PostgreSQL
        </li>
      </ul>
    ),
  },
  {
    title: "Roles",
    id: "roles",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Software Engineering Intern @{" "}
          <a className="underline">
            Capital One
          </a>
        </li>
      </ul>
    ),
  },
  {
    title: "Past Roles",
    id: "past-roles",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Software Engineering Intern @{" "}
          <a href="https://casgc.ucsd.edu/" className="underline">
            NASA - California Space Grant Consortium
          </a>
        </li>
        <li>
          Software Development Intern @{" "}
          <a href="https://cer.ucsd.edu/" className="underline">
            Center for Energy Research
          </a>
        </li>
        <li>
          Software Fellow @{" "}
          <a
            href="https://www.ibm.com/blogs/jobs/career-ready-skills-with-ibm-accelerate-summer-program/"
            className="underline"
          >
            IBM Accelerate
          </a>
          <li>
            Machine Learning Researcher @{" "}
            <a href="https://knightlab.ucsd.edu/" className="underline">
              Knight Lab
            </a>
          </li>
          <li>
            Software Developer @{" "}
            <a href="https://tse.ucsd.edu/" className="underline">
              Triton Software Engineering
            </a>
          </li>
          {/* <li>
            Mathematics Tutor @{" "}
            <a
              href="https://math.ucsd.edu/students/undergraduate/tutoring"
              className="underline"
            >
              UC San Diego
            </a>
          </li> */}
        </li>
        <li>
          Computer Science Instructor @{" "}
          <a href="https://www.junilearning.com/" className="underline">
            Juni Learning
          </a>
        </li>
        <li>
          President @{" "}
          <a href="https://apo.org/" className="underline">
            Alpha Phi Omega UCSD
          </a>
        </li>
      </ul>
    ),
  },
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
        <Image
          src="/images/meAndMom.png"
          alt="Me and my Mom"
          className="py-8"
          width={400}
          height={400}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500">
              About Me
            </span>
          </h2>
          <p className="text-base lg:text-lg">
            My journey in software development first began when I made a simple
            to-do app for my mom. I inevitably ran into many bugs and
            difficulties, but it sparked a passion and curiosity in me that
            pushed me to delve deeper into the world of development.
            <br></br>
            <br></br>
            Since then, I&apos;ve found meaningful ways to utilize technology to
            make positive impacts and serve my community.
            <br></br>
            <br></br>
            Last summer, I completed the IBM Accelerate program and worked at
            the Center for Energy Research, developing a mobile app designed to
            educate users on clean energy. In the spring, I helped build an app
            as part of the Quesst mission at NASA's California Space Grant
            Consortium. I'm currently interning at Capital One and I hope to
            continue to collaborate with other passionate people to utilize tech
            for good and transform innovative ideas into reality!
            <br></br>
            <br></br>
            Outside of development, I love to cook, hike, and spend time with
            friends and family!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("past-roles")}
              active={tab === "past-roles"}
            >
              {" "}
              Past Roles{" "}
            </TabButton>
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
