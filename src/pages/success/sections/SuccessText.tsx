import React from "react";
import { Box, Container, FlexWrapper, SectionWrapper, Typography } from "components";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { email } from "store/users/selectors";
import {  navigate } from "gatsby";
import { setEmail, setPrice, setQuizAnswers } from "store/users/answers-slice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store/store/store";

export const SuccessText: React.FC = () => {
  const dispatch=useAppDispatch()
  const userEmail=useSelector(email)
  const emptyAnswers={
    exercise_type:[],
    gender:'',
    health_problems:[],
    last_3_months:'',
    personality:'',
    reason:'',
    swim_meters:'',
    training_frequency:'',
   }
  const startOverHandler=()=>{
    sessionStorage.clear()
    dispatch(setQuizAnswers(emptyAnswers))
    dispatch(setEmail(''))
    dispatch(setPrice(0))
    navigate('/')
  }
  return (
    <SectionWrapper>
      <Container>
        <FlexWrapper alignItems="center" flexDirection="column" gap="1rem" >
          <Typography  textAlign='center' type="h6"  >
            We are happy that you have joined our growing community!
          </Typography>
          <Typography  >
            We have just sent out a letter and invoice to this email address:
          </Typography>
          <Typography fontSize="fs18" fontWeight="fw700"  >
            {userEmail}
          </Typography>
          <Typography fontSize="fs14">
            (Please check your Spam folder too)
          </Typography>
          <Box maxWidth='38.3125rem'>
          <Typography textAlign='center' >
            We will get in touch with you shortly P.s. If you ordered any
            additional services, check your email for a confirmation letter.
          </Typography>
          </Box>
          <ButtonPrimary onClick={startOverHandler}>
              Start Over!
          </ButtonPrimary>
        </FlexWrapper>
      </Container>
    </SectionWrapper>
  );
};
