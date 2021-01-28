import React, { FC, useState } from "react";
import styles from "./LanguageSwitch.module.css";
import { connect } from "react-redux";
import { switchLanguage } from "../../actions";
import { RootState } from "../../reducers";
import { getActualLanguage } from "../../selectors/languageSelector";

const { button } = styles;

interface ParentProps {
  fontColor: string;
}

interface StateProps {
  actualLanguage: string;
}

interface DispatchProps {
  switchLanguage: (action: string) => void;
}

type Props = StateProps & DispatchProps & ParentProps;

const PL: string = "PL";
const EN: string = "EN";

const LanguageSwitch: FC<Props> = ({
  actualLanguage,
  switchLanguage,
  fontColor,
}) => {
  const [language, setLanguage] = useState(actualLanguage);

  const reverseLanguage = language === EN ? PL : EN;

  const changeLanguage = () => {
    if (language === EN) {
      setLanguage(PL);
    } else {
      setLanguage(EN);
    }
    switchLanguage(reverseLanguage);
  };
  return (
    <button
      className={button}
      onClick={() => changeLanguage()}
      style={{ color: fontColor }}
    >
      {reverseLanguage}
    </button>
  );
};

const mapStateToProps = (state: RootState) => ({
  actualLanguage: getActualLanguage(state),
});

export default connect(mapStateToProps, { switchLanguage })(LanguageSwitch);
