import Course01 from "./assets/courses/course-01.webp";
import Course02 from "./assets/courses/course-02.webp";
import Course03 from "./assets/courses/course-03.webp";
import Course04 from "./assets/courses/course-04.webp";
import Course05 from "./assets/courses/course-05.webp";

import React from "./assets/technologies-icons/react.svg";
import JavaScript from "./assets/technologies-icons/javascript.svg";
import HTML5 from "./assets/technologies-icons/html5.svg";
import CSS3 from "./assets/technologies-icons/css3.svg";
import GIT from "./assets/technologies-icons/git.svg";
import GitHub from "./assets/technologies-icons/github.png";
import Bootstrap from "./assets/technologies-icons/bootstrap.svg";
import NodeJS from "./assets/technologies-icons/nodejs.svg";
import NPM from "./assets/technologies-icons/npm.svg";
import TypeScript from "./assets/technologies-icons/typescript.svg";
import Postman from "./assets/technologies-icons/postman.png";
import Python from "./assets/technologies-icons/python.svg";
import Jest from "./assets/technologies-icons/jest.svg";
import Express from "./assets/technologies-icons/express.png";
import VSCode from "./assets/technologies-icons/vscode.svg";
import StyledComponents from "./assets/technologies-icons/styledcomponents.svg";
import Lighthouse from "./assets/technologies-icons/lighthouse.png";
import StackOverflow from "./assets/technologies-icons/stackoverflow.svg";
import ReactBootstrap from "./assets/technologies-icons/reactbootstrap.png";

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

const contactLinks = [
  {
    href: "https://www.linkedin.com/in/d%C3%A9bora-bucci-13a07a212/",
    icon: "fab fa-linkedin",
    text: "LinkedIn",
  },
  {
    href: "https://github.com/DeboraBucci",
    icon: "fab fa-github-alt",
    text: "GitHub",
  },
  {
    href: "mailto:dbucci@protonmail.com",
    icon: "fas fa-at",
    text: "send me an e-mail",
  },
];

export {
  linksList,
  projects,
  coursesImages,
  traits,
  technologies,
  contactLinks,
};
