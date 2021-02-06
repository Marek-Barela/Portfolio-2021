import {
  Menu,
  AboutContent,
  WorksContent,
  ContactContent,
} from "./languageInterface";

import simpler from "../assets/images/simpler.png";
import raccoon from "../assets/images/raccoon.png";
import mailbox from "../assets/images/mailbox.png";

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
      projectDescription: "Practical application for managing tasks",
      link: "/works/simpler",
      content: [
        "Complex full stack application to manage projects and tasks. Application is based on popular application Todoist",
        "Application was created with React, Redux, Redux-Saga, Typescript, Node.js, Express and MongoDB",
      ],
      image: simpler,
      externalLinks: [
        { title: "Github", link: "https://github.com/Marek-Barela/Simpler" },
        { title: "Simpler", link: "https://simpler.herokuapp.com/" },
      ],
    },
    {
      id: "2",
      projectTitle: "Raccon Notes",
      projectDescription:
        "An application designed to store and organize your notes",
      link: "/works/racconnotes",
      content: [
        "Raccoon is a great application for managing notes with text editor functionality.",
        "Application was created as full stack application with technologies such as Node.js Express and MongoDB.",
      ],
      image: raccoon,
      externalLinks: [
        {
          title: "Github",
          link: "https://github.com/Marek-Barela/Raccoon-notes",
        },
        { title: "Raccon Notes", link: "https://raccoon-notes.herokuapp.com/" },
      ],
    },
    {
      id: "3",
      projectTitle: "Mailbox",
      projectDescription:
        "Complex client side functionality of email application",
      link: "/works/mailbox",
      content: [
        "The application created to resemble of email functionality. It contain rich amount of features such as sorting, moving messages, new folders creating, marking messages as read and unread etc.",
        "Mailbox was created only as a frontend application, therefore it does not contain an extensive backend. All changes in the app return to their default settings after refreshing.",
      ],
      image: mailbox,
      externalLinks: [
        {
          title: "Github",
          link: "https://github.com/Marek-Barela/Mailbox",
        },
        { title: "Mailbox", link: "https://raccoon-notes.herokuapp.com/" },
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
