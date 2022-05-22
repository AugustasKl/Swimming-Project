import { FlexWrapper, Typography } from "components";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import React from "react";
import Logo from "assets/icons/Logo";
import styled from "styled-components/macro";
import { borderRadius, marginTop } from "styled-system";
import { BackButton } from "components/buttons/BackButton";


interface QuizTopElementProps {
  allQuestionsLength: number;
  onClick?: () => void;
  renderedQuestion?: string;
  questionNumber: number;
}

export const QuizTopElement: React.FC<QuizTopElementProps> = ({
  allQuestionsLength,
  onClick,
  renderedQuestion,
  questionNumber,
}) => {

  let progressValue = ((questionNumber + 1) / allQuestionsLength) * 100;

  return (
    <>
      <FlexWrapper
        alignItems="center"
        justifyContent="space-evenly"
        paddingY="s16"
        ml="s8"
        width="90%"
      >
        <BackButton onClick={onClick} disabled={questionNumber===0}>Back</BackButton>
        <Logo />
        <Typography color="white" fontSize="fs18" pt='s16'>{`${
          questionNumber + 1
        }/${allQuestionsLength}`}</Typography>
      </FlexWrapper>
    {progressValue  &&  <progress
        max="100"
        value={progressValue}
        style={{ width: "100%", marginTop: "1rem" }}
      />}
      <Typography type="h6" color="white" textAlign="center" p="s16">
        {renderedQuestion}
      </Typography>
    </>
  );
};
