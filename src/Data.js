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

export { linksList, projects, sections, coursesImages };
