import { Box } from "./Box";
import { flexbox, FlexboxProps } from "styled-system";
import styled from "styled-components/macro";
import { Theme } from "styles/theme";


interface GapProps{
  gap?:string;
}

export const FlexWrapper = styled(Box) <FlexboxProps<Theme> & GapProps>`
  display: flex;

  && {
    ${flexbox};
    gap: ${space=>space.gap};
  }
`;
