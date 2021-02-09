import React from "react";
import styles from "./NotFoundHeader.module.css";

const { header } = styles;

const NotFoundHeader = () => {
  return <h3 className={header}>404</h3>;
};

export default NotFoundHeader;
