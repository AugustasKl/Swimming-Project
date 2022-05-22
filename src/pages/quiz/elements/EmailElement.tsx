import { Box, FlexWrapper, Input, Typography } from "components";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { Link } from "gatsby";
import { Contact } from "pages/checkout/elements";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUser } from "store/store/thunks";
import styled from "styled-components/macro";
import { mobile } from "styles/theme";
import { DataAnalyzer, QuizTopElement } from ".";

interface EmailElementProps {
  onClick?: () => void;
  value: string;
  onChange: () => void;
}

export const EmailElement: React.FC<EmailElementProps> = ({
  onChange,
  onClick,
  value,
}) => {
  
  const dispatch=useDispatch()
  const email = useSelector((state: any) => state.answers.email);
  const answers = useSelector((state: any) => state.answers.quiz_answers);
  const [initLoader, setInitLoader] = useState<boolean>(false);

  const submitHanlder = (event:React.FormEvent) => {
    event.preventDefault()
    console.log("dadadad");
    const quizData = { answers, email };
    dispatch(postUser(quizData));
    setInitLoader(true)
  };


  if(initLoader){
    return(
     <DataAnalyzer/>
    )
  }
  const message=<Typography color="red" textAlign='center' fontSize="fs12" p='s0' mb='s8'>Email must include @ symbol</Typography>

  return (
    <StyledEmailElement>
      <Box
        backgroundColor="heroBackground"
        width="100%"
        textAlign="center"
        p="s16"
        mb="s40"
      >
        <Typography color="white" fontSize="fs18">
          Please leave your email address to us, so we can send a follow-up
          email about the information of sources and analyzed results to you.
          Thanks for your time.
        </Typography>
      </Box>
      <Form onSubmit={submitHanlder}>
      <Input  type="email" value={value} onChange={onChange} />
      {!value.includes('@') && message}
      <FlexWrapper gap="1.5rem">
        <ButtonPrimary onClick={onClick} type="button">Back</ButtonPrimary>
        <ButtonPrimary disabled={!email.includes('@')}>Submit</ButtonPrimary>
      </FlexWrapper>
      </Form>
    </StyledEmailElement>
  );
};

const StyledEmailElement = styled(FlexWrapper)`
  width: 35rem;
  margin: 5rem auto;
  box-shadow: 0px 16px 32px rgba(57, 53, 60, 0.08);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2.5rem;

  input {
    padding: 1rem;
    border-radius: 1rem;
    font-size: 1.125rem;
    margin: 0.5rem 0;
  }

  @media ${mobile} {
    width: 90%;
  }
`;
const Form =styled(Box).attrs({as:'form'})``