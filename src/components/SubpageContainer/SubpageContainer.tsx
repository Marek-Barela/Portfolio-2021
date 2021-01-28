import React, { FC } from "react";
import styles from "./SubpageContainer.module.css";

interface ParentProps {
  fontColor: string;
}

type Props = ParentProps;

const { container } = styles;

const SubpageContainer: FC<Props> = ({ children, fontColor }) => {
  return (
    <div className={container} style={{ color: fontColor }}>
      {children}
    </div>
  );
};

export default SubpageContainer;
