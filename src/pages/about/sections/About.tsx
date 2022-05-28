import React from "react";
import { ABOUT } from "constants/about";
import { AboutImage } from "assets/icons";
import {Container, FlexWrapper, Lists, SectionWrapper, Typography} from "components";
import { useQuery } from "styles/theme";

export const About: React.FC = () => {
    const{isMobile,isTablet}=useQuery()
  return (
    <SectionWrapper padding="1.5rem 0 0">
      <Container>
        <FlexWrapper justifyContent='center' gap={isMobile? '0rem' : '2rem'}>
         {!isTablet && <AboutImage/>  }   
          <FlexWrapper flexDirection="column" justifyContent={{_:'flex-start', desktop:'center'}} gap="2rem" maxWidth="28.5rem">
              <Typography textAlign="center" type="h6" >
                Get after it with Swimclub!
              </Typography>
              <Typography textAlign="center">
              We are one of the top swimming clubs in the country and have an impressive track record at all levels of competition from junior meets through to the Olympics. Our aim is to inspire and motivate all of our swimmers to be the very best they can be to fulfil their potential and to follow their dreams.
              </Typography>
              <Lists columns="2" bullet="bullet" listItems={ABOUT} mobileColumns="2" />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </SectionWrapper>
  );
};

