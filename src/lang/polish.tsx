import {
  Menu,
  AboutContent,
  WorksContent,
  ContactContent,
} from "./languageInterface";

export const menu: Menu = {
  hello: "Witaj.",
  Iam: "Jestem",
  name: "Marek",
  about: "O mnie",
  works: "Prace",
  contact: "Kontakt",
};

export const aboutContent: AboutContent = {
  header: "Projektuje i buduje produkty cyfrowe",
  about: "O mnie",
  content: [
    "Cześć, nazywam się Marek. Jestem osobą, która dobrze rozumie technologie front-endowe, skupiam się na tworzeniu czystego i łatwego do utrzymania kodu. Szukam okazji, aby wnieść swój wkład w różne projekty i mieć możliwość współpracy z grupą świetnych ludzi, aby tworzyć niesamowite aplikacje.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, eius.",
  ],
};

export const worksContent: WorksContent = {
  projects: [
    {
      id: "1",
      projectTitle: "Simpler",
      projectDescription:
        "Rozbudowana aplikacja do zarządzania zadaniami do wykonania i organizacją czasu.",
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
        "Aplikacja zaprojektowana do przechowywania i organizowania notatek",
      link: "/works/racconnotes",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora iusto aperiam animi soluta, quam rem ea esse architecto eum vel.",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil assumenda quisquam suscipit laboriosam doloremque soluta illum repudiandae in libero quas praesentium eligendi tempora sint, vel porro molestias, commodi quis officia.",
      ],
    },
  ],
};

export const contactContent: ContactContent = {
  header: "Zbudujmy razem coś wielkiego!",
  contact: "Kontakt",
  content: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sint nulla voluptate nemo temporibus consequuntur, maiores vero doloribus repellat eveniet sequi veniam omnis totam corporis. At, dolorum! Repellat, sapiente ut!",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, eius.",
  ],
};
