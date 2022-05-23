import {
    color,
    ColorProps,
    compose,
    border,
    BorderProps,
    BackgroundColorProps,
    position,
    PositionProps,
} from 'styled-system';
import styled from 'styled-components/macro';
import { tablet } from 'styles/theme';
import { Theme } from 'styles/theme';

const containerSmallProps = compose(color,border, position);

interface Styles<T> extends BackgroundColorProps<T>, BorderProps<T>, ColorProps<T>, PositionProps<T> {
    maxWidth?:string
    boder?:string
 }

export const ContainerSmall = styled.div<Styles<Theme>>`
	margin: 0 auto;
    max-width: ${({maxWidth})=>maxWidth ||  '75rem'};
    border: ${({border})=>border ||  ''};
    padding: 0 1rem;
    @media ${tablet} {
    max-width: 100%;
    }
    && {
		${containerSmallProps};
	}
`;