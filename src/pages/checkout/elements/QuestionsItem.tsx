import React, { useState } from "react";
import { AnswersItem } from ".";
import { FlexWrapper, Typography } from "components";
import { QuestionsProps } from "constants/questions";
import { Minus, Plus } from "assets/icons";
import {mobile, theme } from "styles/theme";
import styled from "styled-components/macro";


export const QuestionsItem: React.FC<QuestionsProps> = ({
  answer,
  id,
  question,
}) => {
  const [questionAsked, setQuestionAsked] = useState<string>("");
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const toggleAnswerHandler = () => {
    setQuestionAsked(id);
    setShowAnswer((prevState) => !prevState);
  };

  return (
    <QuestionItemStyles onClick={toggleAnswerHandler}>
      <FlexWrapper justifyContent="space-between">
        <FlexWrapper flexDirection="column" gap="0.5rem" pb="s4">
          <Typography borderBottom={`1px solid ${theme.colors.white}`} color="white"  fontWeight="fw500" >
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
  width: 100%;
  
  padding: 1rem 1.5rem;
  margin: 1rem;
  
  cursor: pointer;
  background: ${theme.colors.questionsAnswers};
  list-style: none;

 @media ${mobile} {
    margin: 1rem auto;
  }
`;
