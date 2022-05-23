import styled from "styled-components/macro";

import { mobile, tablet } from "styles/theme";

interface SectionWrapperStyles {
  background?: string;
  backgroundImage?: string;
  borderRadius?: string;
  minHeight?: string;
  padding?: string;
}

export const SectionWrapper = styled.section<SectionWrapperStyles>`
  position: relative;
  
  min-height: ${({ minHeight }) => minHeight || ""};

  background: ${({ background }) => (background ? background : "")};
  background-image: ${({ backgroundImage }) => backgroundImage || ""};
  border-radius: ${({ borderRadius }) => borderRadius || ""};
  padding: ${({ padding }) => padding || "4rem"};

  @media ${tablet} {
    padding: 3rem;
  }
  @media ${mobile} {
    padding: 2rem 0.5rem;
  }
`;
