import React, { FC } from "react";
import styles from "./SubpageHeader.module.css";

const { header } = styles;

const SubpageHeader: FC = ({ children }) => {
  return <h2 className={header}>{children}</h2>;
};

export default SubpageHeader;
