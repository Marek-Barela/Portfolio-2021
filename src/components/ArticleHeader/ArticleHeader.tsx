import React, { FC } from "react";
import styles from "./ArticleHeader.module.css";

const { header } = styles;

const ArticleHeader: FC = ({ children }) => {
  return <h3 className={header}>{children}</h3>;
};

export default ArticleHeader;
