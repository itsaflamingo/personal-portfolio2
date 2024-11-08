import * as React from "react";
import Navbar from "../components/Navbar";
import "../styles/global.css";
import FirstPage from "../components/FirstPage";
import About from "../components/About";
import SocialsBar from "../components/SocialsBar";

export default function Home() {
  return (
    <div className="h-screen w-full relative overflow-y:scroll">
      <Navbar />
      {/* <div className="flex"> */}
      <SocialsBar />
      <FirstPage />
      {/* </div> */}
      <div>
        <section id="about">
          <About />
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <p>Details about my projects...</p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Get in touch with me...</p>
        </section>
      </div>
    </div>
  );
}
