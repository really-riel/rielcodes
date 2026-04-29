import React from "react";
import Slider from "./Slider";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="p-4 w-[95%] bg-white shadow-2xl rounded-xl flex flex-col gap-3">
      <h2>{project.title}</h2>

      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-5">
        <Slider images={project.images} />

        <div className="flex flex-col gap-3 mt-4 grow">
          <ul className="flex flex-wrap items-center gap-2">
            {project.technologies.map((tech, ind) => (
              <li className="px-2 border-2 border-black" key={ind}>
                {tech}
              </li>
            ))}
          </ul>

          <p>{project.description}</p>

          <div className="flex gap-4 *:bg-blue-100 *:p-2 *:rounded-xl">
            <a
              className="flex items-center gap-2"
              href={project.codeLink}
              target="_blank"
            >
              Code <FaGithub />
            </a>

            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank">
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
