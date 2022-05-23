import Course01 from "./assets/courses/course-01.webp";
import Course02 from "./assets/courses/course-02.webp";
import Course03 from "./assets/courses/course-03.webp";
import Course04 from "./assets/courses/course-04.webp";
import Course05 from "./assets/courses/course-05.webp";
import Course06 from "./assets/courses/course-06.webp";

import javascript from "./assets/certifications/javascript.webp";
import responsiveWebDesign from "./assets/certifications/responsive-web-design.webp";

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

  {
    text: "Certifications",
    icon: "fa-solid fa-scroll",
    href: "#certifications",
    key: "l6",
  },
];

const certificationImages = [javascript, responsiveWebDesign];

const coursesImages = [
  {
    image: Course06,
    alt: "Sixth",
  },
  {
    image: Course05,
    alt: "Fifth",
  },
  {
    image: Course04,
    alt: "Fourth",
  },
  {
    image: Course03,
    alt: "Third",
  },
  {
    image: Course02,
    alt: "Second",
  },
  {
    image: Course01,
    alt: "First",
  },
];

const projects = [
  {
    title: "Lily's Cuisine",
    link: "lilys-cuisine",
    num: "1",
    info: [
      { title: "Type", text: "Menu ordering app" },
      { title: "Framework", text: "React" },
      { title: "Technologies", text: "Bootstrap, Axios, etc." },
      { title: "Commits", text: "400+" },
      { title: "Designer", text: "Débora Bucci" },
    ],
    extraInfo: (
      <div className="card__instructions">
        <p className="card__instructions--text">
          Email: <code>challenge@alkemy.org</code>
        </p>

        <p className="card__instructions--text">
          Password: <code>react</code>
        </p>
      </div>
    ),
  },
  {
    title: "Natours",
    link: "natours",
    num: "2",
    info: [
      { title: "Type", text: "Tour app" },
      { title: "Framework", text: "React" },
      { title: "Technologies", text: "SASS" },
      { title: "Commits", text: "130+" },
      { title: "Designer", text: "Jonas Schmedtmann" },
    ],
    extraInfo: "",
  },

  // {
  //   title: "Mythical Books",
  //   link: "https://github.com/DeboraBucci/mythical-books",
  //   num: "3",
  //   info: [
  //     { title: "Type", text: "Book Subscription" },
  //     { title: "Framework", text: "React" },
  //     { title: "Technologies", text: "React-Bootstrap" },
  //     { title: "Commits", text: "30+" },
  //     { title: "Designer", text: "Débora Bucci" },
  //   ],
  // },

  {
    title: "Go Scrum",
    link: "go-scrum",
    num: "4",
    info: [
      { title: "Type", text: "Task Manager" },
      { title: "Framework", text: "React" },
      {
        title: "Technologies",
        text: "React-router-dom, SASS, etc.",
      },
      { title: "Commits", text: "190+" },
      { title: "Designer", text: "Débora Bucci" },
    ],
    extraInfo: "",
  },
];

const traits = [
  {
    title: "Coding Enthusiast",
    content:
      "I've been coding for quite a while now, and it has grown to be one of my strongest passions. I love seeing previous projects and realizing how much I've learned so far.",
    icon: "fa-solid fa-code",
  },
  {
    title: "Drawing Artist",
    content:
      "Maybe not as diligent as I once was, but I still love drawing and painting from time to time, taking my time in every detail I may find along the way.",
    icon: "fa-solid fa-palette",
  },
  {
    title: "Bibliomane",
    content:
      "Reading a book while drinking some tea or coffee in a bright cozy place next to my husband and cats is one of my favorite things to do.",
    icon: "fa-solid fa-book",
  },
  {
    title: "Resilient",
    content:
      "I've come to realize that the pace in which you trace the journey doesn't matter, as long as you keep moving forward.",
    icon: "fa-solid fa-star",
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
  certificationImages,
  coursesImages,
  traits,
  technologies,
  contactLinks,
};
