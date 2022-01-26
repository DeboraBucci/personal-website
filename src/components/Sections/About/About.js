import React from "react";
import { Container } from "react-bootstrap";
import { traits } from "../../../Data";
import Header from "../../UI/Header";
import classes from "./About.module.css";

const About = () => {
  return (
    <div>
      <Header title="Get to know me more" subtitle="about me" />
      <div>
        <p>
          I'm a 21 years-old web-developer who lives in Argentina, in the city
          of Rosario.
        </p>
        <p>
          Ever since I started to design and code websites in March of 2021, I
          absolutely fell in love with it.
        </p>

        <ul>
          <h3>SOME OF MY TRAITS</h3>
          {traits.map(({ title, content }) => (
            <li key={Math.random()}>
              <span>{title}</span>
              <span> — {content}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
