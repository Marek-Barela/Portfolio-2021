import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import WorksPage from "./pages/WorksPage";
import ContactPage from "./pages/ContactPage";
import SingleProject from "./SingleProject";
import NotFoundPage from "./pages/NotFound";
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
    actualLanguage === English ? englishLanguage : polishLanguage;

  const { menu, aboutContent, worksContent, contactContent } = setLanguage;

  const { projects } = worksContent;

  return (
    <>
      <Switch>
        <Route exact path="/">
          <LandingPage menu={menu} />
        </Route>
        <Route exact path="/about">
          <AboutPage aboutContent={aboutContent} />
        </Route>
        <Route exact path="/works">
          <WorksPage worksContent={worksContent} />
        </Route>
        <Route exact path="/contact">
          <ContactPage contactContent={contactContent} />
        </Route>
        {projects.map((project) => {
          const { id, link } = project;
          return (
            <Route exact path={link} key={id}>
              <SingleProject {...project} />
            </Route>
          );
        })}
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  actualLanguage: getActualLanguage(state),
});

export default connect(mapStateToProps, null)(App);
