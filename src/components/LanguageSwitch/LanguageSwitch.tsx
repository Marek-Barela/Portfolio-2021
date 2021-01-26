import React, { FC, useState } from "react";
import styles from "./LanguageSwitch.module.css";
import { connect } from "react-redux";
import { switchLanguage } from "../../actions";
import { RootState } from "../../reducers";
import { getActualLanguage } from "../../selectors/languageSelector";

const { button } = styles;

interface stateProps {
  actualLanguage: string;
}

interface dispatchProps {
  switchLanguage: (action: string) => void;
}

type Props = stateProps & dispatchProps;

const PL: string = "PL";
const EN: string = "EN";

const LanguageSwitch: FC<Props> = ({ actualLanguage, switchLanguage }) => {
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
    <button className={button} onClick={() => changeLanguage()}>
      {reverseLanguage}
    </button>
  );
};

const mapStateToProps = (state: RootState) => ({
  actualLanguage: getActualLanguage(state),
});

export default connect(mapStateToProps, { switchLanguage })(LanguageSwitch);
