import React, { Fragment } from "react";
import {} from "../../../Data";
import Header from "../../UI/Header";

const About = () => {
  return (
    <Fragment>
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
          <lh>SOME OF MY TRAITS</lh>
          <li>
            Coding Enthusiast — Ever since I started to code I couldn't stop!
          </li>
          <li>
            Drawing Artist — I love to draw and style things, and I'm always
            looking forward to apply that part of me in everything I do.
          </li>
          <li>
            Book Lover — I like spending some of my time nurturing my knowledge
            and vocabulary by reading books.
          </li>
          <li>
            Perfectionist — I'm someone that just loves to give her all in
            everything that she does, and refuses to leave anything uncovered.
            Of course, this doesn't mean I don't make mistakes, I do tons of
            them! But I love to correct them.
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default About;
