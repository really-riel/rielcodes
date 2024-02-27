import React from "react";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const SideMenu = ({ setIsSideMenuOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="grid grid-cols-[30%_70%]  left-0 right-0 z-50   fixed top-0 bottom-0 m-0 "
    >
      <div
        className="bg-black bg-opacity-50"
        onClick={() => setIsSideMenuOpen(false)}
      ></div>
      <div className="p-4 text-white bg-blue-950 text-[clamp(1rem,_1rem_+_1vw,_2rem)]">
        <div className="w-full ">
          <FaTimes
            className="ml-auto text-[clamp(1rem,_1.4rem_+_1vw,_2rem)] cursor-pointer"
            onClick={() => setIsSideMenuOpen(false)}
          />
        </div>
        <nav className="">
          <ul className="flex flex-col gap-4 mt-4 ">
            <a href="#" className="" onClick={() => setIsSideMenuOpen(false)}>
              <li>Home</li>
            </a>
            <a href="#aboutMe" onClick={() => setIsSideMenuOpen(false)}>
              <li>About Me</li>
            </a>
            <a href="#projects" onClick={() => setIsSideMenuOpen(false)}>
              <li>Projects</li>
            </a>
            <a href="#contactMe" onClick={() => setIsSideMenuOpen(false)}>
              <li>Contact</li>
            </a>
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default SideMenu;
