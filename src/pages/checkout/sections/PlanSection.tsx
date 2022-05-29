import React from "react";
import { Container, Lists, SectionWrapper } from "components";
import { PERSONAL_PLAN } from "constants/personalPlan";
import { PlanBenefits } from "../elements";
import { useQuery } from "styles/theme";

export const PlanSection: React.FC = () => {
  const {isMobile}=useQuery()
  return (
    <SectionWrapper padding="1.5rem  1rem">
      <Container>
        {!isMobile && <PlanBenefits />}
        <Lists
          columns="2"
          bullet="bullet"
          listItems={PERSONAL_PLAN}
          title="Your personal Swimming and Skills Improvement Plan"
        />
      </Container>
    </SectionWrapper>
  );
};
