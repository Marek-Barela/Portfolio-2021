import React, { FC } from "react";
import { ExternalLinks } from "../../lang/languageInterface";
import styles from "./ExternalLink.module.css";

type Props = ExternalLinks;

const { linkStyle } = styles;

const ExternalLink: FC<Props> = ({ title, link }) => {
  return (
    <a className={linkStyle} href={link} target="_blank" rel="noreferrer">
      {title}
    </a>
  );
};

export default ExternalLink;
