import {
  Menu,
  AboutContent,
  WorksContent,
  ContactContent,
} from "./languageInterface";

import simpler from "../assets/images/simpler.png";
import raccoon from "../assets/images/raccoon.png";
import mailbox from "../assets/images/mailbox.png";
import currencyConverter from "../assets/images/currencyconverter.png";
import slick from "../assets/images/slick.png";

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
      externalLinks: [
        { title: "Github", link: "https://github.com/Marek-Barela/Simpler" },
        { title: "Simpler", link: "https://simpler.herokuapp.com/" },
      ],
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
        "Rozbudowana funkcjonalność aplikacji pocztowej po stronie klienta",
      link: "/works/mailbox",
      content: [
        "Aplikacja stworzona na podobieństwo poczty elektronicznej posiada bogatą ilość operacji takie jak sortowanie, przenoszenie zaznaczonych wiadomości, tworzenie nowych folderów, oznaczanie wiadomości jako przeczytane i nieprzeczytane itd.",
        "Mailbox został stworzony tylko jako aplikacja frontendowa, przez co nie posiada rozbudowanego backendu. Wszystkie zmiany w aplikacji wracają do ustawień domyślnych po odświeżeniu.",
      ],
      image: mailbox,
      externalLinks: [
        {
          title: "Github",
          link: "https://github.com/Marek-Barela/Mailbox",
        },
        {
          title: "Mailbox",
          link: "https://agitated-nobel-aff5f8.netlify.app/",
        },
      ],
    },
    {
      id: "4",
      projectTitle: "Currency Converter",
      projectDescription:
        "Przeliczanie i dane historyczne dla 33 różnych walut.",
      link: "/works/currency-converter",
      content: [
        "Aplikacja stworzona jako wersja próbna dla bardzo rozbudowanej konfiguracji projektu",
        "Konwerter zawiera bardzo bogatą i skalowalną strukturę projektu z wykorzystaniem wielu bibliotek.",
        "Celem projektu było stworzenie aplikacji z zachowaniem danych po odświerzeniu, możliwość sprawdzenia cen dla określonej waluty oraz kursów historycznych z wykresem.",
        "Użyte technologie: React, Redux, Redux-Saga, Typescript, Typesafe-Actions, CSS Modules, Ramda, Axios",
      ],
      image: currencyConverter,
      externalLinks: [
        {
          title: "Github",
          link: "https://github.com/Marek-Barela/Currency-Converter",
        },
        {
          title: "Currency Converter",
          link: "https://hardcore-leakey-952fc7.netlify.com/",
        },
      ],
    },
    {
      id: "5",
      projectTitle: "Slick",
      projectDescription: "Szablon aplikacji webowej",
      link: "/works/slick",
      content: ["Aplikacja z bardzo ładnym designem stworzona w Reacie."],
      image: slick,
      externalLinks: [
        {
          title: "Github",
          link: "https://github.com/Marek-Barela/Slick-React",
        },
        {
          title: "Slick",
          link: "https://determined-mccarthy-d890e0.netlify.app/",
        },
      ],
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
