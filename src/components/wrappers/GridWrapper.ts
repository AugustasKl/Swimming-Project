import { Box } from "./Box";
import { grid, GridProps } from "styled-system";
import styled from "styled-components/macro";
import { Theme } from "styles/theme";

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