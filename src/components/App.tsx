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
import { getProjects } from "../selectors/projectsSelector";
import { Projects } from "../projects/projects";

interface StateProps {
  actualLanguage?: string;
  projectsList?: Projects[];
}

type Props = StateProps;

const English: string = "EN";

const App: FC<Props> = ({ actualLanguage, projectsList = [] }) => {
  const setLanguage =
    actualLanguage === English ? englishLanguage : polishLanguage;

  const { menu, aboutHeader } = setLanguage;

  return (
    <>
      <LanguageSwitch />
      <Switch>
        <Route exact path="/">
          <LandingPage menu={menu} />
        </Route>
        <Route exact path="/about">
          <AboutPage aboutHeader={aboutHeader} />
        </Route>
        <Route exact path="/works">
          <WorksPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        {projectsList.map((project) => {
          const { id, path, name, description } = project;
          return (
            <Route exact path={"/works" + path} key={id}>
              <h3>{name}</h3>
              <p>{description}</p>
            </Route>
          );
        })}
        <Route>Not Found</Route>
      </Switch>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  actualLanguage: getActualLanguage(state),
  projectsList: getProjects(state),
});

export default connect(mapStateToProps, null)(App);
