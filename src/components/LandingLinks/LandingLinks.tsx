import React, { useState } from "react";
import styles from "./LandingLinks.module.css";
import { Link } from "react-router-dom";

const { wrapper, header, about, works, contact } = styles;

const LandingLinks = () => {
  const [transformedText, setTransformedText] = useState({
    about: false,
    works: false,
    contact: false,
  });

  const displayTransformedLink = (
    directory: string,
    setDefaultOne: string,
    setDefaultTwo: string
  ) => {
    setTransformedText({
      ...transformedText,
      [directory]: true,
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
            displayTransformedLink("about", "works", "contact");
          }}
          onMouseOut={() => {
            hideTransformedLink("about");
          }}
        >
          {transformedText.about ? "About" : "Hello."}
        </Link>
        <Link
          className={works}
          to="/works"
          onMouseEnter={() => {
            displayTransformedLink("works", "about", "contact");
          }}
          onMouseOut={() => {
            hideTransformedLink("works");
          }}
        >
          {transformedText.works ? "Works" : "I am"}
        </Link>
        <Link
          className={contact}
          to="/contact"
          onMouseEnter={() => {
            displayTransformedLink("contact", "about", "works");
          }}
          onMouseOut={() => {
            hideTransformedLink("contact");
          }}
        >
          {transformedText.contact ? "Contact" : "Marek"}
        </Link>
      </h1>
    </div>
  );
};

export default LandingLinks;
