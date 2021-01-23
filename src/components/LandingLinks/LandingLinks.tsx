import React from "react";
import styles from "./LandingLinks.module.css";
import { Link } from "react-router-dom";

const { wrapper, header, about, works, contact } = styles;

const LandingLinks = () => {
  return (
    <div className={wrapper}>
      <h1 className={header}>
        <Link className={about} to="/about">
          Hello.
        </Link>
        <Link className={works} to="/works">
          I am
        </Link>
        <Link className={contact} to="/contact">
          Marek
        </Link>
      </h1>
    </div>
  );
};

export default LandingLinks;
