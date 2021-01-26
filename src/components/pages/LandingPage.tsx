import React from "react";
import LandingContainer from "../LandingContainer";
import LandingLinks from "../LandingLinks";
import { Menu } from "../../lang/languageInterface";

interface Props {
  menu: Menu;
}

const LandingPage = (props: Props) => {
  return (
    <LandingContainer>
      <LandingLinks menu={props.menu} />
    </LandingContainer>
  );
};

export default LandingPage;
