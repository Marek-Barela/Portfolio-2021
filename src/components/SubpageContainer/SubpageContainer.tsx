import React, { FC } from "react";
import styles from "./SubpageContainer.module.css";

const { container } = styles;

const SubpageContainer: FC = ({ children }) => {
  return <div className={container}>{children}</div>;
};

export default SubpageContainer;
