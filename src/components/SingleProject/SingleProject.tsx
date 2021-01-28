import React, { FC } from "react";
import SectionWrapper from "../SectionWrapper";
import GoBackButton from "../GoBackButton";
import SubpageContainer from "../SubpageContainer";
import ImageContainer from "../ImageContainer";
import SubpageHeader from "../SubpageHeader";
import ArticleWrapper from "../ArticleWrapper";
import ArticleHeader from "../ArticleHeader";
import ArticleParagraph from "../ArticleParagraph";

interface ParentProps {
  name: string;
  description: string;
}

type Props = ParentProps;

const white: string = "#FFFFFF";
const black: string = "#000000";

const SingleProject: FC<Props> = ({ name, description }) => {
  return (
    <SectionWrapper pageColor={white}>
      <GoBackButton fontColor="#000000" />
      <SubpageContainer>
        <SubpageHeader fontColor={black}>{name}</SubpageHeader>
        <ImageContainer />
        <ArticleWrapper>
          <ArticleHeader>{description}</ArticleHeader>
          <ArticleParagraph fontLarge="24px">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
            deserunt reiciendis dicta perferendis earum dolores voluptas, culpa
            atque assumenda itaque, totam pariatur consectetur animi modi at!
            Vero tenetur explicabo consequatur ea sed adipisci facere nostrum
            possimus culpa provident, nobis aut?
          </ArticleParagraph>
          <ArticleParagraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed aut
            perferendis quas rerum debitis quia quam quaerat deleniti esse odio
            natus, ea quo illo tempora dolores nesciunt commodi minus error.
          </ArticleParagraph>
        </ArticleWrapper>
      </SubpageContainer>
    </SectionWrapper>
  );
};

export default SingleProject;
