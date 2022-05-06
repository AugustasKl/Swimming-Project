import { css } from "styled-components/macro";

import { tablet, Theme } from "styles/theme";
import { TextType } from "./Typography";

export const applyTextType = (type: TextType, theme: Theme) => {
  switch (type) {
    case "h1":
      return css`
        font-weight: ${theme.typography.h1.fontWeight};
        font-size: ${theme.typography.h1.fonstSize};
        line-height: ${theme.typography.h1.lineHeight};
        color: ${theme.typography.h1.color};
        @media ${tablet} {
          line-height: ${theme.typography.h1.lineHeightMobile};
          font-size: ${theme.typography.h1.fontSizeMobile};
        }
      `;

    case "h2":
      return css`
        font-weight: ${theme.typography.h2.fontWeight};
        font-size: ${theme.typography.h2.fonstSize};
        line-height: ${theme.typography.h2.lineHeight};
        color: ${theme.typography.h2.color};
        @media ${tablet} {
          line-height: ${theme.typography.h2.lineHeightMobile};
          font-size: ${theme.typography.h2.fontSizeMobile};
        }
      `;
    case "h3":
      return css`
        font-weight: ${theme.typography.h3.fontWeight};
        font-size: ${theme.typography.h3.fonstSize};
        line-height: ${theme.typography.h3.lineHeight};
        color: ${theme.typography.h3.color};
        @media ${tablet} {
          line-height: ${theme.typography.h3.lineHeightMobile};
          font-size: ${theme.typography.h3.fontSizeMobile};
        }
      `;
    case "h4":
      return css`
        font-weight: ${theme.typography.h4.fontWeight};
        font-size: ${theme.typography.h4.fonstSize};
        line-height: ${theme.typography.h4.lineHeight};
        color: ${theme.typography.h4.color};
        @media ${tablet} {
          line-height: ${theme.typography.h4.lineHeightMobile};
          font-size: ${theme.typography.h4.fontSizeMobile};
        }
      `;
    case "h5":
      return css`
        font-weight: ${theme.typography.h5.fontWeight};
        font-size: ${theme.typography.h5.fonstSize};
        line-height: ${theme.typography.h5.lineHeight};
        color: ${theme.typography.h5.color};
        @media ${tablet} {
          line-height: ${theme.typography.h5.lineHeightMobile};
          font-size: ${theme.typography.h5.fontSizeMobile};
        }
      `;
    case "h6":
      return css`
        font-weight: ${theme.typography.h6.fontWeight};
        font-size: ${theme.typography.h6.fonstSize};
        line-height: ${theme.typography.h6.lineHeight};
        color: ${theme.typography.h6.color};
        @media ${tablet} {
          line-height: ${theme.typography.h6.lineHeightMobile};
          font-size: ${theme.typography.h6.fontSizeMobile};
        }
      `;
  }
};
