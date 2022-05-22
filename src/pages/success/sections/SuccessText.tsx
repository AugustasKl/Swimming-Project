import { Box, Container, FlexWrapper, SectionWrapper, Typography } from "components";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { Link } from "gatsby";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setQuizAnswers } from "store/slice";

export const SuccessText: React.FC = () => {
  const dispatch=useDispatch()
  const email=useSelector((state:any)=>state.answers.email)
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
  }
  return (
    <SectionWrapper >
      <Container>
        <FlexWrapper flexDirection="column" alignItems="center" gap="1rem" >
          <Typography type="h6" pt="s80"  >
            How to start the Anxietless program?
          </Typography>
          <Typography  >
            We have just sent out a letter to this email address:
          </Typography>
          <Typography fontSize="fs18" fontWeight="fw700"  >
            {email}
          </Typography>
          <Typography fontSize="fs14"  >
            (Please check your Spam folder, too)
          </Typography>
          <Box maxWidth='38.3125rem'>
          <Typography textAlign='center' >
            Start your Anxietless journey right away! P.s. If you ordered any
            additional services, check your email for a confirmation letter.
          </Typography>
          </Box>
          <ButtonPrimary onClick={startOverHandler}>
            <Link to='/'>
              Start Over!
            </Link>
          </ButtonPrimary>
        </FlexWrapper>
      </Container>
    </SectionWrapper>
  );
};
