import {
  Menu,
  AboutContent,
  WorksContent,
  ContactContent,
} from "./languageInterface";

export const menu: Menu = {
  hello: "Hello.",
  Iam: "I am",
  name: "Marek",
  about: "About",
  works: "Works",
  contact: "Contact",
};

export const aboutContent: AboutContent = {
  header: "I project & build digital products",
  about: "About",
  content: [
    "Hey my name is Marek. I'm a web developer with a good understanding of front-end technologies focused on producing clean and maintainable code. I'm looking for opportunities to contribute my skills and collaborate with a group to create amazing products.",
    "I feel very comfortable in React technology, I now how to create a huge number of functionalities, paying attention to the performance and architecture of a given solution. I follow the news all the time, so I don't lag behind when a new update comes out.",
    "I only create practical projects, using the latest technological solutions, not only front-end, but also back-end.",
    "The technologies I mainly use are React, Redux, Saga, TypeScript, Node.js, Express",
  ],
};

export const worksContent: WorksContent = {
  projects: [
    {
      id: "1",
      projectTitle: "Simpler",
      projectDescription: "Large application for managing tasks",
      link: "/works/simpler",
      content: [
        "Complex full stack application to manage projects and tasks. Application is based on popular application Todoist",
        "Application was created with React, Redux, Redux-Saga, Typescript, Node.js, Express and MongoDB",
      ],
    },
    {
      id: "2",
      projectTitle: "Raccon Notes",
      projectDescription:
        "An application designed to store and organize your notes",
      link: "/works/racconnotes",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora iusto aperiam animi soluta, quam rem ea esse architecto eum vel.",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil assumenda quisquam suscipit laboriosam doloremque soluta illum repudiandae in libero quas praesentium eligendi tempora sint, vel porro molestias, commodi quis officia.",
      ],
    },
  ],
};

export const contactContent: ContactContent = {
  header: "Let's make something great!",
  contact: "Contact",
  content: [
    "If you like my projects and would like to work with an open-minded assertive person, Feel free to reach out through any platforms bellow.",
  ],
  externalLinks: [
    { title: "marek.barela@wp.pl", link: "mailto:marek.barela@wp.pl" },
    { title: "Github", link: "https://github.com/Marek-Barela" },
    {
      title: "Linkedin",
      link: "https://www.linkedin.com/in/marek-bare%C5%82a/",
    },
  ],
};
