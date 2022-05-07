import styled from 'styled-components/macro';
import {
    color,
    BackgroundColorProps,
    compose,
    position,
    PositionProps,
} from 'styled-system';
import { tablet } from 'styles/theme';

import { Theme } from 'styles/theme';

const containerProps = compose(color, position);

interface Styles<T> extends BackgroundColorProps<T>, PositionProps<T> { }

export const Container = styled.div<Styles<Theme>>`
	margin: 0 auto;
    max-width: 70rem;
    padding: 0 1rem;
    @media ${tablet} {
    max-width: 100%;
    }
    && {
		${containerProps};
	}
`;