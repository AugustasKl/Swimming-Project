import styled from "styled-components/macro";
import { BorderRadius, Colors, theme } from "../../styles/theme";

interface ElementWrapperStyles {
  border?: string;
  backgroundColor?: Colors;
  padding?: string;
  margin?: string;
  borderRadius?: BorderRadius ;
  position?: string;
  width?: string;
  background?:string;
}

export const ElementWrapper = styled.div<ElementWrapperStyles>`
  position: ${({ position }) => position || ""};
  border: ${({ border, theme }) => (border ? `1px solid ${theme.colors}` : "")};
  margin: ${({ margin }) => margin || ""};
  padding: ${({ padding }) => padding || ""};
	/* border-radius: ${({borderRadius})=> borderRadius || `${theme.radii.r20}`}; */
	border-radius: ${({ theme, borderRadius }) =>
		borderRadius ? theme.radii[borderRadius] : theme.radii.r20};
  background-color: ${({ backgroundColor }) => backgroundColor || ""};
  width: ${({ width }) => width || "100%"};
  background: ${({ background }) => background || "100%"};

`;
