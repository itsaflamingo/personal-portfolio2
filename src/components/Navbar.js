// src/components/Navbar.js
import React from "react";
import About from "./About";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex items-center justify-end">
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact-me">Contact Me</a>
        </li>
        <button>Resume</button>
      </ul>
    </nav>
  );
}
