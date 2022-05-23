import styled from 'styled-components/macro';
import {
    backgroundColor,
    BackgroundColorProps,
    color,
    ColorProps,
    compose,
    position,
    PositionProps,
} from 'styled-system';
import { tablet } from 'styles/theme';
import { Theme } from 'styles/theme';


const containerProps = compose(backgroundColor, color, position);

interface Styles<T> extends BackgroundColorProps<T>, ColorProps<T>, PositionProps<T> { }

export const Container = styled.div<Styles<Theme>>`
    max-width: 70rem;
	
    padding: 0 1rem;
    margin: 0 auto;

    @media ${tablet} {
    max-width: 100%;
    }
    && {
		${containerProps};
	}
`;