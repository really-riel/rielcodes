import React from "react";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const SideMenu = ({ setIsSideMenuOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.25 }}
      className="fixed z-20 inset-x-[10px] m-0 top-11 bg-blue-900 bg-opacity-50 backdrop-filter backdrop-blur-lg backdrop-saturate-150  max-w-[1000px] rounded-lg lg:hidden"
    >
      <div className="p-4 w-full text-white  text-[clamp(1rem,_1rem_+_1vw,_2rem)]">
        <div className="w-full "></div>
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
