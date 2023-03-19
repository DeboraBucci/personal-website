import Course01 from "../assets/courses/course-01.webp";
import Course02 from "../assets/courses/course-02.webp";
import Course03 from "../assets/courses/course-03.webp";
import Course04 from "../assets/courses/course-04.webp";
import Course05 from "../assets/courses/course-05.webp";
import Course06 from "../assets/courses/course-06.webp";

import javascript from "../assets/certifications/javascript.webp";
import javascript2 from "../assets/certifications/javascript-coder.webp";
import responsiveWebDesign from "../assets/certifications/responsive-web-design.webp";
import alkemy from "../assets/certifications/alkemy.webp";
import react from "../assets/certifications/react-coder.webp";
import webDesign from "../assets/certifications/web-design-coder.webp";

import React from "../assets/technologies-icons/react.svg";
import JavaScript from "../assets/technologies-icons/javascript.svg";
import HTML5 from "../assets/technologies-icons/html5.svg";
import CSS3 from "../assets/technologies-icons/css3.svg";
import GIT from "../assets/technologies-icons/git.svg";
import GitHub from "../assets/technologies-icons/github.png";
import Bootstrap from "../assets/technologies-icons/bootstrap.svg";
import NodeJS from "../assets/technologies-icons/nodejs.svg";
import NPM from "../assets/technologies-icons/npm.svg";
import TypeScript from "../assets/technologies-icons/typescript.svg";
import Postman from "../assets/technologies-icons/postman.png";
import Jest from "../assets/technologies-icons/jest.svg";
import Express from "../assets/technologies-icons/express.png";
import VSCode from "../assets/technologies-icons/vscode.svg";
import StyledComponents from "../assets/technologies-icons/styledcomponents.svg";
import Lighthouse from "../assets/technologies-icons/lighthouse.png";
import StackOverflow from "../assets/technologies-icons/stackoverflow.svg";
import ReactBootstrap from "../assets/technologies-icons/reactbootstrap.png";
import Formik from "../assets/technologies-icons/formik.svg";
import ReactRouterDom from "../assets/technologies-icons/react-router-dom.svg";
import Mui from "../assets/technologies-icons/mui.svg";

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
    image: react,
    alt: "React JS",
    href: "https://www.coderhouse.com/certificados/637d8946d42cb5000e4fe274",
    text: [
      "This course taught React JS from scratch, while giving challenges that had to be delivered within a week of being offered.",

      "Since I already knew React from a course I made before I didn't learn much from it, but it helped me review a lot of its content to better retain all the knowledge I had.",

      "I was also able to understand more clearly how react-router-dom works, and to implement it in the project I was building, so that's a win in my book!",
    ],
    date: "February 1st, 2023",
    complexity: 3,
  },

  {
    image: javascript2,
    alt: "JavaScript",
    href: "https://www.coderhouse.com/certificados/637d8946d42cb5000e4fe274",
    text: [
      "I found this course to be a much-needed refresher on JavaScript, helping me remember many powerful functionalities of the language.",

      "Throughout it, I encountered many situations where I had to search extensively for something I had learned in the past in order to apply it again.",

      "Although the course didn't introduce me to many new concepts, I was able to get a lot of practice thanks to the challenging exercises.",

      "Overall, I'm grateful for the opportunity to reinforce my knowledge and skills in JavaScript, and I feel more confident in my abilities as a result of taking this course.",
    ],
    date: "December 5th, 2022",
    complexity: 2,
  },

  {
    image: webDesign,
    alt: "Web Design",
    href: "https://www.coderhouse.com/certificados/637d8946d42cb5000e4fe274",
    text: [
      "This course was very intersting, specially at the beginning.",

      "Since it was the first one I took from CoderHouse, I had to get to know their mode of instruction, which were two meetings of two hours each every week. And they would also offer a new challenge for me to complete every other week.",

      "Also, I learnt a lot about planning projects ahead of time, by making prototypes using rough sketches, mockups, etc., and then transitioning it to code.",

      "I was able to learn the basics of Figma, and use it for building the prototype for my project.",
    ],
    date: "October 5th, 2022",
    complexity: 2,
  },

  {
    image: alkemy,
    alt: "certificate of Skill Up of React, Work Methodologies and Soft Skills from Alkemy",
    href: "",
    text: [
      "Alkemy offered a rigorous bootcamp consisting of a series of ordered challenges that needed to be overcome in order to progress to the next level.",

      "The first challenge was to create a medium-sized project to be accepted into the bootcamp, which was no easy feat due to the month-long time limit. Planning the project while keeping the deadline in mind was a daunting task.",

      "Once accepted, I had seven weeks to complete four courses (Soft Skills, Agile Methodologies, Skill Up React I, Skill Up React II), a project, and three screenings.",

      "The Soft Skills course taught me valuable skills for effective communication and collaboration in both personal and professional environments. I learned how to listen attentively and ask questions when I needed clarification. Although it was a short course, it was essential for developing my interpersonal skills.",

      "In Agile Methodologies, I learned how SCRUM functions, including Sprints, team composition (product owner, scrum master, and development team), the backlog, user stories, estimations, and the popular Kanban system used in websites like Trello. This course helped me understand the dynamics of a work environment and its benefits. Additionally, I gained a basic level of Git, which served as a refresher for me.",

      "The React Skill Ups course covered new features of React and allowed me to review fundamental concepts learned in previous courses, such as hooks, debugging, testing, and redux.",

      "Near the end of the seven weeks, I had to complete three challenging screenings for soft skills, agile methodologies, and React, which consisted in solving many exercises in a span of a few hours without any breaks.",
    ],
    complexity: 4,
  },

  {
    image: javascript,
    alt: "JavaScript certificate from freeCodeCamp",
    href: "https://www.freecodecamp.org/certification/fcc0319e92c-1fd6-4354-9f09-dbbf04aba37b/javascript-algorithms-and-data-structures",
    text: [
      "This course was somewhat challenging for me at the time, due to the complexity of the projects they offered, which took plenty of thinking and researching to be done, and the fact that I wasn't as exposed to JavaScript as I am today.",

      "I spent most of it researching and delving deep into complex problem-solving techniques for resolving the puzzles and problems that were handed to me.",

      "Overall, I enjoyed it a lot. It was very entertaining to think and resolve the exercises they gave. And I was able to learn a plathera of JavaScript's functionalities, such as regex, object oriented programming, debugging, ES6+, just to name a few.",
    ],
    complexity: 3,
    date: "May 20th, 2022",
  },

  {
    image: responsiveWebDesign,
    alt: "Responsive Web Design certificate from freeCodeCamp",
    href: "https://www.freecodecamp.org/certification/fcc0319e92c-1fd6-4354-9f09-dbbf04aba37b/responsive-web-design",
    text: [
      "At the start of this course, I was still very inexperienced, knowing little HTML, CSS and a little bit of JavaScript, I wasn't able to do much yet.",

      "Due to my little knowledge in code, being able to complete five different static websites felt as a big leap from where I was before.",

      "When I started with the projects, I was met with many problems, errors, lack of knowledge, and many other obstacles, which at the end of the day, helped me grow into a better developer.",

      "In the course, things like flexbox, grid, best practices, and much more were taught in a very interactive way, with an exercise for every other lecture. That's why I love freeCodeCamp so much, they make you part of the learning process by making you code alongside the lessons!",
    ],
    complexity: 2,
    date: "September 8th, 2022",
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
    title: "Mythical Books",
    link: "mythical-books",
    num: "2",
    info: [
      { title: "Type", text: "Book Subscription" },
      { title: "Framework", text: "React" },
      {
        title: "Technologies",
        text: "SASS, react-router-dom, etc.",
      },
      { title: "Commits", text: "140+" },
      { title: "Designer", text: "Débora Bucci" },
    ],
  },

  {
    title: "Go Scrum",
    link: "go-scrum",
    num: "3",
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
