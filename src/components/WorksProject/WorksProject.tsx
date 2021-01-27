import React, { FC } from "react";
import styles from "./WorksProject.module.css";
import ProjectParagraph from "../ProjectParagraph";
import { Link } from "react-router-dom";

const { header, wrapper } = styles;

interface ParentProps {
  projectName: string;
  projectDescription: string;
  link: string;
}

type Props = ParentProps;

const WorksProject: FC<Props> = ({ projectName, projectDescription, link }) => {
  return (
    <article className={wrapper}>
      <Link to={link}>
        <h3 className={header}>{projectName}</h3>
        <ProjectParagraph>{projectDescription}</ProjectParagraph>
      </Link>
    </article>
  );
};

export default WorksProject;
