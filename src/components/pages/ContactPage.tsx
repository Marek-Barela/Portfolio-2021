import React, { FC } from "react";
import SectionWrapper from "../SectionWrapper";
import GoBackButton from "../GoBackButton";
import LanguageSwitch from "../LanguageSwitch";
import SubpageContainer from "../SubpageContainer";
import SubpageHeader from "../SubpageHeader";
import ArticleWrapper from "../ArticleWrapper";
import ArticleHeader from "../ArticleHeader";
import ArticleParagraph from "../ArticleParagraph";
import ExternalLink from "../ExternalLink";
import { white, black } from "../../utils/colors";
import { ContactContent } from "../../lang/languageInterface";

interface ParentProps {
  contactContent: ContactContent;
}

type Props = ParentProps;

const ContactPage: FC<Props> = ({ contactContent }) => {
  const { header, contact, content, externalLinks } = contactContent;
  return (
    <SectionWrapper pageColor={black}>
      <LanguageSwitch fontColor={white} />
      <GoBackButton fontColor={white} />
      <SubpageContainer fontColor={white}>
        <SubpageHeader>{header}</SubpageHeader>
        <ArticleWrapper>
          <ArticleHeader>{contact}</ArticleHeader>
          {content.map((text, index) => {
            return <ArticleParagraph key={index}>{text}</ArticleParagraph>;
          })}
          {externalLinks.map((linkElement, index) => {
            const { title, link } = linkElement;
            return <ExternalLink key={index} title={title} link={link} />;
          })}
        </ArticleWrapper>
      </SubpageContainer>
    </SectionWrapper>
  );
};

export default ContactPage;
