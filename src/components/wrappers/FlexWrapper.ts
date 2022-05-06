import styled from "styled-components/macro";
import { flexbox, FlexboxProps } from "styled-system";
import { Theme } from "styles/theme";

import { Box } from "./Box";

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
