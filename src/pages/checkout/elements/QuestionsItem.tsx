import React, { useState } from "react";
import { QuestionsProps } from "constants/questions";
import styled from "styled-components/macro";
import { FlexWrapper, Typography } from "components";
import { AnswersItem } from ".";
import { Minus, Plus } from "assets/icons";
import { mobile, theme, useQuery } from "styles/theme";
export const QuestionsItem: React.FC<QuestionsProps> = ({
  id,
  question,
  answer,
}) => {
  const [questionAsked, setQuestionAsked] = useState<string>("");
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const toggleAnswerHandler = () => {
    setQuestionAsked(id);
    setShowAnswer((prevState) => !prevState);
  };
  const {isMobile}=useQuery()
  return (
    <QuestionItemStyles onClick={toggleAnswerHandler}>
      <FlexWrapper justifyContent="space-between">
        <FlexWrapper flexDirection="column" gap="0.5rem" pb="s4">
          <Typography color="white" borderBottom="1px solid white" fontWeight="fw500" >
            {question}
          </Typography>
          {showAnswer && questionAsked === id && ( <AnswersItem specificAnswer={answer}/> )}
        </FlexWrapper>
        {showAnswer ? <Minus /> : <Plus />}
      </FlexWrapper>
    </QuestionItemStyles>
  );
};

const QuestionItemStyles = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 1rem 1.5rem;
  background: ${theme.colors.questionsAnswers};
  margin: 1rem;
 width: 100%;
 @media ${mobile} {
    margin: 1rem auto;

  }
`;
