import React from "react";
import { Box, FlexWrapper, Typography } from "components";
import { CONTACT } from "constants/contact";
import { UniversalImages } from "assets/icons";

export const Contact: React.FC = () => (
    <FlexWrapper alignItems="center" gap="1.5rem" justifyContent="center"  pt='s8'>
      {CONTACT.map(({ id, text, contact, tag }) => (
          <FlexWrapper gap="0.5rem" key={id}>
          <UniversalImages tag={tag} height="3.5rem" width="3.5rem" />
          <Box>
            <Typography fontWeight='fw600'>{text}</Typography>
            <Typography color='green'>{contact}</Typography>
          </Box>
          </FlexWrapper>
      ))}
    </FlexWrapper>
  );
