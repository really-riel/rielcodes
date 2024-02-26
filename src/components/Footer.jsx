import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

const Footer = () => {
  const year = new Date().getFullYear().toString();
  return (
    <footer className="w-full p-4 text-white bg-blue-950">
      <div className="flex items-center justify-between max-w-[1000px] mx-auto gap-3">
        <p>Copyright &copy; {year}. All rights reserved </p>

        <div className="flex items-center gap-3 *:text-[clamp(1rem,_1rem_+_1vw,_1.5rem)] ">
          <a href="https://twitter.com/really__riel" target="_blank">
            <IoLogoTwitter />
          </a>
          <a
            href="http://www.linkedin.com/in/adeolu-adeyinka-54b208201 "
            target="_blank"
          >
            <IoLogoLinkedin />{" "}
          </a>
          <a href="https://github.com/really-riel" target="_blank">
            {" "}
            <IoLogoGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
