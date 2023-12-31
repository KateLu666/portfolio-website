import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Jobify Application",
    description:
      "MERN Stack Application helping people organize their job search",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/KateLu666/Jobify",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "E-commerce Application",
    description: "Angular and Spring Boot E-commerce Application",
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/KateLu666/E-Commerce-Angular-SpringBoot",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Event Management Application",
    description: "Sveltekit and Firebase Event Management Application",
    image: "/images/projects/3.png",
    gitUrl: "https://github.com/KateLu666/event-management",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "The Dojo Blog",
    description: "Vue Blog Application",
    image: "/images/projects/4.png",
    gitUrl: "https://github.com/KateLu666/dojo-blog-vue",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "To Do Application",
    description: "Sveltekit and Tailwind CSS To Do Application",
    image: "/images/projects/5.png",
    gitUrl:
      "https://github.com/KateLu666/Todo-Application-with-Sveltekit-and-Tailwind",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  return (
    <div id="projects" className="md:mt-20 md:pt-24">
      <h2 className="text-white text-4xl text-center font-bold mt-4 mb-10">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;
