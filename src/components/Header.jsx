import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import SideMenu from "./SideMenu";
import { AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center fixed mx-auto   inset-x-[10px] top-0 bg-blue-900 bg-opacity-50 backdrop-filter backdrop-blur-lg backdrop-saturate-150 p-3 rounded-xl mt-2 z-50 max-w-[1000px] text-white color">
        <h1 className="text-xl font-[900] text-white color ">
          Riel{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-blue-700 ">
            {" "}
            Codes
          </span>
        </h1>
        {isSideMenuOpen ? (
          <FaTimes
            className="text-[1.8rem] cursor-pointer text-white md:hidden"
            onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
          />
        ) : (
          <IoMenu
            className="text-[1.8rem] cursor-pointer text-white md:hidden"
            onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
          />
        )}

        {/* Desktop nav */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-3 ">
            <a href="#" className="active:text-blue-950 hover:text-blue-700">
              <li>Home</li>
            </a>
            <a
              href="#aboutMe"
              className="active:text-blue-950 hover:text-blue-700"
            >
              <li>About Me</li>
            </a>
            <a
              href="#projects"
              className="active:text-blue-950 hover:text-blue-700"
            >
              <li>Projects</li>
            </a>
            <a
              href="#contactMe"
              className="active:text-blue-950 hover:text-blue-700"
            >
              <li>Contact</li>
            </a>
          </ul>
        </nav>
      </header>

      {/* Side nav */}

      <AnimatePresence>
        {isSideMenuOpen && <SideMenu setIsSideMenuOpen={setIsSideMenuOpen} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
