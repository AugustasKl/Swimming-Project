import React, { ReactNode } from "react";
import { applyTextType } from "./TypographyHelpers";
import { BorderRadius, Colors, Theme } from "styles/theme";
import {
  compose,
  fontWeight,
  lineHeight,
  space,
  SpaceProps,
  textAlign,
  TypographyProps,
  textStyle,
  typography,
} from "styled-system";
import { Property } from "csstype";
import styled from "styled-components/macro";



export type TextType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body16"
  | "caption12"
  | "span";

export enum TextTag {
  "h1" = "h1",
  "h2" = "h2",
  "h3" = "h3",
  "h4" = "h4",
  "h5" = "h5",
  "h6" = "h6",
  "span" = "span",
  "body16" = "p",
  "caption12" = "p",
}

type AsAttributeType = string | React.ComponentType;

const typographyProperties = compose(
  textAlign,
  fontWeight,
  lineHeight,
  textStyle,
  typography,
  space
);

export interface TextProps extends SpaceProps<Theme>, TypographyProps<Theme> {
  display?: string;
  border?: string;
  borderBottom?: string;
  borderRadius?: BorderRadius;
  color?: Colors;
  children: ReactNode;
  textDecoration?: Property.TextDecoration;
  textTransform?: Property.TextTransform;
  onClick?: () => void;
  type?: TextType;
}

export const Typography: React.FC<TextProps> = ({
  children,
  type = "body16",
  ...props
}) => {
  const as = TextTag[type] as AsAttributeType;

  return (
    <Text as={as} type={type} {...props}>
      {children}
    </Text>
  );
};

const Text = styled.p<TextProps>`
  border: ${({ border }) => border || ""};
  border-bottom: ${({ borderBottom }) => borderBottom || ""};
  border-radius: ${({ theme, borderRadius }) =>borderRadius ? theme.radii[borderRadius] : theme.radii.r0};
  ${({ type, theme }) => type && applyTextType(type as TextType, theme as Theme)};
  color: ${({ theme, color }) =>color ? theme.colors[color] : theme.colors.black};
  display: ${({ display }) => display || ""};
  line-height: ${({ lineHeight }) => lineHeight || ""};
  padding: ${({ padding }) => padding || ""};
  text-transform: ${({ textTransform }) => textTransform || ""};
  text-decoration: ${({ textDecoration }) => textDecoration || ""};

  && {
    ${typographyProperties}
  }
`;
