import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import LandingPage from "../pages/LandingPage";
import AboutPage from "../pages/AboutPage";
import WorksPage from "../pages/WorksPage";
import ContactPage from "../pages/ContactPage";

let wrapped: any = null;

beforeEach(() => {
  wrapped = shallow(<App />);
});

describe("Shows all component pages in App component", () => {
  it("Show one LandingPage component", () => {
    expect(wrapped.find(LandingPage).length).toEqual(1);
  });

  it("Show one AboutPage component", () => {
    expect(wrapped.find(AboutPage).length).toEqual(1);
  });

  it("Show one WorksPage component", () => {
    expect(wrapped.find(WorksPage).length).toEqual(1);
  });

  it("Show one ContactPage component", () => {
    expect(wrapped.find(ContactPage).length).toEqual(1);
  });
});
