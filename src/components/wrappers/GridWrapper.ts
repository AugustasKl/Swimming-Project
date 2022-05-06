import styled from "styled-components/macro";
import { grid, GridProps } from "styled-system";
import { Theme } from "styles/theme";

import { Box } from "./Box";
interface GapProps{
  gap?:string;
}

export const GridWrapper = styled(Box) <GridProps<Theme> & GapProps>`
  display: grid;
  && {
    gap: ${space=>space.gap};
    ${grid};
  }
`;