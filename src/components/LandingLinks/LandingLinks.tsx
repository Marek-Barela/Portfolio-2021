import React, { useState } from "react";
import styles from "./LandingLinks.module.css";
import { Link } from "react-router-dom";
import { Menu } from "../../lang/languageInterface";

interface Props {
  menu: Menu;
}

const { wrapper, header, aboutStyle, worksStyle, contactStyle } = styles;

const setDefaultAbout = "about";
const setDefaultWorks = "works";
const setDefaultContact = "contact";

const LandingLinks = (props: Props) => {
  const { menu } = props;
  const { hello, Iam, name, about, works, contact } = menu;

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
          className={aboutStyle}
          to="/about"
          onMouseEnter={() => {
            displayTransformedLink("about", setDefaultWorks, setDefaultContact);
          }}
          onMouseOut={() => {
            hideTransformedLink(setDefaultAbout);
          }}
        >
          {transformedText.about ? about : hello}
        </Link>
        <Link
          className={worksStyle}
          to="/works"
          onMouseEnter={() => {
            displayTransformedLink("works", setDefaultAbout, setDefaultContact);
          }}
          onMouseOut={() => {
            hideTransformedLink(setDefaultWorks);
          }}
        >
          {transformedText.works ? works : Iam}
        </Link>
        <Link
          className={contactStyle}
          to="/contact"
          onMouseEnter={() => {
            displayTransformedLink("contact", setDefaultAbout, setDefaultWorks);
          }}
          onMouseOut={() => {
            hideTransformedLink(setDefaultContact);
          }}
        >
          {transformedText.contact ? contact : name}
        </Link>
      </h1>
    </div>
  );
};

export default LandingLinks;
