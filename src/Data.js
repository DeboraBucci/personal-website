import pigGame from "./imgs/projects/pig-game-project.png";
import googleHomepage from "./imgs/projects/google-homepage-project.png";
import tributePage from "./imgs/projects/tribute-page-project.png";
import surveyForm from "./imgs/projects/survey-form-project.png";
import technicalDocumentation from "./imgs/projects/technical-documentation-project.png";
import productLanding from "./imgs/projects/product-landing-project.png";
import Courses from "./components/Sections/Courses/Courses";
import Hero from "./components/Sections/Hero/Hero";
import About from "./components/Sections/About/About";

import Portfolio from "./components/Sections/Portfolio/Portfolio";
import Course01 from "./imgs/certifications/course-01.jpg";
import Course02 from "./imgs/certifications/course-02.jpg";
import Course03 from "./imgs/certifications/course-03.jpg";
import Course04 from "./imgs/certifications/course-04.jpg";
import Course05 from "./imgs/certifications/course-05.png";

import React from "./imgs/technologies-icons/react.svg";
import JavaScript from "./imgs/technologies-icons/javascript.svg";
import HTML5 from "./imgs/technologies-icons/html5.svg";
import CSS3 from "./imgs/technologies-icons/css3.svg";
import GIT from "./imgs/technologies-icons/git.svg";
import GitHub from "./imgs/technologies-icons/github.png";
import Bootstrap from "./imgs/technologies-icons/bootstrap.svg";
import NodeJS from "./imgs/technologies-icons/nodejs.svg";
import NPM from "./imgs/technologies-icons/npm.svg";
import TypeScript from "./imgs/technologies-icons/typescript.svg";
import Postman from "./imgs/technologies-icons/postman.png";
import Python from "./imgs/technologies-icons/python.svg";
import Jest from "./imgs/technologies-icons/jest.svg";
import MongoDB from "./imgs/technologies-icons/mongodb.svg";
import Express from "./imgs/technologies-icons/express.png";
import Redux from "./imgs/technologies-icons/redux.svg";

const technologies = [
  Technology01,
  Technology02,
  Technology03,
  Technology04,
  Technology05,
  Technology06,
  Technology07,
];

const linksList = [
  { text: "Home", icon: "home", href: "#home", key: "l1" },
  { text: "About", icon: "address-card", href: "#about", key: "l2" },
  {
    text: "Certifications",
    icon: "award",
    href: "#certifications",
    key: "l3",
  },
  { text: "Portfolio", icon: "briefcase", href: "#portfolio", key: "l4" },

  { text: "Contact", icon: "paper-plane", href: "#contact", key: "l5" },
];

const coursesImages = [
  {
    image: Course01,
    alt: "First",
    interval: 1000,
  },
  {
    image: Course02,
    alt: "Second",
  },
  {
    image: Course03,
    alt: "Third",
  },
  {
    image: Course04,
    alt: "Fourth",
  },
  {
    image: Course05,
    alt: "Fifth",
  },
];

const projects = [
  {
    title: "Tribute Page",
    link: "tribute-page",
    image: tributePage,
    key: "project--01",
  },
  {
    title: "Product Landing Page",
    link: "product-landing-page",
    image: productLanding,
    key: "project--02",
  },
  {
    title: "Pig Game",
    link: "pig-game",
    image: pigGame,
    key: "project--03",
  },
  {
    title: "Google's Homepage",
    link: "google-homepage",
    image: googleHomepage,
    key: "project--04",
  },
  {
    title: "Technical Documentation Page",
    link: "technical-documentation-page",
    image: technicalDocumentation,
    key: "project--05",
  },
  {
    title: "Survey Form",
    link: "survey-form",
    image: surveyForm,
    key: "project--06",
  },
];

const sections = [
  {
    content: <Hero />,
    id: "home",
  },
  {
    content: <About />,
    id: "about",
  },
  {
    content: <Courses />,
    id: "certifications",
  },

  {
    content: <Portfolio />,
    id: "portfolio",
  },
];

const traits = [
  {
    title: "Coding Enthusiast",
    content: "Ever since I started to code I couldn't stop!",
  },
  {
    title: "Drawing Artist",
    content:
      "I love drawing and styling, and I'm always looking forward to apply that part of me in everything I do.",
  },
  {
    title: "Book Lover",
    content:
      "I like spending some of my time nurturing my knowledge and vocabulary by reading books.",
  },
  {
    title: "Perfectionist",
    content:
      "I'm someone that just loves to give her all in everything that she does, and refuses to leave anything uncovered. Of course, this doesn't mean I don't make mistakes, I do tons of them! But I love to correct them.",
  },
];

export { linksList, projects, sections, coursesImages, traits, technologies };
