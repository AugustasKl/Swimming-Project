import styled from 'styled-components/macro';
import {
   
    color,
    ColorProps,
    compose,
    position,
    PositionProps,
} from 'styled-system';
import { tablet } from 'styles/theme';
import { Theme } from 'styles/theme';


const containerProps = compose( color, position);

interface Styles<T> extends ColorProps<T>, PositionProps<T> { 
    padding?:string
}

export const Container = styled.div<Styles<Theme>>`
    max-width: 70rem;
	
    padding: ${({ padding }) => padding || "0 1rem"};
    margin: 0 auto;

    @media ${tablet} {
    max-width: 100%;
    }
    && {
		${containerProps};
	}
`;