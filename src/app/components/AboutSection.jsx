"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-3 gap-x-4 list-disc pl-4">
        <li>JavaScript</li>
        <li>SvelteKit</li>
        <li>React</li>
        <li>Angular</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Spring Boot</li>
        <li>PostgreSQL</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Firebase</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind CSS</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <span className="font-semibold">Pennsylvania State University</span>
          <br />
          B.S. Computer Science, Minor in Mathematics
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <span className="font-semibold">Waah Chao Inc.</span>
          <br />
          Software Engineer Intern
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTagChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white md:pt-24" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div>
          <Image
            src="/images/about-image.PNG"
            alt="Logo"
            width={500}
            height={300}
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-4 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-based lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, SvelteKit, Tailwind CSS, React, Angular,
            Spring Boot, Node.js, Express, PostgreSQL, MySQL, MongoDB, Firebase,
            HTML, CSS, and Git. I am a quick learner and I am always looking to
            expand my knowledge and skill set. I am a team player and I am
            excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTagChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTagChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTagChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-4">
            {TAB_DATA.find((d) => d.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
