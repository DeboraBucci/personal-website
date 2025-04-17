import MythicalBooksImg from "../assets/projects/mythical-books.webp";
import LilysCuisineImg from "../assets/projects/lilys-cuisine.webp";
import GoScrumImg from "../assets/projects/go-scrum.webp";

export const projects = [
  {
    title: "Mythical Books",
    description: {
      english: `An online platform where users can explore and purchase books. The project includes sections like a digital store, subscription plans, and user benefits—designed to bring the magic of stories to life. It communicates to a backend made with .NET 8(C#).`,
      spanish:
        "Una plataforma online donde los usuarios pueden buscar y comprar libros. El proyecto cuenta con secciones como una tienda digital, planes de subscripciones, y beneficios de usuario diseñados para traer la magia de los cuentos a la vida. Se comunica con un backend hecho en .NET 8(C#).",
    },
    image: MythicalBooksImg,
    link: "https://github.com/DeboraBucci/mythical-books",
    host: undefined,
    tags: ["React", "TypeScript", ".Net(C#)", "SQLServer"],
  },

  {
    title: "Lily's Cuisine",
    description: {
      english: `An app where you can order a menu of 4 delicious foods.\nYou'll have to login using the following credentials:\n\tEmail: challenge@alkemy.org\n\tPassword: react`,
      spanish:
        "Una app donde podés ordenar de un menu de 4 opciones deliciosas.\nVas a poder loguear usando las siguientes credenciales:\n\tEmail: challege@alkemy.org\n\tPassword: react",
    },
    image: LilysCuisineImg,
    link: "https://github.com/DeboraBucci/lilys-cuisine#",
    host: undefined,
    tags: ["React", "JavaScript", "Sass"],
  },

  {
    title: "Go Scrum",
    description: {
      english:
        "A task management web app designed to help teams collaborate using Scrum methodology. Users can create and manage tasks. It's built for simplicity and productivity, making agile project management more accessible and efficient.",
      spanish:
        "Una aplicacion web diseñada para organizar tareas para ayudar a equipos a colaborar entre si, utilizando la metodologia Scrum. Los usuarios pueden crear y administrar tareas. Esta construida para simplicidad y productividad, haciendo a la administracion agil mas accesible y eficiente.",
    },
    image: GoScrumImg,
    link: "https://github.com/DeboraBucci/go-scrum",
    host: undefined,
    tags: ["React", "JavaScript"],
  },
];
