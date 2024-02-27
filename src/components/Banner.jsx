import React from "react";
import pf from "../assets/whatsapp pfp.jpg";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { MdArrowDownward } from "react-icons/md";

const Banner = () => {
  return (
    <section className="relative grid w-full px-2 py-20 overflow-hidden min-h-svh place-content-center ">
      <div className="text-[clamp(1rem,_0.2rem_+_1vw,_2rem)]  flex flex-col justify-center lg:flex-row-reverse  mx-auto gap-6">
        <figure className="w-52 h-52 md:w-72 md:h-72 rounded-[50%] overflow-hidden mx-auto">
          <img
            src={pf}
            alt="Irregular frame"
            className="object-cover object-top w-full h-full irregular-frame-image"
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
              href="http://www.linkedin.com/in/adeolu-adeyinka-54b208201"
              target="_blank"
              className="bg-blue-100 w-10  rounded-[50%]  h-10 grid  place-content-center"
            >
              <IoLogoLinkedin className="text-xl" />{" "}
            </a>
            <a
              href="https://github.com/really-riel"
              target="_blank"
              className="bg-blue-100 w-10  rounded-[50%]  h-10 grid  place-content-center"
            >
              {" "}
              <IoLogoGithub className="text-xl" />
            </a>
          </div>
        </div>

        <a
          href="#aboutMe"
          className="absolute bottom-0 grid w-12 h-12 text-3xl transform -translate-x-1/2 cursor-pointer place-content-center left-1/2 text-blue-950"
        >
          <MdArrowDownward className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Banner;

{
  /* <a
          href="#aboutMe"
          className="absolute grid w-6 h-10 -translate-x-1/2 border-2 border-black rounded-full cursor-pointer bottom-5 left-1/2 place-content-center animate-bounce "
        >
          <div className=" w-1 h-1.5 bg-black  rounded-full "></div>
        </a> */
}
