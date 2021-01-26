import React, { FC } from "react";
import SectionWrapper from "../SectionWrapper";
import SubpageContainer from "../SubpageContainer";
import SubpageHeader from "../SubpageHeader";
import GoBackButton from "../GoBackButton";
import { AboutHeader } from "../../lang/languageInterface";

interface ParentProps {
  aboutHeader: AboutHeader;
}

type Props = ParentProps;

const AboutPage: FC<Props> = (props) => {
  const { aboutHeader } = props;
  return (
    <SectionWrapper pageColor="#000000">
      <GoBackButton />
      <SubpageContainer>
        <SubpageHeader fontColor="#FFFFFF">{aboutHeader.header}</SubpageHeader>
      </SubpageContainer>
    </SectionWrapper>
  );
};

export default AboutPage;
