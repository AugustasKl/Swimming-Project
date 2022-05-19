import {
  Box,
  Container,
  FlexWrapper,
  Input,
  SectionWrapper,
  Typography,
} from "components";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import InputAnswers from "components/Input/InputAnswers";
import { ContainerSmall } from "components/wrappers/ContainerSmall";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setQuizAnswers } from "store/slice";
import { fetchQuizAxios, postUser } from "store/store/thunks";
import styled from "styled-components/macro";

export const QuizSection: React.FC = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state: any) => state.questions.data);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [radioAnswer, setRadioAnswer] = useState<string>("");
  const [questionNumber, setQuestionNumber] = useState<number>(0);

  const currentQuestion = questions
    ? Object.entries(questions)[questionNumber]
    : [];
  const [questionKey, questionData]: any = currentQuestion
    ? currentQuestion
    : [];
  const [email, setEmail] = useState("");
  const answers = useSelector((state: any) => state.answers.quiz_answers);

  useEffect(() => {
    dispatch(fetchQuizAxios());
  }, []);

  if (!questions) {
    return <Typography>Loading....</Typography>;
  }

  const currentQuestionHandler = () => {
    setQuestionNumber((prevState) => prevState + 1);
  };

  const submitHanlder = () => {
    const quizData = { answers, email };
    dispatch(postUser(quizData));
    // sessionStorage.clear()
  };

  const quizFinished = !currentQuestion;

  const backButtonhandler = () => {
    if (0 < questionNumber) {
      setQuestionNumber((prevState) => prevState - 1);
    }
  };
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newAnswers;
    if (!selectedAnswers.includes(event.target.value)) {
      newAnswers = [...selectedAnswers, event.target.value];
    } else {
      newAnswers = selectedAnswers.filter(
        (item) => item !== event.target.value
      );
    }
    setSelectedAnswers(newAnswers);
    dispatch(setQuizAnswers({ [questionKey]: newAnswers }));
  };

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    dispatch(setQuizAnswers({ [questionKey]: event.target.value }));
  };

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  if (quizFinished) {
    return (
      <>
        <Input
          label="input email"
          type="email"
          value={email}
          onChange={emailHandler}
        />
        <ButtonPrimary onClick={backButtonhandler}>Back</ButtonPrimary>
        <ButtonPrimary onClick={submitHanlder}>Done</ButtonPrimary>
      </>
    );
  }

  return (
    <SectionWrapper>
      <ContainerSmall maxWidth="29rem">
        <QuizSectionStyles>
          <Box backgroundColor="heroBackground" width="100%">
            <Typography type="h6" color="white" textAlign="center">
              {questionData.questionText}
            </Typography>
          </Box>
          {questionData.answerType === "single" &&
            questionData.answerOptions.map((answer: string) => {
              return (
                <InputAnswers
                  answer={answer}
                  value={answer}
                  type="radio"
                  onChange={radioHandler}
                  // checked={answers[questionKey].includes(answer)}
                  backgroundColor={answers[questionKey].includes(answer) ? 'green': 'blue'}
                />

              );
              // }
            })}
          {questionData.answerType === "multiple" &&
            questionData.answerOptions.map((answer: string) => {
              return (
                <InputAnswers
                answer={answer}
                value={answer}
                type="checkbox"
                onChange={changeHandler}
                // checked={answers[questionKey].includes(answer)}
              />
              );
            })}
          <FlexWrapper mt="s24" p="s16">
            <ButtonPrimary onClick={backButtonhandler}>Back</ButtonPrimary>
            <ButtonPrimary onClick={currentQuestionHandler}>Next</ButtonPrimary>
          </FlexWrapper>
        </QuizSectionStyles>
      </ContainerSmall>
    </SectionWrapper>
  );
};

const QuizSectionStyles = styled(FlexWrapper)`
  margin: 10rem auto;
  box-shadow: 0px 16px 32px rgba(57, 53, 60, 0.08);
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
