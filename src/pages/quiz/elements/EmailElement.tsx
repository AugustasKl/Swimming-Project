import React, {useState } from "react";
import { answers, email } from "store/users/selectors";
import { Box, FlexWrapper, Input, Typography } from "components";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { DataAnalyzer } from ".";
import { mobile, theme } from "styles/theme";
import { postUser } from "store/store/thunks";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store/store/store";


interface EmailElementProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  value: string;
}


export const EmailElement: React.FC<EmailElementProps> = ({
  onChange,
  onClick,
  value,
}) => {
  
  const dispatch=useAppDispatch()
  const userEmail = useSelector(email);
  const userAnswers = useSelector(answers);
  const [initLoader, setInitLoader] = useState<boolean>(false);


  const submitHanlder = (event:React.FormEvent) => {
    event.preventDefault()
    const quizData:any = { userAnswers, userEmail };
    console.log(quizData)
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
        <ButtonPrimary disabled={!userEmail.includes('@')}>Submit</ButtonPrimary>
      </FlexWrapper>
      </Box>
    </StyledEmailElement>
  );
};

const StyledEmailElement = styled(FlexWrapper)`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  width: 35rem;
  
  padding-bottom: 2.5rem;
  margin: 5rem auto;
  
  box-shadow: 0rem 1rem 2rem rgba(57, 53, 60, 0.08);

  input {
    padding: 1rem;
    margin: 0.5rem 0;
    
    font-size: 1.125rem; 
    
    border:2px solid ${theme.colors.black};
    border-radius: 1rem;
    outline: none;
  }

  @media ${mobile} {
    width: 90%;
  }
`;
