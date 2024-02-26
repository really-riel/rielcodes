import React from "react";
import pf from "../assets/pf.jpg";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

const Banner = () => {
  return (
    <section className="relative grid w-full px-2 py-20 overflow-hidden min-h-svh place-content-center ">
      <div className="text-[clamp(1rem,_0.2rem_+_1vw,_2rem)]  flex flex-col justify-center lg:flex-row-reverse  mx-auto gap-6">
        <figure className="w-48 h-48 md:w-60 md:h-60 rounded-[50%] overflow-hidden mx-auto">
          <img
            src={pf}
            alt="Irregular frame"
            className="object-cover w-full h-full irregular-frame-image"
          />
        </figure>
        <div className="grid gap-1 ">
          <p className="font-semibold">Hey, I'm </p>
          <p className="font-extrabold text-[clamp(1rem,_1.5rem_+_1vw,_2rem)]">
            Adeyinka Adeolu.
          </p>
          <p className="font-bold text-[clamp(1.5rem,_1.1rem_+_2vw,_3rem)]">
            {" "}
            Frontend Developer{" "}
          </p>
          <p>
            find out more <span className="font-semibold">about me.</span>{" "}
          </p>
          <div className="flex items-center gap-3 ">
            <a
              href="https://twitter.com/really__riel"
              className="w-10 h-10 rounded-[50%] bg-blue-100 grid place-content-center"
            >
              <IoLogoTwitter className="text-xl" />
            </a>
            <a
              href=""
              className="bg-blue-100 w-10  rounded-[50%]  h-10 grid  place-content-center"
            >
              <IoLogoLinkedin className="text-xl" />{" "}
            </a>
            <a
              href=""
              className="bg-blue-100 w-10  rounded-[50%]  h-10 grid  place-content-center"
            >
              {" "}
              <IoLogoGithub className="text-xl" />
            </a>
          </div>
        </div>

        <a
          href="#aboutMe"
          className="absolute w-6 h-10 -translate-x-1/2 border-2 border-black rounded-full cursor-pointer bottom-5 left-1/2 "
        >
          <div className="absolute w-1 h-1.5 bg-black top-1/2 right-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 rounded-full animate-bounce"></div>
        </a>
      </div>
    </section>
  );
};

export default Banner;
