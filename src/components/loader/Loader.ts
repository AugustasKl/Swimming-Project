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
  width: 1.5rem;
  height: 1.5rem;

  animation: ${rotate360} 1s linear infinite;
  background: transparent;
  border-bottom: 2.5rem solid ${theme.colors.blue};
  border-left: 2.5rem solid ${theme.colors.backgroundSecondary};
  border-radius: 50%;
  border-right: 2.5rem solid ${theme.colors.mainBackground};
  border-top: 2.5rem solid blue;
  transform: translateZ(0);
`;



 