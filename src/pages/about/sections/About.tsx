import {
  Box,
  Container,
  FlexWrapper,
  SectionWrapper,
  Typography,
} from "components";
import { ABOUT } from "constants/about";
import Lists from "listController/Lists";
import React from "react";
import { useQuery } from "styles/theme";
import AboutImage from "../elements/AboutImage";

export const About: React.FC = () => {
    const{isMobile}=useQuery()
  return (
    <SectionWrapper>
      <Container>
        <FlexWrapper justifyContent='center'gap={isMobile? '0rem' : '2rem'} >
          <AboutImage />
           
          <FlexWrapper maxWidth="28.5rem" flexDirection="column" justifyContent={{_:'flex-start', desktop:'center'}} gap="2rem">
              <Typography type="h6" textAlign="center">
                Get after it with Swimclub
              </Typography>
              <Typography textAlign="center">
                Excepteur sint occaecat cupidatat non proident sunt culpa qui
                officia deserunt mollit anim id est laborum. sed spiciatis unde
                mnis natus error Inventore.
              </Typography>
              <Lists columns="2" listItems={ABOUT} bullet="bullet" mobileColumns="2" />
          </FlexWrapper>
    
        </FlexWrapper>
      </Container>
    </SectionWrapper>
  );
};
