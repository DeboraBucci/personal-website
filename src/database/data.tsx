import ResponsiveWebsites from "../assets/courses/responsive-websites.webp";
import JavaScriptC from "../assets/courses/javascript.webp";
import CleanCode from "../assets/courses/clean-code.webp";
import WebDeveloper from "../assets/courses/web-developer.webp";
import Sass from "../assets/courses/sass.webp";
import Git from "../assets/courses/git.webp";
import React1 from "../assets/courses/react-1.webp";
import Typescript from "../assets/courses/typescript.webp";
import Android from "../assets/courses/android-udemy.webp";
import AndroidIntroduction from "../assets/courses/introduccion-android-educacionit.webp";
import ObjectParadigm from "../assets/courses/paradigma-objetos-educacionit.webp";
import JavaNotProgrammers from "../assets/courses/java-educacionit.webp";
import DatabasesAndSQL from "../assets/courses/sql-educacionit.webp";

import Kotlin from "../assets/technologies-icons/kotlin.svg";
import React from "../assets/technologies-icons/react.svg";
import JavaScript from "../assets/technologies-icons/javascript.svg";
import HTML5 from "../assets/technologies-icons/html5.svg";
import CSS3 from "../assets/technologies-icons/css3.svg";
import GIT from "../assets/technologies-icons/git.svg";
import NodeJS from "../assets/technologies-icons/nodejs.svg";
import TypeScript from "../assets/technologies-icons/typescript.svg";
import Postman from "../assets/technologies-icons/postman.png";
import Jest from "../assets/technologies-icons/jest.svg";
import Express from "../assets/technologies-icons/express.png";
import ReactRouterDom from "../assets/technologies-icons/react-router-dom.svg";
import Docker from "../assets/technologies-icons/docker.svg";
import Figma from "../assets/technologies-icons/figma.svg";
import Redux from "../assets/technologies-icons/redux.svg";
import Java from "../assets/technologies-icons/java.svg";
import SQL from "../assets/technologies-icons/sql.svg";
import MongoDB from "../assets/technologies-icons/mongodb.svg";
import MySQL from "../assets/technologies-icons/mysql.svg";
import SassLogo from "../assets/technologies-icons/sass.svg";
import AndroidStudio from "../assets/technologies-icons/android-studio.svg";
import GithubActions from "../assets/technologies-icons/github-actions.svg";

import Italy from "../assets/languages/italy.png";
import Japan from "../assets/languages/japan.png";
import Spain from "../assets/languages/spain.png";
import UnitedStates from "../assets/languages/united-states.png";

const otherTechnologies = [
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
    icon: GIT,
    text: "GIT",
  },
  {
    icon: GithubActions,
    text: "Github Actions",
  },
  {
    icon: Express,
    text: "Express",
  },
  {
    icon: Postman,
    text: "Postman",
  },
  {
    icon: AndroidStudio,
    text: "Android Studio",
  },
  {
    icon: Jest,
    text: "Jest",
  },
  {
    icon: Redux,
    text: "Redux",
  },
  {
    icon: MongoDB,
    text: "MongoDB",
  },
  {
    icon: MySQL,
    text: "MySQL",
  },
  {
    icon: SassLogo,
    text: "Sass",
  },
];

const mainTechnologies = [
  {
    icon: React,
    text: "React",
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
];

const programmingLanguages = [
  {
    icon: JavaScript,
    text: "JavaScript",
  },
  {
    icon: Kotlin,
    text: "Kotlin",
  },
  {
    icon: Java,
    text: "Java",
  },
  {
    icon: SQL,
    text: "SQL",
  },
];

const courses = [
  {
    image: ObjectParadigm,
    link: "https://www.educacionit.com/perfil/debora-bucci-911339/certificado/67949",
  },
  {
    image: AndroidIntroduction,
    link: "https://www.educacionit.com/perfil/debora-bucci-911339/certificado/62744",
  },
  {
    image: Android,
    link: "https://www.udemy.com/certificate/UC-30c582ef-04d0-42bb-bd94-8a43dbd219d9/",
  },
  {
    image: DatabasesAndSQL,
    link: "https://www.educacionit.com/perfil/debora-bucci-911339/certificado/64166",
  },
  {
    image: JavaNotProgrammers,
    link: "https://www.educacionit.com/perfil/debora-bucci-911339/certificado/62963",
  },
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

const languages = [
  {
    language: "Español",
    title: "Native",
    level: 5,
    img: Spain,
  },
  {
    language: "English",
    title: "Proficient",
    level: 4,
    img: UnitedStates,
  },
  {
    language: "Italiano",
    title: "Beginner",
    level: 1,
    img: Italy,
  },
  {
    language: "日本語",
    title: "Beginner",
    level: 1,
    img: Japan,
  },
];

export {
  courses,
  coursesPositions,
  programmingLanguages,
  mainTechnologies,
  otherTechnologies,
  languages,
};
