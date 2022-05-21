import { Box, FlexWrapper, Input, Typography } from "components";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { Link } from "gatsby";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import { mobile } from "styles/theme";
import { QuizTopElement } from ".";

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

      <Input type="email" value={value} onChange={onChange} />
      {/* {!value.includes('@') && <Typography color="red" fontSize="fs12" p='s0' mb='s8'>Email must include @ symbol</Typography>} */}
      <FlexWrapper gap="1.5rem">
        <ButtonPrimary onClick={onClick}>Back</ButtonPrimary>
        {/* <ButtonPrimary onClick={onClick} disabled={!value.includes('@')}>Submit</ButtonPrimary> */}
        <ButtonPrimary onClick={onClick}>
          <Link to='/checkout'>
          Submit
          </Link>
          </ButtonPrimary>
      </FlexWrapper>
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
  a{
    text-decoration: none;
    color:white;
  }
  @media ${mobile} {
    width: 90%;
  }
`;
