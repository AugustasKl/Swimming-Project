import { Container, FlexWrapper, SectionWrapper, Typography } from "components";

import { PlanSwitcher } from "pages/checkout/elements/PlanSwitcher";
import React from "react";
import { useSelector } from "react-redux";
import { Contact } from "../elements";

export const QuizSelection: React.FC = () => {
  const answers = useSelector(
    (state: any) => state.answers.quiz_answers.reason
  );
  console.log(answers);

  return (
    <SectionWrapper>
      <Container>
        <Typography textAlign="center" type="h6" pb="s20">
          Welcome to the Swimclub Family!
        </Typography>
        <PlanSwitcher answer={answers} />
        <Typography textAlign="center" paddingY="s20" fontWeight="fw600">
          If you have any questions don't hesitate to contact us:
        </Typography>
        <Contact />
      </Container>
    </SectionWrapper>
  );
};
