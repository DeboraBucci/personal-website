import javascript from "../assets/certifications/javascript.webp";
import javascript2 from "../assets/certifications/javascript-coder.webp";
import responsiveWebDesign from "../assets/certifications/responsive-web-design.webp";
import alkemy from "../assets/certifications/alkemy.webp";
import react from "../assets/certifications/react-coder.webp";
import webDesign from "../assets/certifications/web-design-coder.webp";
import {
  About,
  Certification,
  Contact,
  Footer,
  Headings,
  Hero,
  NavLink,
  Projects,
  Trait,
} from "./data-types";

const linksList: NavLink[] = [
  {
    text: {
      english: "Home",
      spanish: "Casa",
    },
    icon: "fas fa-home",
    href: "#home",
    key: "l1",
  },
  {
    text: {
      english: "About",
      spanish: "Sobre mí",
    },
    icon: "fas fa-address-card",
    href: "#about",
    key: "l2",
  },
  {
    text: {
      english: "Certifications",
      spanish: "Certificaciones",
    },
    icon: "fa-solid fa-scroll",
    href: "#certifications",
    key: "l6",
  },
  {
    text: {
      english: "Courses",
      spanish: "Cursos",
    },
    icon: "fas fa-award",
    href: "#courses",
    key: "l3",
  },
  {
    text: {
      english: "Projects",
      spanish: "Proyectos",
    },
    icon: "fas fa-briefcase",
    href: "#projects",
    key: "l4",
  },

  {
    text: {
      english: "Contact",
      spanish: "Contacto",
    },
    icon: "fas fa-paper-plane",
    href: "#contact",
    key: "l5",
  },
];

const sectionHeadings: Headings = {
  about: {
    english: {
      title: "A Little About me",
      subtitle: "about me",
    },
    spanish: {
      title: "Un Poco Sobre mí",
      subtitle: "sobre mí",
    },
  },

  certifications: {
    english: {
      title: "My Certifications",
      subtitle: "certifications",
    },
    spanish: {
      title: "Mis Certificaciones",
      subtitle: "certificaciones",
    },
  },

  courses: {
    english: {
      title: "Finished Courses",
      subtitle: "courses",
    },
    spanish: {
      title: "Cursos Completados",
      subtitle: "cursos",
    },
  },

  projects: {
    english: {
      title: "My Projects",
      subtitle: "projects",
    },
    spanish: {
      title: "Mis Proyectos",
      subtitle: "proyectos",
    },
  },
};

