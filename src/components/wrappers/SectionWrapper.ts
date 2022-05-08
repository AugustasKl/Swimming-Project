import styled from "styled-components/macro";

import { Backgrounds, Colors, mobile, tablet, theme } from "styles/theme";

interface SectionWrapperStyles {
  minHeight?: string;
  background?: string;
  padding?: string;
  borderRadius?: string;
  backgroundImage?: string;
}

export const SectionWrapper = styled.section<SectionWrapperStyles>`
  position: relative;
  padding: ${({ padding }) => padding || "4rem"};
  background-image: ${({ backgroundImage }) => backgroundImage || ""};
  border-radius: ${({ borderRadius }) => borderRadius || ""};
  min-height: ${({ minHeight }) => minHeight || ""};
  background: ${({ background }) => (background ? background : "")};

  @media ${tablet} {
    padding: 3rem;
  }
  @media ${mobile} {
    padding: 2rem 0.5rem;
  }
`;
