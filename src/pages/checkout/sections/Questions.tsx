import React from "react";
import { Container, FlexWrapper, SectionWrapper } from "components";
import { QuestionsImage, QuestionsList } from "../elements";
import { useQuery } from "styles/theme";

export const Questions: React.FC = () => {
  const {isMobile}=useQuery()
  return (
    <SectionWrapper>
      <Container>
       <FlexWrapper>
        {isMobile? '' :<QuestionsImage />}  
          <QuestionsList />
       </FlexWrapper>
      </Container>
    </SectionWrapper>
  );
};
