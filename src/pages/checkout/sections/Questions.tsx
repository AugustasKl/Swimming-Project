import { Container, FlexWrapper, SectionWrapper } from "components";
import React from "react";
import { useQuery } from "styles/theme";
import { QuestionsImage, QuestionsList } from "../elements";

export const Questions: React.FC = () => {
  const {isMobile}=useQuery()
  return (
    <SectionWrapper>
    {/* <SectionWrapper background="#0747da"> */}
      <Container>
       <FlexWrapper>
        {isMobile? '' :<QuestionsImage />}  
          <QuestionsList />
       </FlexWrapper>
      </Container>
    </SectionWrapper>
  );
};
