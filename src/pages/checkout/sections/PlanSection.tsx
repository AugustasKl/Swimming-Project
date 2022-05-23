import React from "react";
import Lists from "listController/Lists";
import { PlanBenefits } from "../elements";
import { PERSONAL_PLAN } from "constants/personalPlan";
import { SectionWrapper } from "components";


export const PlanSection: React.FC = () => (
      <SectionWrapper>
        <PlanBenefits />
        <Lists
          bullet="bullet"
          columns="2"
          listItems={PERSONAL_PLAN}
          title="Your personal Swimming and Skills Improvement Plan"
        />
      </SectionWrapper>
  );
