import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import WorksPage from "./pages/WorksPage";
import ContactPage from "./pages/ContactPage";
import * as polishLanguage from "../lang/polish";
import * as englishLanguage from "../lang/english";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage menu={polishLanguage.polishMenu} />
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
  );
};

export default App;
