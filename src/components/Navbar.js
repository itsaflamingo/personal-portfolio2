// src/components/Navbar.js
import React from "react";
import About from "./About";

export default function NavBar() {
  return (
    <div className="h-12 sticky top-0">
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
    </div>
  );
}
