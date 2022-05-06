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

const containerSmallProps = compose(color, position);

interface Styles<T> extends BackgroundColorProps<T>, PositionProps<T> {
    maxWidth?:string
 }

export const ContainerSmall = styled.div<Styles<Theme>>`
	margin: 0 auto;
    max-width: ${({maxWidth})=>maxWidth ||  '75rem'};
    padding: 0 1rem;
    @media ${tablet} {
    max-width: 100%;
    }
    && {
		${containerSmallProps};
	}
`;