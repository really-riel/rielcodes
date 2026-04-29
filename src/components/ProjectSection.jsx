import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectSection = ({ title, projects }) => {
  if (!projects.length) return null;

  return (
    <div className="flex flex-col items-center w-full gap-6 ">
      <h3 className="mt-6 text-xl font-semibold text-blue-900">{title}</h3>

      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectSection;