const certifications: Certification[] = [
  {
    image: alkemy,
    institute: "alkemy",
    alt: "certificate of Skill Up of React, Work Methodologies and Soft Skills from Alkemy",
    href: "",
    text: {
      english: [
        "Alkemy offered a rigorous Bootcamp consisting of a series of challenges that needed to be overcome in order to keep advancing.",

        "The first challenge was to create a medium-sized project to be accepted into the Bootcamp, which was no easy feat due to the month-long time limit. Planning the project while keeping the deadline in mind was a daunting task.",

        "Once accepted, had seven weeks to complete four courses (Soft Skills, Agile Methodologies, Skill Up React I, Skill Up React II), a project, and three screenings.",

        "The Soft Skills course taught valuable skills for effective communication and collaboration in professional environments. Learned how to listen attentively and ask questions when clarification is needed.",

        "In Agile Methodologies, learned how SCRUM works, including Sprints, team composition (product owner, scrum master, and development team), the backlog, user stories, estimations, and the popular Kanban system used in websites like Trello. This course helped understand the dynamics of a work environment and its benefits.",

        "Both React Skill Up courses covered new features and libraries for React, and at the same time, allowed to review fundamental concepts previously learned, such as hooks, debugging, testing, and redux.",

        "Near the end of the seven weeks, had to complete one challenging screening for each of the previously mentioned courses, which consisted in solving many exercises in a span of a few hours without any breaks.",
      ],
      spanish: [
        "Alkemy ofreció un Bootcamp riguroso que consistía en una serie de desafíos que debían ser cumplidos para seguir avanzando.",

        "El primer desafío fue crear un proyecto de tamaño mediano que contaba con una fecha límite de un mes para entregarlo para ser aceptada en el Bootcamp.",

        "Una vez aceptada, tuve siete semanas para completar tres cursos (Habilidades Blandas, Metodologías Ágiles, Skill Up React I, Skill Up React II), un proyecto y tress screenings.",

        "El curso de Habilidades Blandas enseñó valiosa información sobre cómo comunicarse de forma efectiva y la colaboración requerida en el ambiente profesional. Aprendí a escuchar atentamente y preguntar cuando sea necesario.",

        "En Metodologías Ágiles, aprendí cómo funciona SCRUM, incluyendo los Sprints, la composición del equipo (product owner, scrum master, y el equipo de programadores), el backlog, las user stories, las estimaciones, y el sistema Kanban usado en páginas como Trello.",

        "Ambos cursos de React Skill Up cubrieron nuevas funcionalides y librerías para React, permitiendo a su vez, repasar conceptos fundamentales previamente vistos, como hooks, debugging, testing, y redux.",

        "Casi al final de la jornada, tuve que completar un desafío de un par de horas de duración sin ningún descanso por cada curso previamente mecionado.",
      ],
    },
    complexity: 4,
    date: {
      english: "",
      spanish: "",
    },
  },

  {
    image: javascript,
    institute: "freecodecamp",
    alt: "JavaScript certificate from freeCodeCamp",
    href: "https://www.freecodecamp.org/certification/fcc0319e92c-1fd6-4354-9f09-dbbf04aba37b/javascript-algorithms-and-data-structures",
    text: {
      english: [
        "This course taught JavaScript from scratch, and in a very complete and deep manner.",

        "Was requested to pass five challenges in order to gain the certification, which was able to do after a lot of thinking and reaserching.",

        "Was given the oportunity to delve deep into the language, and learn new things, like regex, object oriented programming (OOP) and much more.",
      ],
      spanish: [
        "Este curso enseñó JavaScript desde cero, y de una forma muy completa y profunda.",

        "Requerí pasar cinco desafíos para poder ganar la certificación, lo cual pude lograr luego de pensar mucho e investigar.",

        "Se me dio la oportunidad de conocer más sobre este lenguaje, y aprender nuevas cosas, como regex, programación orientada a objetos, y mucho más.",
      ],
    },
    complexity: 3,
    date: {
      english: "Issued in May 20th, 2022",
      spanish: "Terminado el 1ero de Febrero del 2023",
    },
  },

  {
    image: responsiveWebDesign,
    institute: "freecodecamp",
    alt: "Responsive Web Design certificate from freeCodeCamp",
    href: "https://www.freecodecamp.org/certification/fcc0319e92c-1fd6-4354-9f09-dbbf04aba37b/responsive-web-design",
    text: {
      english: [
        "This course taught Web Design from the basis of HTML and CSS, touching subjects such as flexbox, grid, best practices, responsive design, and much more.",

        "Had to plan and develop five small projects, each one of them requiring of passing set points and functionalities, in order to obtain the certification.",
      ],
      spanish: [
        "Este curso eseñó Diseño Web desde las bases de HTML y CSS, tocando temas como flexbox, grid, mejores prácticas, diseño responsivo, y mucho más.",

        "Tuve que planear y crear cinco proyectos pequeños, cada uno de ellos requiriendo de pasar ciertos puntos y funcionalidades, para lograr obtener el certificado.",
      ],
    },
    complexity: 2,
    date: {
      english: "Issued in September 8th, 2022",
      spanish: "Terminado el 1ero de Febrero del 2023",
    },
  },
];

const traits: Trait[] = [
  {
    title: {
      english: "Coding Enthusiast",
      spanish: "Entusiasta de Código",
    },
    content: {
      english:
        "I've been coding for quite a while now, and it has grown to be one of my strongest passions. Love learning new things, and being able to apply them to my projects.",
      spanish:
        "He estado programando desde hace unos años ya, y se ha convertido en una de mis grandes pasiones.",
    },
    icon: "fa-solid fa-code",
  },
  {
    title: { english: "Drawing Artist", spanish: "Artista" },
    content: {
      english:
        "Maybe not as diligent as I once was, but still enjoying drawing and painting from time to time.",
      spanish:
        "Tal vez no tan diligente como alguna vez lo fui, pero aun disfruto de dibujar y pintar en ciertos momentos.",
    },
    icon: "fa-solid fa-palette",
  },
  {
    title: { english: "Bibliomane", spanish: "Lectora Empedernida" },
    content: {
      english:
        "Reading a book while drinking a coffee in a bright cozy ambient while enjoying the company of my cats is one of my favorite things to do.",
      spanish:
        "Leer un libro en un ambiente luminoso y cómodo, con la compañía de mis gatos, es una de las actividades que más disfruto hacer.",
    },
    icon: "fa-solid fa-book",
  },
  {
    title: {
      english: "Resilient",
      spanish: "Resiliente",
    },
    content: {
      english:
        "I've come to realize that the pace in which you trace your journey doesn't matter, as long as you keep moving forward.",
      spanish:
        "Me he dado cuenta que la velocidad en la que uno traza su camino no es relevante, sino que el seguir avanzando lo es.",
    },
    icon: "fa-solid fa-star",
  },
];

