import React from "react";
import { Container, Lists, SectionWrapper } from "components";
import { PERSONAL_PLAN } from "constants/personalPlan";
import { PlanBenefits } from "../elements";


export const PlanSection: React.FC = () => (
      <SectionWrapper>
        <Container>
        <PlanBenefits />
        <Lists
          columns="2"
          bullet="bullet"
          listItems={PERSONAL_PLAN}
          title="Your personal Swimming and Skills Improvement Plan"
          />
          </Container>
      </SectionWrapper>
  );

  