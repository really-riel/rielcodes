import { useState } from "react";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-full  relative">
        <Header />
        <main className="w-full mx-auto max-w-[1000px] grid place-items-center">
          <Banner />
          <AboutMe />
          <Projects />
          <ContactMe />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