const hero: Hero = {
  english: {
    greeting: "Hello!",
    firstPart: "I'm",
    prep: "a",
    typing: [
      "Frontend Developer",
      "Backend Developer",
      "Web Developer",
      "Web Designer",
      "Forever Student",
    ],
  },
  spanish: {
    greeting: "Hola!",
    firstPart: "Soy",
    prep: "una",
    typing: [
      "Desarrolladora Frontend",
      "Desarrolladora Backend",
      "Desarrolladora Web",
      "Diseñadora Web",
      "Estudiante de por Vida",
    ],
  },
};

const about: About = {
  titles: {
    traits: {
      english: "Traits",
      spanish: "Rasgos",
    },

    programmingLanguages: {
      english: "Programming Languages",
      spanish: "Lenguajes de Programación",
    },

    mainTechnologies: {
      english: "Main Technologies",
      spanish: "Tecnologías Principales",
    },
  },
};

const projects: Projects = {
  opts: {
    english: {
      list: ["Type", "Framework", "Technologies", "Commits", "Design by"],
      btn: {
        big: "Visit Project",
        small: "Source Code",
        all: "Check All my Projects",
      },
    },
    spanish: {
      list: ["Tipo", "Framework", "Tecnologías", "Commits", "Diseñado por"],
      btn: {
        big: "Visita el Proyecto",
        small: "Código Fuente",
        all: "Mira Todos mis Proyectos",
      },
    },
  },

  arr: [
    {
      title: "Lily's Cuisine",
      link: "lilys-cuisine",
      num: "1",
      info: [
        {
          english: "Menu ordering app",
          spanish: "Aplicación de menús",
        },
        "React",
        "Bootstrap, Axios, etc.",
        "400+",
        "Débora Bucci",
      ],
      extraInfo: {
        english: (
          <div className="project-card__instructions">
            <p className="project-card__instructions--text">
              Email: <code>challenge@alkemy.org</code>
            </p>

            <p className="project-card__instructions--text">
              Password: <code>react</code>
            </p>
          </div>
        ),
        spanish: (
          <div className="project-card__instructions">
            <p className="project-card__instructions--text">
              Correo: <code>challenge@alkemy.org</code>
            </p>

            <p className="project-card__instructions--text">
              Contraseña: <code>react</code>
            </p>
          </div>
        ),
      },
    },

    {
      title: "Mythical Books",
      link: "mythical-books",
      num: "2",
      info: [
        {
          english: "Book store",
          spanish: "Tienda de libros",
        },
        "React",
        "SASS, react-router-dom, etc.",
        "140+",
        "Débora Bucci",
      ],
    },

    {
      title: "Go Scrum",
      link: "go-scrum",
      num: "3",
      info: [
        { english: "Task Manager", spanish: "Organizador de Tareas" },
        "React",
        "React-router-dom, SASS, etc.",
        "190+",
        "Débora Bucci",
      ],
    },
  ],
};

const contact: Contact = {
  languages: {
    english: {
      title: "Contact info",
      subtitle: "want to talk?",
      comment: "A penny for your thoughts!",
    },
    spanish: {
      title: "Contacto",
      subtitle: "¿querés hablar?",
      comment: "Un centavo por tus pensamientos!",
    },
  },
  links: [
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
      text: {
        english: "send me an e-mail",
        spanish: "Envíame un e-mail",
      },
    },
  ],
};

const footer: Footer = {
  english: {
    icons8: "Made using icons from ",
    otherText: ["Created with", "and", "Copyright"],
  },
  spanish: {
    icons8: "Creada usando íconos de ",
    otherText: ["Creado con", "y", "Derechos de Autor"],
  },
};

export {
  linksList,
  certifications,
  traits,
  hero,
  sectionHeadings,
  about,
  projects,
  contact,
  footer,
};
