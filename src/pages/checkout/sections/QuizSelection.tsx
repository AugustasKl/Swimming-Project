import React from "react";
import { answerReason } from "store/users/selectors";
import { Contact,  } from "../elements";
import { Container,PlanSwitcher, SectionWrapper, Typography } from "components";

import { useSelector } from "react-redux";


export const QuizSelection: React.FC = () => {
  const userAnswerReason = useSelector(answerReason);
  
  return (
    <SectionWrapper>
      <Container>
        <Typography  pb="s20" textAlign="center" type="h6">
          Welcome to the Swimclub Family!
        </Typography>
        <PlanSwitcher answer={userAnswerReason} />
        <Typography fontWeight="fw600"  paddingY="s20" textAlign="center">
          If you have any questions don't hesitate to contact us:
        </Typography>
        <Contact />
      </Container>
    </SectionWrapper>
  );
};
