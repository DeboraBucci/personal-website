import Course01 from "./assets/courses/course-01.webp";
import Course02 from "./assets/courses/course-02.webp";
import Course03 from "./assets/courses/course-03.webp";
import Course04 from "./assets/courses/course-04.webp";
import Course05 from "./assets/courses/course-05.webp";
import Course06 from "./assets/courses/course-06.webp";

import javascript from "./assets/certifications/javascript.webp";
import responsiveWebDesign from "./assets/certifications/responsive-web-design.webp";
import alkemy from "./assets/certifications/alkemy.webp";

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
import Jest from "./assets/technologies-icons/jest.svg";
import Express from "./assets/technologies-icons/express.png";
import VSCode from "./assets/technologies-icons/vscode.svg";
import StyledComponents from "./assets/technologies-icons/styledcomponents.svg";
import Lighthouse from "./assets/technologies-icons/lighthouse.png";
import StackOverflow from "./assets/technologies-icons/stackoverflow.svg";
import ReactBootstrap from "./assets/technologies-icons/reactbootstrap.png";
import Formik from "./assets/technologies-icons/formik.svg";
import ReactRouterDom from "./assets/technologies-icons/react-router-dom.svg";
import Mui from "./assets/technologies-icons/mui.svg";

const technologies = [
  {
    icon: React,
    text: "React",
  },
  {
    icon: ReactRouterDom,
    text: "React Router DOM",
  },
  {
    icon: Jest,
    text: "Jest",
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
    icon: Mui,
    text: "Material UI",
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
    icon: Formik,
    text: "Formik",
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
    icon: StackOverflow,
    text: "Stack Overflow",
  },
];

const programmingLanguages = [
  {
    icon: JavaScript,
    text: "JavaScript",
  },
  {
    icon: TypeScript,
    text: "TypeScript",
  },
];

const linksList = [
  { text: "Home", icon: "fas fa-home", href: "#home", key: "l1" },
  { text: "About", icon: "fas fa-address-card", href: "#about", key: "l2" },
  {
    text: "Certifications",
    icon: "fa-solid fa-scroll",
    href: "#certifications",
    key: "l6",
  },
  {
    text: "Courses",
    icon: "fas fa-award",
    href: "#courses",
    key: "l3",
  },
  {
    text: "Projects",
    icon: "fas fa-briefcase",
    href: "#projects",
    key: "l4",
  },

  { text: "Contact", icon: "fas fa-paper-plane", href: "#contact", key: "l5" },
];

const certifications = [
  {
    image: alkemy,
    alt: "certificate of Skill Up of React, Work Methodologies and Soft Skills from Alkemy",
    href: "",
    text: [
      "Alkemy offered a bootcamp, which consisted in many ordered challenges that needed to be overcome in order to pass to the next one.",
      "The first step was to make a medium-sized project to get accepted, and that alone was a hard task because it had a month-long time limit, and having that deadline in mind while planning the project was very challenging.",
      "When I got accepted, I had 7 weeks to complete four courses, which were the following: Soft Skills, Agile Methodologies, Skill Up React I, Skill Up React II, a project, and three screenings.",
      "In the Soft Skills' course I learnt a lot of new things about interacting with people around me, both in personal and professional environments. Learnt to hear properly, and have the courage to ask when not understanding something completely. This course was very short, yet considerably important.",
      "In Agile Methodologies I was able to learn how SCRUM functions, with its Sprints, its team composition (product owner, scrum master and development team), the backlog, user stories, estimations and the well known Kanban system (used in websites like Trello). I was able to fully understand the dynamic of a work enviroment and its benefits. Also, it had a basic level of Git, which worked as a refreshment for me.",
      "In the React Skill Ups, I learnt many new features of React, and was able to review some other fundamental ones learnt in previous courses. Some of which were hooks, debugging, testing, redux, etc.",
      "And almost at the end of the 7 weeks, I had to complete three screenings (for soft skills, agile methodologies and React), which were very challenging, having to resolve many exercises in a span of some hours without any breaks.",
      "Overall, being in Alkemy was a very unique and nurturing experience, which helped transform my character.",
    ],
    complexity: 4,
  },

  {
    image: javascript,
    alt: "JavaScript certificate from freeCodeCamp",
    href: "https://www.freecodecamp.org/certification/fcc0319e92c-1fd6-4354-9f09-dbbf04aba37b/javascript-algorithms-and-data-structures",
    text: [
      "This certification was a little bit of a challenge for me at the time because the five projects they gave required a lot of thinking and researching.",
      "It was more of thinking intricate ways of resolving puzzles and problems, instead of being like the previous one (responsive web design), which consisted in my imagination and designing of the page.",
      "I liked it a lot, because it was a whole different experience and a new challenge for my career. I most definitely learnt a lot of new ways of coding in JavaScript, while also reviewing lots of basic stuff that I already knew, but having it as a refreshment of knowledge was appreciated.",
      "This course taught things like regex, object oriented programming, debugging, ES6, and more!",
    ],
    complexity: 3,
  },

  {
    image: responsiveWebDesign,
    alt: "Responsive Web Design certificate from freeCodeCamp",
    href: "https://www.freecodecamp.org/certification/fcc0319e92c-1fd6-4354-9f09-dbbf04aba37b/responsive-web-design",
    text: [
      "When I started this certification's course, back in 2021, I was still very inexperienced, and only knew some HTML, CSS and a little bit of JS. ",
      "Although the course only consisted in HTML and CSS, it wasn't that simple. It had an intermediate level, so for the beginner that I was, it felt like a big challenge to be able to complete the five projects they handed me.",
      "They taught things like flexbox, grid, best practices, and much more. And in a very interactive way, with an exercise for each new thing they taught. That's why I love freeCodeCamp so much, they make you part of the learning process by making you code alongside the lessons!",
      "The course had a big influence in my career because it molded me and my way of thinking. It was a very fun and nurturing experience, and it felt great when I finally received my first certification ever. It was a big leap for my career, and it left me with a solid basis, some good projects to practice and improve with, and feeling very enthusiastic to learn more about the wonderful world of a Frontend developer!",
    ],
    complexity: 2,
  },
];

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
  certifications,
  coursesImages,
  traits,
  technologies,
  contactLinks,
  programmingLanguages,
};
