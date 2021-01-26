import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import WorksPage from "./pages/WorksPage";
import ContactPage from "./pages/ContactPage";
import LanguageSwitch from "./LanguageSwitch";
import * as polishLanguage from "../lang/polish";
import * as englishLanguage from "../lang/english";
import { connect } from "react-redux";
import { RootState } from "../reducers";
import { getActualLanguage } from "../selectors/languageSelector";

interface StateProps {
  actualLanguage?: string;
}

type Props = StateProps;

const English: string = "EN";

const App: FC<Props> = ({ actualLanguage }) => {
  const setLanguage =
    actualLanguage === English
      ? englishLanguage.englishMenu
      : polishLanguage.polishMenu;

  return (
    <>
      <LanguageSwitch />
      <Switch>
        <Route exact path="/">
          <LandingPage menu={setLanguage} />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/works">
          <WorksPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Switch>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  actualLanguage: getActualLanguage(state),
});

export default connect(mapStateToProps, null)(App);
