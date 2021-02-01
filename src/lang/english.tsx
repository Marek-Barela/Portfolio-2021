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
    "I'm a web developer with a good understanding of front-end technologies focused on producing clean and maintainable code. I'm looking for opportunities to contribute my skills and collaborate with a group to create amazing applications.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, eius.",
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
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora iusto aperiam animi soluta, quam rem ea esse architecto eum vel.",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil assumenda quisquam suscipit laboriosam doloremque soluta illum repudiandae in libero quas praesentium eligendi tempora sint, vel porro molestias, commodi quis officia.",
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
    "I'm seeking out opportunities to collaborate with companies agencies / individuals, not just work for them. I want to bring my collective design experience to the table where we can work together to solve real business-problems in a way that optimizes all of our respective experience and knowledge.",
    "I want to avoid subjective pissing-matches, and favor open-minded collaborators where egos are out of the equation. If that all sounds about right, then lets for sure chat about how we can work together.",
    "Feel free to reach out through any platforms bellow:",
  ],
};
