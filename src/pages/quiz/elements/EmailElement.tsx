import React, {useState } from "react";
import { Box, FlexWrapper, Input, Typography } from "components";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { DataAnalyzer } from ".";
import { mobile } from "styles/theme";
import { postUser } from "store/store/thunks";
import styled from "styled-components/macro";
import { useDispatch, useSelector } from "react-redux";

interface EmailElementProps {
  onChange: () => void;
  onClick?: () => void;
  value: string;
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
    const quizData = { answers, email };
    dispatch(postUser(quizData));
    setInitLoader(true)
  };


  if(initLoader){
    return(
     <DataAnalyzer/>
    )
  }
  const message=<Typography color="red" fontSize="fs12" mb='s8' p='s0' textAlign='center'>Email must include @ symbol</Typography>

  return (
    <StyledEmailElement>
      <Box
        backgroundColor="heroBackground"
        mb="s40"
        p="s16"
        textAlign="center"
        width="100%"
      >
        <Typography color="white" fontSize="fs18">
          Please leave your email address to us, so we can send a follow-up
          email about the information of sources and analyzed results to you.
          Thanks for your time.
        </Typography>
      </Box>
      <Box as='form' onSubmit={submitHanlder}>
      <Input onChange={onChange} type="email" value={value}  />
      {!value.includes('@') && message}
      <FlexWrapper gap="1.5rem">
        <ButtonPrimary onClick={onClick} type="button">Back</ButtonPrimary>
        <ButtonPrimary disabled={!email.includes('@')}>Submit</ButtonPrimary>
      </FlexWrapper>
      </Box>
    </StyledEmailElement>
  );
};

const StyledEmailElement = styled(FlexWrapper)`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  padding-bottom: 2.5rem;
  margin: 5rem auto;
  
  width: 35rem;
  
  box-shadow: 0px 16px 32px rgba(57, 53, 60, 0.08);

  input {
    padding: 1rem;
    margin: 0.5rem 0;
    
    font-size: 1.125rem; 
    
    border-radius: 1rem;
  }

  @media ${mobile} {
    width: 90%;
  }
`;
