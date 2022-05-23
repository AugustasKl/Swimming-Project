import React from "react";
import { Contact } from "../elements";
import { Container, SectionWrapper, Typography } from "components";
import { PlanSwitcher } from "pages/checkout/elements/PlanSwitcher";
import { useSelector } from "react-redux";


export const QuizSelection: React.FC = () => {
  const answers = useSelector((state: any) => state.answers.quiz_answers.reason);
  return (
    <SectionWrapper>
      <Container>
        <Typography  pb="s20" textAlign="center" type="h6">
          Welcome to the Swimclub Family!
        </Typography>
        <PlanSwitcher answer={answers} />
        <Typography fontWeight="fw600"  paddingY="s20" textAlign="center">
          If you have any questions don't hesitate to contact us:
        </Typography>
        <Contact />
      </Container>
    </SectionWrapper>
  );
};
