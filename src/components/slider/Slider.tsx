import React from "react";
import { mobile, useQuery } from "styles/theme";
import Slider from "react-slick";
import styled from "styled-components/macro";

interface SliderProps {
  dots?: boolean;
  infinite?: boolean;
  mobileSlidesToScroll?: number;
  mobileSlidesToShow?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  speed?: number;
}


export const SliderComponent: React.FC<SliderProps> = ({
  children,
  mobileSlidesToScroll,
  mobileSlidesToShow,
  slidesToScroll,
  slidesToShow,
  ...rest
}) => {
  const { isMobile } = useQuery();
  return (
    <SliderP>
      <Slider
        dots={true}
        infinite={true}
        slidesToScroll={isMobile ? mobileSlidesToScroll : slidesToScroll}
        slidesToShow={isMobile ? mobileSlidesToShow : slidesToShow}
        speed={500}
        {...rest}
      >
        {children}
      </Slider>
    </SliderP>
  );
};

const SliderP = styled.div`
  margin: 0 -1rem;

  @media ${mobile} {
  margin:0 auto;
   width: 100%;

  }
`;

