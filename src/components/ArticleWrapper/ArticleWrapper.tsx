import React, { FC } from "react";
import styles from "./ArticleWrapper.module.css";

const { article } = styles;

const ArticleWrapper: FC = ({ children }) => {
  return <article className={article}>{children}</article>;
};

export default ArticleWrapper;
