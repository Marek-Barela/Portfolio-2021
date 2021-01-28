import React from "react";
import LandingContainer from "../LandingContainer";
import LandingLinks from "../LandingLinks";
import LanguageSwitch from "../LanguageSwitch";
import { Menu } from "../../lang/languageInterface";
import { white } from "../../utils/colors";

interface Props {
  menu: Menu;
}

const LandingPage = (props: Props) => {
  return (
    <LandingContainer>
      <LanguageSwitch fontColor={white} />
      <LandingLinks menu={props.menu} />
    </LandingContainer>
  );
};

export default LandingPage;
