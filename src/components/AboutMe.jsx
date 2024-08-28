import React from "react";
import resume from "../assets/Adeolu-Resume";

const AboutMe = () => {
  return (
    <section
      className="relative grid py-3 min-h-svh place-items-center scroll-mt-10"
      id="aboutMe"
    >
      <svg
        id="visual"
        viewBox="0 0 900 900"
        width="1400"
        height="1400"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        class="-z-10 absolute -top-20 -left-[920px]  lg:-left-[1000px]"
      >
        <g transform="translate(489.79892233902535 503.8402273150739)">
          <path
            d="M181.2 -217.8C219.5 -142.8 224.8 -71.4 202.3 -22.4C179.9 26.5 129.7 53 91.4 105.9C53 158.7 26.5 237.9 -14.8 252.6C-56.1 267.4 -112.2 217.9 -172.4 165C-232.5 112.2 -296.8 56.1 -295.2 1.5C-293.7 -53 -226.4 -106.1 -166.2 -181.1C-106.1 -256.1 -53 -353 9.2 -362.2C71.4 -371.4 142.8 -292.8 181.2 -217.8"
            fill="#172554"
          ></path>
        </g>
      </svg>

      <div className="w-[95%] my-6 bg-slate-200 p-1 grid gap-4 rounded-md py-10 px-3">
        <div className="">
          <p className="font-bold text-[clamp(0.8rem,_0.6rem_+_1vw,_1rem)]">
            ABOUT ME
          </p>
          <p className="font-extrabold text-[clamp(1rem,_1rem_+_1vw,_1.8rem)]">
            Adeyinka Adeolu
          </p>
        </div>
        <article className="text-[clamp(0.8rem,_0.8rem_+_1vw,1rem)]">
          Hey, my name's Adeolu! I enjoy spending my days coding and building
          functional web applications.
          <br />
          I started coding in 2022 and I absolutely knew it was for me. i have
          spent several hours learning and building projects.
          <br />I am also a team player who thrives in a collaborative
          environment.
        </article>

        <div className="">
          <h2 className="font-bold text-[clamp(1rem,_0.6rem_+_1vw,_1.2rem)] ">
            Education
          </h2>
          <p className="">
            Mechanical Engineering
            <br />
            <span className="opacity-50">
              Federal university of Agriculture, Abeokuta.
              <br />
              2023
            </span>
          </p>
        </div>

        <h2 className="font-bold text-[clamp(1rem,_0.6rem_+_1vw,_1.2rem)] ">
          MY SKILLS
        </h2>
        <ul className="flex items-center flex-wrap *:border-2 *:border-black *:px-1 gap-2">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Next Js</li>
          <li>Typescript</li>
          <li>Firebase</li>
          <li>Redux</li>
          <li>Tailwind</li>
          <li>SCSS</li>
        </ul>
        <hr className="bg-red-500" />
        <div>
          <a
            className="p-2 text-white border-2 border-black bg-blue-950 hover:bg-blue-700"
            href={resume}
            download
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
