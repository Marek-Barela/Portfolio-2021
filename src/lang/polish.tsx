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
    "Cześć, nazywam się Marek. Jestem osobą, która dobrze rozumie technologie front-endowe. Skupiam się na tworzeniu czystego i łatwego do utrzymania kodu. Szukam okazji, aby wnieść swój wkład w rozwój projektów i mieć możliwość współpracy w fajnym zespole, aby tworzyć niesamowite produkty.",
    "Bardzo swobodnie czuję się w technologii React, potrafię stworzyć ogromną liczbę funkcjonalności, zwracając przy tym dużą uwagę na wydajność oraz architekturę danego rozwiązania. Śledzę cały czas nowinki, dzięki czemu nie pozostaje w tyle, gdy wychodzi nowa aktualizacja.",
    "Tworzę tylko praktyczne aplikacje, wykorzystując przy tym najnowsze rozwiązania technologiczne nie tylko front-endowe, ale i back-endowe.",
    "Technologie, których głównie używam to React, Redux, Saga, TypeScript, Node.js, Express",
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
  content: ["Jeśli podobają ci się moje projekty i chciałbyś pracować z osobą asertywną o otwartym umyśle, napisz do mnie na jedną z poniższych platform."],
};
