import React from "react";
import pf from "../assets/pf.jpg";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

const Banner = () => {
  return (
    <section className="min-h-svh py-20 w-full  relative  px-2  ">
      <div className="text-[clamp(1rem,_0.2rem_+_1vw,_2rem)]  flex flex-col justify-center lg:flex-row-reverse  mx-auto gap-6 ">
        <figure className="w-40 h-40 md:w-60 md:h-60 rounded-[50%] overflow-hidden mx-auto">
          <img
            src={pf}
            alt="Irregular frame"
            className="irregular-frame-image w-full h-full object-cover"
          />
        </figure>
        <div className="">
          <p className="font-semibold">Hey, I'm </p>
          <p className="font-extrabold text-[clamp(1rem,_1.5rem_+_1vw,_2rem)]">
            Adeyinka Adeolu.
          </p>
          <p className="font-bold text-[clamp(1rem,_1.1rem_+_1vw,_2rem)]">
            {" "}
            Frontend Developer{" "}
          </p>
          <p>
            find out more <span className="font-semibold">about me.</span>{" "}
          </p>
          <div className=" flex items-center  gap-3">
            <a href="https://twitter.com/really__riel">
              <IoLogoTwitter />
            </a>
            <a href="">
              <IoLogoLinkedin />{" "}
            </a>
            <a href="">
              {" "}
              <IoLogoGithub />
            </a>
          </div>
        </div>

        <a
          href="#aboutMe"
          className="absolute bottom-10 cursor-pointer left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-black rounded-full sal-animate"
        >
          <div className="absolute w-1 h-1.5 bg-black top-1/2 right-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full animate-bounce"></div>
        </a>
      </div>
    </section>
  );
};

export default Banner;
