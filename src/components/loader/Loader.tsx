import styled, { keyframes } from "styled-components/macro";
import { theme } from "styles/theme";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 2.5rem solid blue;
  border-right: 2.5rem solid ${theme.colors.mainBackground};
  border-bottom: 2.5rem solid ${theme.colors.blue};
  border-left: 2.5rem solid ${theme.colors.backgroundSecondary};
  background: transparent;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
`;



 