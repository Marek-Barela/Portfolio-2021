import React, { FC } from "react";
import LanguageSwitch from "../LanguageSwitch";
import GoBackButton from "../GoBackButton";
import SectionWrapper from "../SectionWrapper";
import SubpageContainer from "../SubpageContainer";
import WorksProject from "../WorksProject";
import { WorksContent } from "../../lang/languageInterface";
import { white, black } from "../../utils/colors";

interface ParentProps {
  worksContent: WorksContent;
}

type Props = ParentProps;

const WorksPage: FC<Props> = ({ worksContent }) => {
  const { projects } = worksContent;
  return (
    <SectionWrapper pageColor={black}>
      <LanguageSwitch fontColor={white} />
      <GoBackButton fontColor={white} />
      <SubpageContainer fontColor={white}>
        {projects.map((project, index) => {
          const { projectTitle, projectDescription, link } = project;
          return (
            <WorksProject
              key={index}
              projectName={projectTitle}
              projectDescription={projectDescription}
              link={link}
            />
          );
        })}
      </SubpageContainer>
    </SectionWrapper>
  );
};

export default WorksPage;
