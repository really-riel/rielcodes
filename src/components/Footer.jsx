import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

const Footer = () => {
  const year = new Date().getFullYear().toString();
  return (
    <div className=" bg-blue-950 w-full text-white p-4">
      <div className="flex items-center justify-between max-w-[1000px] mx-auto">
        <p>Copyright &copy; {year}. All rights reserved </p>

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
    </div>
  );
};

export default Footer;
