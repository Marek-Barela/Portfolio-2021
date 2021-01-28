import React from "react";
import LanguageSwitch from "../LanguageSwitch";
import GoBackButton from "../GoBackButton";
import SectionWrapper from "../SectionWrapper";
import SubpageContainer from "../SubpageContainer";
import WorksProject from "../WorksProject";
import { white, black } from "../../utils/colors";

const WorksPage = () => {
  return (
    <SectionWrapper pageColor={black}>
      <LanguageSwitch fontColor={white} />
      <GoBackButton fontColor={white} />
      <SubpageContainer fontColor={white}>
        <WorksProject
          projectName="Raccon Notes"
          projectDescription="Rich text editor"
          link="/works/racconnotes"
        />
        <WorksProject
          projectName="Mailbox"
          projectDescription="Client Side email application"
          link="/works/mailbox"
        />
        <WorksProject
          projectName="Flickr"
          projectDescription="Web tempalte created with gatsby"
          link="/works/flickr"
        />
        <WorksProject
          projectName="Simpler"
          projectDescription="Task Managment Application"
          link="/works/simpler"
        />
      </SubpageContainer>
    </SectionWrapper>
  );
};

export default WorksPage;
