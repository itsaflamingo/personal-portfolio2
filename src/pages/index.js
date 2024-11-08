import * as React from "react";
import Navbar from "../components/Navbar";
import "../styles/global.css";
import FirstPage from "../components/FirstPage";
import About from "../components/About";
import SocialsBar from "../components/SocialsBar";

export default function Home() {
  return (
    <div className="h-screen w-full relative overflow-y:scroll m-0 px-5">
      <Navbar />
      <FirstPage />
      <div className="w-full flex justify-center items-start h-screen">
        <About />
      </div>

      <section id="projects">
        <h2>Projects</h2>
        <p>Details about my projects...</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Get in touch with me...</p>
      </section>
      <SocialsBar />
    </div>
  );
}
