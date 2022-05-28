import React from "react";
import { BackButton } from "components/buttons/BackButton";
import { Box, FlexWrapper, Typography } from "components";
import { Logo } from "assets/icons";


interface QuizTopElementProps {
  allQuestionsLength: number;
   onClick?: () => void;
  renderedQuestion?: string;
  questionNumber: number;
  questionKey:string,
  selectedAnswers:string[]
}

export const QuizTopElement: React.FC<QuizTopElementProps> = ({
  allQuestionsLength,
  onClick,
  renderedQuestion,
  selectedAnswers,
  questionNumber,
  questionKey,
}) => {
  const progressBarValue = ((questionNumber + 1) / allQuestionsLength) * 100;

  return (
    <>
      <FlexWrapper
        alignItems="center"
        justifyContent="space-evenly"
        paddingY="s16"
        ml="s8"
        width="90%"
      >
        <BackButton disabled={questionKey==='health_problems' && selectedAnswers.length>0} onClick={onClick}>Back</BackButton>
        <Logo />
        <Typography color="white" fontSize="fs18" pt="s16">{`${questionNumber + 1}/${allQuestionsLength}`}</Typography>
        </FlexWrapper>
      <Box as='progress'
        max="100"
        style={{ marginTop: "1rem", width: "100%"}}
        value={progressBarValue}
      />
      <Typography color="white" p="s16" textAlign="center" type="h6">{renderedQuestion}</Typography>
    </>
  );
};
