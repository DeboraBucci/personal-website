import pigGame from "./imgs/projects/pig-game-project.png";
import googleHomepage from "./imgs/projects/google-homepage-project.png";
import tributePage from "./imgs/projects/tribute-page-project.png";
import surveyForm from "./imgs/projects/survey-form-project.png";
import technicalDocumentation from "./imgs/projects/technical-documentation-project.png";
import productLanding from "./imgs/projects/product-landing-project.png";

const linksList = [
  { text: "Home", icon: "home", href: "#home", key: "l1" },
  {
    text: "Certifications",
    icon: "award",
    href: "#certifications",
    key: "l2",
  },
  { text: "Portfolio", icon: "briefcase", href: "#portfolio", key: "l3" },
  { text: "Contact", icon: "paper-plane", href: "#contact", key: "l4" },
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

export { linksList, projects };
