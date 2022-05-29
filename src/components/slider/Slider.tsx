import React from "react";
import { mobile, tablet, useQuery } from "styles/theme";
import Slider from "react-slick";
import styled from "styled-components/macro";

interface SliderProps {
  dots?: boolean;
  infinite?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  speed?: number;
  tabletSlidesToScroll?: number;
  tabletSlidesToShow?: number;
}


export const SliderComponent: React.FC<SliderProps> = ({
  children,
  slidesToScroll,
  slidesToShow,
  tabletSlidesToScroll,
  tabletSlidesToShow,
  ...rest
}) => {
  const { isTablet } = useQuery();
  return (
    <SliderP>
      <Slider
        dots={true}
        infinite={true}
        slidesToScroll={isTablet ? tabletSlidesToScroll : slidesToScroll}
        slidesToShow={isTablet ? tabletSlidesToScroll : slidesToShow}
        speed={500}
        {...rest}
      >
        {children}
      </Slider>
    </SliderP>
  );
};

const SliderP = styled.div`
  @media ${tablet} {
    width: 100%;
    margin:0 auto;
  } 
  
  @media ${mobile} {
    gap: 1rem;
    width: 100%;
  }
`;

