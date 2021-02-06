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
        "Aplikacja do zarządzania zadaniami do wykonania i organizacją czasu.",
      link: "/works/simpler",
      content: [
        "Złożona aplikacja do zarządzania projektami i zadaniami. Aplikacja oparta jest na popularnej aplikacji Todoist",
        "Wykorzystane technologie React, Redux, Redux-Saga, Typescript, Node.js, Express i MongoDB.",
      ],
      image: simpler,
    },
    {
      id: "2",
      projectTitle: "Raccon Notes",
      projectDescription:
        "Aplikacja zaprojektowana do przechowywania i organizowania notatek",
      link: "/works/racconnotes",
      content: [
        "Raccoon to świetna aplikacja do zarządzania notatkami z funkcjonalnością edytora tekstu",
        "Aplikacja została stworzona przy użycu technologii takich jak Node.js Express i MongoDB.",
      ],
      image: raccoon,
    },
    {
      id: "3",
      projectTitle: "Mailbox",
      projectDescription:
        "Rozbudowana funkcjonalność aplikacji pocztowej po stronie klienta",
      link: "/works/mailbox",
      content: [
        "Aplikacja stworzona na podobieństwo poczty elektronicznej posiada bogatą ilość operacji takie jak sortowanie, przenoszenie zaznaczonych wiadomości, tworzenie nowych folderów, oznaczanie wiadomości jako przeczytane i nieprzeczytane itd.",
        "Mailbox został stworzony tylko jako aplikacja frontendowa, przez co nie posiada rozbudowanego backendu. Wszystkie zmiany w aplikacji wracają do ustawień domyślnych po odświeżeniu.",
      ],
      image: mailbox,
    },
  ],
};

export const contactContent: ContactContent = {
  header: "Zbudujmy razem coś wielkiego!",
  contact: "Kontakt",
  content: [
    "Jeśli podobają ci się moje projekty i chciałbyś pracować z osobą asertywną o otwartym umyśle, skontaktuj się ze mną za pomocą poniższych linków.",
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
