import React from "react";
import { NavLink } from "react-router-dom";
import linuxPng from "./linux.png";

const About = () => {
  return (
    <div>
      <h1>Hello There</h1>
      <NavLink to="/">Home</NavLink>
      <div>
        <img src={linuxPng} alt="dupa" />
      </div>
    </div>
  );
};

export default About;
