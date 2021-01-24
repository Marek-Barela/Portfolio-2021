import React, { useState } from "react";
import styles from "./LandingLinks.module.css";
import { Link } from "react-router-dom";

const { wrapper, header, about, works, contact } = styles;

const setDefaultAbout = "about";
const setDefaultWorks = "works";
const setDefaultContact = "contact";

const LandingLinks = () => {
  const [transformedText, setTransformedText] = useState({
    about: false,
    works: false,
    contact: false,
  });

  const displayTransformedLink = (
    directoryToDisplay: string,
    setDefaultOne: string,
    setDefaultTwo: string
  ) => {
    setTransformedText({
      ...transformedText,
      [directoryToDisplay]: true,
      [setDefaultOne]: false,
      [setDefaultTwo]: false,
    });
  };

  const hideTransformedLink = (directory: string) => {
    setTransformedText({ ...transformedText, [directory]: false });
  };

  return (
    <div className={wrapper}>
      <h1 className={header}>
        <Link
          className={about}
          to="/about"
          onMouseEnter={() => {
            displayTransformedLink("about", setDefaultWorks, setDefaultContact);
          }}
          onMouseOut={() => {
            hideTransformedLink(setDefaultAbout);
          }}
        >
          {transformedText.about ? "About" : "Hello."}
        </Link>
        <Link
          className={works}
          to="/works"
          onMouseEnter={() => {
            displayTransformedLink("works", setDefaultAbout, setDefaultContact);
          }}
          onMouseOut={() => {
            hideTransformedLink(setDefaultWorks);
          }}
        >
          {transformedText.works ? "Works" : "I am"}
        </Link>
        <Link
          className={contact}
          to="/contact"
          onMouseEnter={() => {
            displayTransformedLink("contact", setDefaultAbout, setDefaultWorks);
          }}
          onMouseOut={() => {
            hideTransformedLink(setDefaultContact);
          }}
        >
          {transformedText.contact ? "Contact" : "Marek"}
        </Link>
      </h1>
    </div>
  );
};

export default LandingLinks;
