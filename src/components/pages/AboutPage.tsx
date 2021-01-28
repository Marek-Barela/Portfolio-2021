import React, { FC } from "react";
import SectionWrapper from "../SectionWrapper";
import SubpageContainer from "../SubpageContainer";
import SubpageHeader from "../SubpageHeader";
import LanguageSwitch from "../LanguageSwitch";
import GoBackButton from "../GoBackButton";
import ArticleWrapper from "../ArticleWrapper";
import ArticleHeader from "../ArticleHeader";
import ImageContainer from "../ImageContainer";
import ArticleParagraph from "../ArticleParagraph";
import { AboutContent } from "../../lang/languageInterface";
import { white, black } from "../../utils/colors";

interface ParentProps {
  aboutContent: AboutContent;
}

type Props = ParentProps;

const AboutPage: FC<Props> = ({ aboutContent }) => {
  const { header, about, content } = aboutContent;
  return (
    <SectionWrapper pageColor={black}>
      <LanguageSwitch fontColor={white} />
      <GoBackButton fontColor={white} />
      <SubpageContainer fontColor={white}>
        <SubpageHeader>{header}</SubpageHeader>
        <ImageContainer />
        <ArticleWrapper>
          <ArticleHeader>{about}</ArticleHeader>
          {content.map((text, index) => {
            return <ArticleParagraph key={index}>{text}</ArticleParagraph>;
          })}
        </ArticleWrapper>
      </SubpageContainer>
    </SectionWrapper>
  );
};

export default AboutPage;
