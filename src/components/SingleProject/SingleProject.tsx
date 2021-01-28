import React, { FC } from "react";
import SectionWrapper from "../SectionWrapper";
import LanguageSwitch from "../LanguageSwitch";
import GoBackButton from "../GoBackButton";
import SubpageContainer from "../SubpageContainer";
import ImageContainer from "../ImageContainer";
import SubpageHeader from "../SubpageHeader";
import ArticleWrapper from "../ArticleWrapper";
import ArticleHeader from "../ArticleHeader";
import ArticleParagraph from "../ArticleParagraph";
import { WorksProject } from "../../lang/languageInterface";
import { white, black } from "../../utils/colors";

type Props = WorksProject;

const SingleProject: FC<Props> = ({
  projectTitle,
  projectDescription,
  content,
}) => {
  return (
    <SectionWrapper pageColor={white}>
      <LanguageSwitch fontColor={black} />
      <GoBackButton fontColor={black} />
      <SubpageContainer fontColor={black}>
        <SubpageHeader>{projectTitle}</SubpageHeader>
        <ImageContainer />
        <ArticleWrapper>
          <ArticleHeader>{projectDescription}</ArticleHeader>
          {content.map((text, index) => {
            return <ArticleParagraph key={index}>{text}</ArticleParagraph>;
          })}
        </ArticleWrapper>
      </SubpageContainer>
    </SectionWrapper>
  );
};

export default SingleProject;
