import React from "react";
import styled from "styled-components/macro";
import Slider from "react-slick";
import { mobile, useQuery } from "styles/theme";

interface SliderProps {
  dots?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  mobileSlidesToShow?: number;
  mobileSlidesToScroll?: number;
}

interface SliderStyles extends SliderProps {
  margin?: string;
}

export const SliderComponent: React.FC<SliderProps> = ({
  children,
  slidesToScroll,
  slidesToShow,
  mobileSlidesToShow,
  mobileSlidesToScroll,
  ...rest
}) => {
  const { isMobile } = useQuery();
  return (
    <SliderP>
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={isMobile ? mobileSlidesToShow : slidesToShow}
        slidesToScroll={isMobile ? mobileSlidesToScroll : slidesToScroll}
        {...rest}
      >
        {children}
      </Slider>
    </SliderP>
  );
};

const SliderP = styled.div<SliderStyles>`
  margin: 0 -1rem;

  @media ${mobile} {
  margin:0 auto;
   width: 100%;

  }
`;

