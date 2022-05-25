import React, { useEffect, useState } from "react";
import { answers, email, questions } from "store/users/selectors";
import { Box, ContainerSmall, FlexWrapper,NextButton,SectionWrapper} from "components";
import { Check } from "assets/icons";
import { EmailElement, QuizTopElement } from "../elements";
import { fetchQuizAxios } from "store/store/thunks";
import InputAnswers from "components/Input/InputAnswers";
import { Loader } from "components/loader/Loader";
import { setQuizAnswers, setEmail } from "store/users/answers-slice";
import styled from "styled-components/macro";
import { theme } from "styles/theme";
import {useSelector } from "react-redux";
import { useAppDispatch } from "store/store/store";



export const QuizSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const userQuestions = useSelector(questions);
  const userAnswers:any = useSelector(answers);
  const userEmail = useSelector(email);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const currentQuestion = userQuestions ? Object.entries(userQuestions)[questionNumber]: [];
  const [questionKey, questionData] = currentQuestion? currentQuestion: [];
  const quizFinished = !currentQuestion;

  useEffect(() => {
    dispatch(fetchQuizAxios());
  }, []);

  if (!userQuestions) {
    return (<FlexWrapper justifyContent='center' mt='s160'><Loader/></FlexWrapper>)
  }

  const allQuestionsNumber = Object.keys(userQuestions).length;


  const currentQuestionHandler = () => {
    setQuestionNumber((prevState) => prevState + 1);
    console.log(selectedAnswers)
    if(questionKey==='swim_meters'){
      setSelectedAnswers([])
    }
  };



  const backButtonHandler = () => {
    if (0 < questionNumber) {
      setQuestionNumber((prevState) => prevState - 1);

    }
  };

  const multipleAnswerHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const singleAnswerHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (questionData.answerType === "single") {
      dispatch(setQuizAnswers({ [questionKey]: event.target.value }));
      setQuestionNumber((prevState) => prevState + 1);
      if(questionKey==='swim_meters'){
        setSelectedAnswers([])
      }
    }
  };
  

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(event.target.value));
  };


  if (quizFinished) {
    return (
      <EmailElement
      onChange={emailHandler}
      onClick={backButtonHandler}
      value={userEmail}
        />
    );
  }
 
  const multipleAnswer = questionData.answerType === "multiple";
  const answerType = multipleAnswer ? "checkbox" : "radio";
  const answerHandler = multipleAnswer ? multipleAnswerHandler : singleAnswerHandler;
  const nextButton =(multipleAnswer &&  <NextButton disabled={selectedAnswers.length === 0} onClick={currentQuestionHandler}>Next</NextButton>)
  const everythingIsFineButton= <NextButton onClick={currentQuestionHandler}> {selectedAnswers.length === 0 ? 'Nope. Everything is fine.' : 'Next'}</NextButton> 

  return (
    <SectionWrapper>
      <ContainerSmall maxWidth="35rem">
        <QuizSectionStyles>
          <Box backgroundColor="heroBackground" width='100%'>
            <QuizTopElement
              allQuestionsLength={allQuestionsNumber}
              onClick={backButtonHandler}
              renderedQuestion={questionData.questionText}
              questionNumber={questionNumber}
            />
          </Box>
          {questionData.answerOptions.map((answer: string) => {
            return (
              <QuizOptionsStyles isSelected={userAnswers[questionKey].includes(answer)} key={answer}>
                <InputAnswers
                  answer={answer}
                  onChange={answerHandler}
                  type={answerType}
                  value={answer}
                />
                {userAnswers[questionKey].includes(answer) && <Check />}
              </QuizOptionsStyles>
            );
          })}
          {questionKey==="exercise_type" && nextButton }
          {questionKey==="health_problems" && everythingIsFineButton}
        </QuizSectionStyles>
      </ContainerSmall>
    </SectionWrapper>
  );
};

const QuizSectionStyles = styled(FlexWrapper)` 
  align-items: center;
  flex-direction: column;
  justify-content: center;
  
  padding-bottom: 2.5rem;
  margin: 2rem auto;
 
  box-shadow: 0px 16px 32px rgba(57, 53, 60, 0.08);
`;

const QuizOptionsStyles = styled(FlexWrapper)<{ isSelected: boolean }>`
  align-items: center;
  width: 95%;

  margin-top: 1.25rem;
  
  border: ${({ isSelected }) =>isSelected === true ? `2px solid ${theme.colors.green}` : `2px solid ${theme.colors.radioColor}`};
  border-radius: ${theme.radii.r20};
 
  
  :hover {
    border: 2px solid ${theme.colors.green};
  }

`;
