import * as React from "react";
import Navbar from "../components/Navbar";
import "../styles/global.css";
import FirstPage from "../components/FirstPage";
import About from "../components/About";

export default function Home() {
  return (
    <div className="bg">
      <Navbar />
      <FirstPage />
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
