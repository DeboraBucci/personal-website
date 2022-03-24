import Courses from "./components/Sections/Courses/Courses";
import Hero from "./components/Sections/Hero/Hero";
import About from "./components/Sections/About/About";
import Contact from "./components/contact/Contact";

import Portfolio from "./components/Sections/Portfolio/Portfolio";
import Course01 from "./imgs/certifications/course-01.webp";
import Course02 from "./imgs/certifications/course-02.webp";
import Course03 from "./imgs/certifications/course-03.webp";
import Course04 from "./imgs/certifications/course-04.webp";
import Course05 from "./imgs/certifications/course-05.webp";

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
import Express from "./imgs/technologies-icons/express.png";
import VSCode from "./imgs/technologies-icons/vscode.svg";
import StyledComponents from "./imgs/technologies-icons/styledcomponents.svg";
import Lighthouse from "./imgs/technologies-icons/lighthouse.png";
import StackOverflow from "./imgs/technologies-icons/stackoverflow.svg";
import ReactBootstrap from "./imgs/technologies-icons/reactbootstrap.png";

const technologies = [
  {
    icon: React,
    text: "React",
  },
  {
    icon: Jest,
    text: "Jest",
  },
  {
    icon: JavaScript,
    text: "JavaScript",
  },
  {
    icon: TypeScript,
    text: "TypeScript",
  },
  {
    icon: HTML5,
    text: "HTML5",
  },
  {
    icon: CSS3,
    text: "CSS3",
  },
  {
    icon: Bootstrap,
    text: "Bootstrap",
  },
  {
    icon: ReactBootstrap,
    text: "React Bootstrap",
  },
  {
    icon: StyledComponents,
    text: "Styled Components",
  },
  {
    icon: GIT,
    text: "GIT",
  },
  {
    icon: GitHub,
    text: "GitHub",
  },
  {
    icon: NodeJS,
    text: "NodeJS",
  },
  {
    icon: Express,
    text: "Express",
  },
  {
    icon: NPM,
    text: "NPM",
  },
  {
    icon: Postman,
    text: "Postman",
  },
  {
    icon: VSCode,
    text: "VS Code",
  },
  {
    icon: Lighthouse,
    text: "Lighthouse",
  },
  {
    icon: Python,
    text: "Python",
  },
  {
    icon: StackOverflow,
    text: "Stack Overflow",
  },
];

const linksList = [
  { text: "Home", icon: "fas fa-home", href: "#home", key: "l1" },
  { text: "About", icon: "fas fa-address-card", href: "#about", key: "l2" },
  {
    text: "Courses",
    icon: "fas fa-award",
    href: "#courses",
    key: "l3",
  },
  {
    text: "Portfolio",
    icon: "fas fa-briefcase",
    href: "#portfolio",
    key: "l4",
  },

  { text: "Contact", icon: "fas fa-paper-plane", href: "#contact", key: "l5" },
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
    title: "Lily's Cuisine",
    link: "https://alkemy-challenge-react.herokuapp.com/login",
    num: "1",
    info: [
      { title: "Introduction", text: "Menu ordering app" },
      { title: "Framework", text: "React" },
      { title: "Technologies", text: "Bootstrap, Axios, etc." },
      { title: "Commits", text: "400+" },
      { title: "Designer", text: "Débora Bucci" },
    ],
  },
  {
    title: "Natours",

    link: "https://github.com/DeboraBucci/natours",
    num: "2",
    info: [
      { title: "Introduction", text: "Tour app" },
      { title: "Framework", text: "React" },
      { title: "Technologies", text: "SASS" },
      { title: "Commits", text: "130+" },
      { title: "Designer", text: "Jonas Schmedtmann" },
    ],
  },

  {
    title: "Mythical Books",
    link: "#",
    num: "3",
    info: [
      { title: "Introduction", text: "Book Subscription" },
      { title: "Framework", text: "React" },
      { title: "Technologies", text: "..." },
      { title: "Commits", text: "..." },
      { title: "Designer", text: "Débora Bucci" },
    ],
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
    id: "courses",
  },

  {
    content: <Portfolio />,
    id: "portfolio",
  },

  {
    content: <Contact />,
    id: "contact",
  },
];

const traits = [
  {
    title: "Coding Enthusiast",
    content:
      "The day I created my first website I realized it was one of my passions.",
  },
  {
    title: "Drawing Artist",
    content:
      "I love drawing and styling, and I'm always looking forward to apply that part of me in everything I do.",
  },
  {
    title: "Book Lover",
    content:
      "When I'm not coding, I like spending my time nurturing my knowledge and vocabulary by reading books.",
  },
  {
    title: "Perfectionist",
    content:
      "I'm someone that just loves to give it all in everything that she does, and refuses to leave anything uncovered.",
  },
];

export { linksList, projects, sections, coursesImages, traits, technologies };
