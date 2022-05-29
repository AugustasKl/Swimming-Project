import React from "react";
import { FlexWrapper } from "components";
import {
  initialState,
  setEmail,
  setPrice,
  setQuizAnswers,
} from "store/users/answers-slice";
import { Link } from "gatsby";
import { mobile, tablet, theme } from "styles/theme";
import styled from "styled-components/macro";
import { useAppDispatch } from "store/store/store";

export const NavigationOptions: React.FC = () => {
  const dispatch = useAppDispatch();
  
  const setInitialStateHandler = () => {
    sessionStorage.clear();
    dispatch(setQuizAnswers(initialState.quiz_answers));
    dispatch(setEmail(initialState.email));
    dispatch(setPrice(initialState.price));
  };

  return (
    <HeaderWrapper>
      <Link to="/" onClick={setInitialStateHandler}> Home</Link>
      <Link to="/about" onClick={setInitialStateHandler}>About</Link>
      <Link to="#">Contact</Link>
      <Link to="#">Services</Link>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled(FlexWrapper)`
  gap: 3rem;

  a {
    color: ${theme.colors.white};
    border-bottom: 3px solid transparent;
    font-size: ${theme.fontSizes.fs18};
    font-weight: ${theme.fontWeights.fw400};
    text-decoration: none;
  }
  a:hover {
    border-color: ${theme.colors.white};
  }

  @media ${tablet} {
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
  @media ${mobile} {
    margin-top: 1rem;
  }
`;
