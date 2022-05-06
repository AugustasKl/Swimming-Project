import { SectionWrapper } from "components";
import { PERSONAL_PLAN } from "constants/personalPlan";
import Lists from "listController/Lists";
import React from "react";
import { PlanBenefits } from "../elements";


export const PlanSection: React.FC = () => {
  return (
    <>
      <SectionWrapper>
        <PlanBenefits />
        <Lists
          title="Your personal 3-month Anxiety and Stress Reduction Plan"
          listItems={PERSONAL_PLAN}
          columns="2"
          bullet="bullet"
        />
      </SectionWrapper>
    </>
  );
};
