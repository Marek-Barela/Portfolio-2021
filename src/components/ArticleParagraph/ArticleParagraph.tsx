import React, { FC } from "react";
import styles from "./ArticleParagraph.module.css";

const { paragraph } = styles;

interface ParentProps {
  fontLarge?: string;
}

type Props = ParentProps;

const ArticleParagraph: FC<Props> = ({ children, fontLarge }) => {
  return (
    <p className={paragraph} style={{ fontSize: fontLarge }}>
      {children}
    </p>
  );
};

export default ArticleParagraph;
