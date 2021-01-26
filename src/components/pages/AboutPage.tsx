import React, { FC } from "react";
import SectionWrapper from "../SectionWrapper";
import SubpageContainer from "../SubpageContainer";
import SubpageHeader from "../SubpageHeader";
import GoBackButton from "../GoBackButton";
import ArticleWrapper from "../ArticleWrapper";
import ArticleHeader from "../ArticleHeader";
import ImageContainer from "../ImageContainer";
import ArticleParagraph from "../ArticleParagraph";
import { AboutHeader } from "../../lang/languageInterface";

interface ParentProps {
  aboutHeader: AboutHeader;
}

type Props = ParentProps;

const white: string = "#FFFFFF";

const AboutPage: FC<Props> = (props) => {
  const { aboutHeader } = props;
  return (
    <SectionWrapper pageColor="#000000">
      <GoBackButton fontColor={white} />
      <SubpageContainer>
        <SubpageHeader fontColor={white}>{aboutHeader.header}</SubpageHeader>
        <ImageContainer />
        <ArticleWrapper>
          <ArticleHeader>About</ArticleHeader>
          <ArticleParagraph fontLarge="24px">
            Hi, I’m Marek. I'm a multi-talented human with over 10+ years of
            experiences in wide range of design disciplines.
          </ArticleParagraph>
          <ArticleParagraph>
            You can also call me a product designer, experience designer,
            interaction, UI, UX or by any other market defined function-title.
            I'm also a multi-disciplinary maker with over 10 years of
            experiences in wide range of design disciplines, manager, advisor,
            entrepreneur, front-end developer, music enthusiast, traveler,
            photographer and more.
          </ArticleParagraph>
          <ArticleParagraph>
            I don’t like to define myself by the work I’ve done. I define myself
            by the work I want to do. Skills can be taught, personality is
            inherent. I prefer to keep learning, continue challenging myself,
            and do interesting things that matter.
          </ArticleParagraph>
          <ArticleParagraph>
            Fueled by high energy levels and boundless enthusiasm, I’m easily
            inspired and more then willing to follow my fascinations wherever
            they take me. I’m passionate, expressive, multi-talented spirit with
            a natural ability to entertain and inspire. I’m never satisfied to
            just come up with ideas. Instead I have an almost impulsive need to
            act on them.
          </ArticleParagraph>
        </ArticleWrapper>
      </SubpageContainer>
    </SectionWrapper>
  );
};

export default AboutPage;
