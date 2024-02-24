import React from "react";

const AboutMe = () => {
  return (
    <section
      className="grid min-h-svh place-items-center py-3 scroll-mt-10"
      id="aboutMe"
    >
      <div className="w-[95%] my-6 bg-slate-200 p-1 grid gap-2 rounded-md py-5 px-3">
        <p className="font-bold text-[clamp(0.5rem,_0.6rem_+_1vw,_1rem)]">
          ABOUT ME
        </p>
        <p className="font-extrabold text-[clamp(1rem,_1rem_+_1vw,_1.8rem)]">
          Adeyinka Adeolu
        </p>
        <article className="text-[clamp(0.8rem,_0.8rem_+_1vw,1.5rem)]">
          Hey, my name's Adeolu! I enjoy spending my days coding and building
          functional web applications.
          <br />
          I started coding in 2022 and I absolutely knew it was for me. i have
          spent several hours learning and building projects.
          <br />I am also a team player who thrives in a collaborative
          environment.
        </article>

        <h2 className="font-bold text-[clamp(0.8rem,_0.6rem_+_1vw,_1.2rem)] ">
          MY SKILLS
        </h2>
        <ul className="flex items-center flex-wrap *:border-2 *:border-black *:px-1 gap-2">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Firebase</li>
          <li>Redux</li>
          <li>Tailwind</li>
          <li>SCSS</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;