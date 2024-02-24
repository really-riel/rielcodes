import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import SideMenu from "./SideMenu";

const Header = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  return (
    <>
      <header className="flex justify-between items-center fixed mx-auto   inset-x-[10px] top-0 bg-blue-950 bg-opacity-50 backdrop-filter backdrop-blur-lg backdrop-saturate-150 p-2 rounded-xl mt-2 z-50 max-w-[1000px]">
        <h1 className="text-xl italic font-extrabold text-white color">
          Riel Codes
        </h1>
        <IoMenu
          className="text-[1.8rem] cursor-pointer text-white md:hidden"
          onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
        />

        {/* Desktop nav */}
        <nav className="hidden md:flex">
          <ul className="flex ">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#aboutMe">
              <li>About Me</li>
            </a>
            <a href="#project">
              <li>Projects</li>
            </a>
            <a href="#contactMe">
              <li>Contact</li>
            </a>
          </ul>
        </nav>
      </header>

      {/* Side nav */}
      {isSideMenuOpen && <SideMenu setIsSideMenuOpen={setIsSideMenuOpen} />}
    </>
  );
};

export default Header;
