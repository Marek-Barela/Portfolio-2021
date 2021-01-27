import React, { FC } from "react";
import styles from "./ProjectParagraph.module.css";

const { paragraph } = styles;

const ProjectParagraph: FC = ({ children }) => {
  return <p className={paragraph}>{children}</p>;
};

export default ProjectParagraph;
