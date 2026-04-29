import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAws,
  FaPython,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
  SiRedux,
  SiTailwindcss,
  SiSass,
  SiFastapi,
  SiMysql,
} from "react-icons/si";

const skillsMap = {
  HTML: { icon: <FaHtml5 />, color: "#E34F26" },
  CSS: { icon: <FaCss3Alt />, color: "#1572B6" },
  JavaScript: { icon: <FaJs />, color: "#F7DF1E" },
  React: { icon: <FaReact />, color: "#61DAFB" },
  "Next.js": { icon: <SiNextdotjs />, color: "#000000" },
  TypeScript: { icon: <SiTypescript />, color: "#3178C6" },
  Firebase: { icon: <SiFirebase />, color: "#FFCA28" },
  Redux: { icon: <SiRedux />, color: "#764ABC" },
  Tailwind: { icon: <SiTailwindcss />, color: "#06B6D4" },
  SCSS: { icon: <SiSass />, color: "#CC6699" },
  Python: { icon: <FaPython />, color: "#3776AB" },
  FastAPI: { icon: <SiFastapi />, color: "#009688" },
  SQL: { icon: <SiMysql />, color: "#4479A1" },
  AWS: { icon: <FaAws />, color: "#FF9900" },
};

const TechIcons = ({ tech }) => {
  const hasTech = tech && tech.length > 0;

  return (
    <ul className="flex flex-wrap gap-3">
      {hasTech
        ? tech.map((t, index) => {
            const skill = skillsMap[t];
            if (!skill) return null;

            return (
              <li
                key={index}
                className="flex items-center gap-2 px-3 py-2 transition bg-white border border-gray-300 rounded-lg shadow-sm hover:scale-105"
              >
                <span className="text-xl" style={{ color: skill.color }}>
                  {skill.icon}
                </span>
                <span className="text-sm font-medium">{t}</span>
              </li>
            );
          })
        : Object.entries(skillsMap).map(([name, skill], index) => (
            <li
              key={index}
              className="flex items-center gap-2 px-3 py-2 transition bg-white border border-gray-300 rounded-lg shadow-sm hover:scale-105"
            >
              <span className="text-xl" style={{ color: skill.color }}>
                {skill.icon}
              </span>
              <span className="text-sm font-medium">{name}</span>
            </li>
          ))}
    </ul>
  );
};

export default TechIcons;
