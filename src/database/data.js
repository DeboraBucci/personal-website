import ResponsiveWebsites from "../assets/courses/responsive-websites.webp";
import JavaScriptC from "../assets/courses/javascript.webp";
import CleanCode from "../assets/courses/clean-code.webp";
import WebDeveloper from "../assets/courses/web-developer.webp";
import Sass from "../assets/courses/sass.webp";
import Git from "../assets/courses/git.webp";
import React1 from "../assets/courses/react-1.webp";
import Typescript from "../assets/courses/typescript.webp";

import React from "../assets/technologies-icons/react.svg";
import JavaScript from "../assets/technologies-icons/javascript.svg";
import HTML5 from "../assets/technologies-icons/html5.svg";
import CSS3 from "../assets/technologies-icons/css3.svg";
import GIT from "../assets/technologies-icons/git.svg";
import GitHub from "../assets/technologies-icons/github.svg";
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
import Docker from "../assets/technologies-icons/docker.svg";
import Figma from "../assets/technologies-icons/figma.svg";
import Redux from "../assets/technologies-icons/redux.svg";

const others = [
  {
    icon: ReactRouterDom,
    text: "React Router DOM",
  },
  {
    icon: Figma,
    text: "Figma",
  },
  {
    icon: Docker,
    text: "Docker",
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

const technologies = [
  {
    icon: React,
    text: "React",
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
    icon: NodeJS,
    text: "NodeJS",
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
    icon: Redux,
    text: "Redux",
  },
  {
    icon: Jest,
    text: "Jest",
  },
];

const courses = [
  {
    image: Typescript,
    link: "https://www.udemy.com/certificate/UC-f4569938-6792-4270-83a7-8551e7f3827b/",
  },
  {
    image: React1,
    link: "https://www.udemy.com/certificate/UC-f056a60d-b532-46f8-aba3-f16974916340/",
  },
  {
    image: Git,
    link: "https://www.udemy.com/certificate/UC-2c06134d-7f93-493d-8994-9c1381874420/",
  },
  {
    image: Sass,
    link: "https://www.udemy.com/certificate/UC-95c59b67-a36c-411d-b016-0dfd8ac86c8b/",
  },
  {
    image: WebDeveloper,
    link: "https://www.udemy.com/certificate/UC-634c30de-ad42-4aa6-aecd-3ff380fbbaa8/",
  },
  {
    image: CleanCode,
    link: "https://www.udemy.com/certificate/UC-d8fbca89-769c-41bd-a170-825c859b495f/",
  },
  {
    image: JavaScriptC,
    link: "https://www.udemy.com/certificate/UC-89af5eb9-8c4f-4d4c-87a8-3d47d0ac9bc5/",
  },
  {
    image: ResponsiveWebsites,
    link: "https://www.udemy.com/certificate/UC-eb0d3e2b-f5f8-46ec-a71a-b5db101894d8/",
  },
];

const coursesPositions = Array.from(
  { length: courses.length },
  (_, i) => i + 1
);

export { courses, coursesPositions, technologies, others };
