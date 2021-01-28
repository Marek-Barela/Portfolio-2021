import { Menu, AboutContent, WorksContent } from "./languageInterface";

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
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut exercitationem voluptas cumque facilis blanditiis vero veniam pariatur consectetur obcaecati aliquam!",
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
