import { UniversalImages } from "assets/icons";
import { Box, ContentWrapper, FlexWrapper, Typography } from "components";
import { CONTACT } from "constants/contact";
import React from "react";

export const Contact: React.FC = () => {
  return (
    <FlexWrapper justifyContent="center" gap="1.5rem" alignItems="center" pt='s8'>
      {CONTACT.map(({ id, text, contact, tag }) => (
          <FlexWrapper gap="0.5rem">
          <UniversalImages tag={tag} height="3.5rem" width="3.5rem" />
          <Box>
            <Typography fontWeight='fw600'>{text}</Typography>
            <Typography color='green'>{contact}</Typography>
          </Box>
          </FlexWrapper>
      ))}
    </FlexWrapper>
  );
};
