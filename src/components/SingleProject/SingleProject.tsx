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
import ExternalLink from "../ExternalLink";
import { WorksProject } from "../../lang/languageInterface";
import { white, black } from "../../utils/colors";

type Props = WorksProject;

const SingleProject: FC<Props> = ({
  projectTitle,
  projectDescription,
  content,
  image,
  externalLinks,
}) => {
  return (
    <SectionWrapper pageColor={white}>
      <LanguageSwitch fontColor={black} />
      <GoBackButton fontColor={black} />
      <SubpageContainer fontColor={black}>
        <SubpageHeader>{projectTitle}</SubpageHeader>
        <ImageContainer image={image} />
        <ArticleWrapper>
          <ArticleHeader>{projectDescription}</ArticleHeader>
          {content.map((text, index) => {
            return <ArticleParagraph key={index}>{text}</ArticleParagraph>;
          })}
          {externalLinks.map((externalLink, index) => {
            const { title, link } = externalLink;
            return <ExternalLink key={index} title={title} link={link} />;
          })}
        </ArticleWrapper>
      </SubpageContainer>
    </SectionWrapper>
  );
};

export default SingleProject;
