import React, { FC } from "react";
import styles from "./SectionWrapper.module.css";

const { wrapper } = styles;

interface ParentProps {
  pageColor: string;
}

type Props = ParentProps;

const SectionWrapper: FC<Props> = ({ children, pageColor }) => {
  return (
    <section className={wrapper} style={{ backgroundColor: pageColor }}>
      {children}
    </section>
  );
};

export default SectionWrapper;
