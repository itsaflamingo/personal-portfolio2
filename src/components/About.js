import React from "react";
import me from "../images/me.jpeg";

export default function About() {
  return (
    <div className="flex">
      <div>
        <h3>Who am I?</h3>
        <p>
          A <span>full-stack developer</span> who took the long way around. I
          graduated in 2020 with a degree in International Development. During
          COVID I decided to start my journey as a web developer. I taught
          myself web development through The Odin Project, where I created over
          30 projects of various complexities.{" "}
        </p>
      </div>
      <img alt="me" src={`${me}`} className="w-1/5"></img>
    </div>
  );
}
