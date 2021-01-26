import React, { FC } from "react";
import styles from "./SubpageHeader.module.css";

interface ParentProps {
  fontColor: string;
}

type Props = ParentProps;

const { header } = styles;

const SubpageHeader: FC<Props> = ({ children, fontColor }) => {
  return (
    <h3 className={header} style={{ color: fontColor }}>
      {children}
    </h3>
  );
};

export default SubpageHeader;
