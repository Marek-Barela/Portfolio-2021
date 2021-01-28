import React from "react";
import SectionWrapper from "../SectionWrapper";
import GoBackButton from "../GoBackButton";
import LanguageSwitch from "../LanguageSwitch";
import SubpageContainer from "../SubpageContainer";
import SubpageHeader from "../SubpageHeader";
import ArticleWrapper from "../ArticleWrapper";
import ArticleHeader from "../ArticleHeader";
import ArticleParagraph from "../ArticleParagraph";
import { white, black } from "../../utils/colors";

const ContactPage = () => {
  return (
    <SectionWrapper pageColor={black}>
      <LanguageSwitch fontColor={white} />
      <GoBackButton fontColor={white} />
      <SubpageContainer fontColor={white}>
        <SubpageHeader>Let's make something great!</SubpageHeader>
        <ArticleWrapper>
          <ArticleHeader>Contact</ArticleHeader>
          <ArticleParagraph>
            I'm seeking out opportunities to collaborate with companies /
            agencies / individuals, not just work for them. I want to bring my
            collective design experience to the table where we can work together
            to solve real business-problems in a way that optimizes all of our
            respective experience and knowledge.
          </ArticleParagraph>
          <ArticleParagraph>
            I want to avoid subjective pissing-matches, and favor open-minded
            collaborators where egos are out of the equation. If that all sounds
            about right, then lets for sure chat about how we can work together.
          </ArticleParagraph>
          <ArticleParagraph>
            Feel free to reach out through any platforms bellow:
          </ArticleParagraph>
        </ArticleWrapper>
      </SubpageContainer>
    </SectionWrapper>
  );
};

export default ContactPage;
