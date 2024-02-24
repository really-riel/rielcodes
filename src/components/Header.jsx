import React from "react";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <header className="flex justify-between items-center fixed mx-auto   inset-x-[10px] top-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg backdrop-saturate-150 p-2 rounded-xl mt-2 z-50 max-w-[1000px]">
      <h1 className="italic font-extrabold text-l text-white color">
        Riel Codes
      </h1>
      <IoMenu className="text-[1.3rem] cursor-pointer text-white md:hidden" />

      <nav className="hidden md:flex">
        <ul className="flex ">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>About Me</li>
          </a>
          <a href="#">
            <li>Projects</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
