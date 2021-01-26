import React, { useState } from "react";
import styles from "./GoBackButton.module.css";
import { createBrowserHistory } from "history";

let history = createBrowserHistory();

const { button } = styles;

interface ParentProps {
  fontColor: string;
}

type Props = ParentProps;

const GoBackButton = (props: Props) => {
  const { fontColor } = props;
  const [textExtend, setTextExtend] = useState(false);
  const extendText = () => {
    setTextExtend(true);
  };

  const hideExtendedText = () => {
    setTextExtend(false);
  };

  return (
    <button
      className={button}
      onMouseEnter={() => extendText()}
      onMouseOut={() => hideExtendedText()}
      onClick={() => history.goBack()}
      style={{ color: fontColor }}
    >
      Marek.{textExtend ? "Back" : ""}
    </button>
  );
};

export default GoBackButton;
