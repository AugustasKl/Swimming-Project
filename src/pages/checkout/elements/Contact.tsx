import React from "react";
import { Box, FlexWrapper, Image, Typography } from "components";
import { CONTACT } from "constants/contact";
import { mobile} from "styles/theme";
import styled from "styled-components/macro";


export const Contact: React.FC = () => (
    <ContacStyles>
      {CONTACT.map(({ id, text, contact, tag }) => (
        <FlexWrapper gap="0.5rem" key={id}>
          <Image src={tag} alt={tag} height="3.5rem" width="3.5rem" />
          <Box>
            <Typography fontWeight='fw600'>{text}</Typography>
            <Typography color='green'>{contact}</Typography>
          </Box>
          </FlexWrapper>
      ))}
    </ContacStyles>
  );

  const ContacStyles=styled(FlexWrapper)`
    align-items: center;
    flex-direction: row;
    justify-content: center;
    gap:2rem;


    @media ${mobile} {
      align-items: flex-start;
      flex-direction: column;
      
      width: 60%;
      
      margin: 0 auto;
      gap: 0.5rem;
  }

  `
