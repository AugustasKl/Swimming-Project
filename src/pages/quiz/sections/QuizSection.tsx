import { Check } from "assets/icons";
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
import { theme } from "styles/theme";

export const QuizSection: React.FC<{
  onSelected: (choice: boolean) => void;
}> = (props) => {
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
  console.log(answers);
  useEffect(() => {
    dispatch(fetchQuizAxios());
  }, []);

  if (!questions) {
    return <Typography>Loading....</Typography>;
  }

  const allQuestionsNumber=Object.keys(questions).length

  const currentQuestionHandler = () => {
    setQuestionNumber((prevState) => prevState + 1);
    // setSelectedAnswers([])
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
    if(selectedAnswers.length>1){
      setSelectedAnswers([])
    }
   
  };

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    if (questionData.answerType === "single") {
      dispatch(setQuizAnswers({ [questionKey]: event.target.value }));
      setQuestionNumber((prevState) => prevState + 1);
    }
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

  const answerType =
    questionData.answerType === "multiple" ? "checkbox" : "radio";
  const answerHandler =
    questionData.answerType === "multiple" ? changeHandler : radioHandler;
    return (
      <SectionWrapper>
      <ContainerSmall maxWidth="35rem">
        <QuizSectionStyles>
            <Typography>{`${questionNumber+1}/${allQuestionsNumber}`}</Typography>
          <Box backgroundColor="heroBackground" width="100%">
            <Typography type="h6" color="white" textAlign="center">
              {questionData.questionText}
            </Typography>
          </Box>
          {questionData.answerOptions.map((answer: string) => {
      console.log(selectedAnswers)
            console.log(answerType);
            return (
              <QuizOptions
                border={
                  answers[questionKey].includes(answer)
                    ? `2px solid ${theme.colors.green}`
                    : "2px solid transperant"
                }
              >
                <InputAnswers
                  key={answer}
                  answer={answer}
                  value={answer}
                  type={answerType}
                  onChange={answerHandler}
                />
                {answers[questionKey].includes(answer) && <Check />}
              </QuizOptions>
            );
          })}
          <FlexWrapper mt="s24" p="s16">
            <ButtonPrimary onClick={backButtonhandler}>Back</ButtonPrimary>
            {questionData.answerType === "multiple" && (
              <ButtonPrimary onClick={currentQuestionHandler} disabled={selectedAnswers.length===0}>
                Next
              </ButtonPrimary>
            )}
          </FlexWrapper>
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
`;
const QuizOptions = styled(FlexWrapper)`
  /* padding: 1rem; */
  align-items: center;
  border: 1px solid #ccc;
  width: 95%;
  margin-top: 1.25rem;
  border-radius: 1rem;
  cursor: pointer;

  :hover {
    border: 2px solid ${theme.colors.green};
  }
  :active {
    border: 1px solid ${theme.colors.blue};
  }
`;
