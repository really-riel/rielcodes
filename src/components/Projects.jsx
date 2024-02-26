import React from "react";
import Slider from "./Slider";
import { FaGithub } from "react-icons/fa";
import { projectsData } from "../utils/data";

const Projects = () => {
  const content = projectsData.map((project, index) => (
    <div
      key={index}
      className="p-4 w-[95%] bg-white shadow-2xl rounded-xl flex flex-col gap-3"
    >
      <h2>{project.title}</h2>
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-5 ">
        <Slider images={project.images} />

        <div className="flex flex-col gap-3 mt-4 grow">
          <ul className="flex flex-wrap items-center gap-2">
            {project.technologies.map((tech, ind) => (
              <li className="px-2 border-2 border-black " key={ind}>
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
              Code <FaGithub />{" "}
            </a>
            <a href={project.liveDemo} target="_blank">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <section id="projects" className="relative scroll-mt-20 ">
      <svg
        id="visual"
        viewBox="0 0 1200 1200"
        width="1000"
        height="1200"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        class=" absolute -z-20  top-0 rotate-45  -right-[800px] lg:-right-[900px]"
      >
        <g transform="translate(927.4519875387796 -111.9512848530959)">
          <path
            d="M648.8 -752.4C919.6 -545.9 1272.3 -416.2 1356.5 -200.5C1440.7 15.3 1256.4 317.2 1074.3 608.8C892.3 900.4 712.4 1181.7 443.3 1327C174.2 1472.2 -184.1 1481.3 -364.5 1290.3C-544.9 1099.4 -547.4 708.5 -624.9 430.5C-702.4 152.5 -854.9 -12.6 -829.6 -144.5C-804.2 -276.4 -601 -375.2 -433.1 -599.8C-265.2 -824.3 -132.6 -1174.7 28.2 -1208.3C189 -1241.9 378 -958.8 648.8 -752.4"
            fill="#172554"
          ></path>
        </g>
      </svg>

      <div className="flex flex-col items-center w-full gap-5 ">
        <h2 className="text-[clamp(1rem,_1rem_+_1vw,_1.8rem)] ">Projects</h2>
        <div className="flex flex-col items-center w-full max-w-full gap-10">
          {content}
        </div>
      </div>
    </section>
  );
};

export default Projects;
