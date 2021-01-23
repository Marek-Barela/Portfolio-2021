import React, { ReactNode } from "react";
import styles from "./LandingContainer.module.css";

interface ChildrenProps {
  children?: ReactNode;
}

const { wrapper } = styles;

const LandingContainer = ({ children }: ChildrenProps) => {
  return <div className={wrapper}>{children}</div>;
};

export default LandingContainer;
