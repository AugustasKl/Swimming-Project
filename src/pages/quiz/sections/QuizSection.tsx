import { Check } from "assets/icons";
import {
  Box,
  Container,
  FlexWrapper,
  Input,
  SectionWrapper,
  Typography,
} from "components";
import { BackButton } from "components/buttons/BackButton";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { NextButton } from "components/buttons/NextButton";
import InputAnswers from "components/Input/InputAnswers";
import { Loader } from "components/loader/Loader";
import { ContainerSmall } from "components/wrappers/ContainerSmall";
import { Link, navigate } from "gatsby";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setQuizAnswers, setEmail } from "store/slice";
import { fetchQuizAxios, postUser } from "store/store/thunks";
import styled from "styled-components/macro";
import { theme } from "styles/theme";
import { EmailElement, QuizTopElement } from "../elements";

export const QuizSection: React.FC = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state: any) => state.questions.data);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const email = useSelector((state: any) => state.answers.email);
  const answers = useSelector((state: any) => state.answers.quiz_answers);
  const currentQuestion = questions ? Object.entries(questions)[questionNumber]: [];
  const [questionKey, questionData]: any = currentQuestion? currentQuestion: [];
  const quizFinished = !currentQuestion;


  useEffect(() => {
    dispatch(fetchQuizAxios());
  }, []);

  if (!questions) {
    return (<FlexWrapper justifyContent='center' mt='s160'><Loader/></FlexWrapper>)
  }

  const allQuestionsNumber = Object.keys(questions).length;

  const currentQuestionHandler = () => {
    setQuestionNumber((prevState) => prevState + 1);
    setSelectedAnswers([])
  };



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
    if (questionData.answerType === "single") {
      dispatch(setQuizAnswers({ [questionKey]: event.target.value }));
      setQuestionNumber((prevState) => prevState + 1);
    }
  };

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(event.target.value));
  };


  if (quizFinished) {
    return (
      <EmailElement
        value={email}
        onChange={emailHandler}
        onClick={backButtonhandler}
        />
        
    );

  }
 
  const multipleAnswer = questionData.answerType === "multiple";
  const answerType = multipleAnswer ? "checkbox" : "radio";
  const answerHandler = multipleAnswer ? changeHandler : radioHandler;

  return (
    <SectionWrapper>
      <ContainerSmall maxWidth="35rem">
        <QuizSectionStyles>
          <Box backgroundColor="heroBackground" width='100%' textAlign="center">
            <QuizTopElement
              questionNumber={questionNumber}
              allQuestionsLength={allQuestionsNumber}
              onClick={backButtonhandler}
              renderedQuestion={questionData.questionText}
            />
          </Box>
          {questionData.answerOptions.map((answer: string) => {
            return (
              <QuizOptions isSelected={answers[questionKey].includes(answer)} key={answer}>
                <InputAnswers
                  answer={answer}
                  value={answer}
                  type={answerType}
                  onChange={answerHandler}
                />
                {answers[questionKey].includes(answer) && <Check />}
              </QuizOptions>
            );
          })}

          {multipleAnswer && (
            <NextButton
              onClick={currentQuestionHandler}
              disabled={selectedAnswers.length === 0}
            >
              Next
            </NextButton>
          )}
        </QuizSectionStyles>
      </ContainerSmall>
    </SectionWrapper>
  );
};

const QuizSectionStyles = styled(FlexWrapper)`
  margin: 5rem auto;
  box-shadow: 0px 16px 32px rgba(57, 53, 60, 0.08);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2.5rem;
`;
const QuizOptions = styled(FlexWrapper)<{ isSelected: boolean }>`
  border: ${({ isSelected }) =>
    isSelected === true ? `2px solid ${theme.colors.green}` : "2px solid #ccc"};
  align-items: center;
  width: 95%;
  margin-top: 1.25rem;
  border-radius: 1rem;

  cursor: pointer;
  :hover {
    border: 2px solid ${theme.colors.green};
  }
`;
