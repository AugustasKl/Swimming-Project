import { Box, Container, FlexWrapper, SectionWrapper, Typography } from "components";
import React from "react";
import { useSelector } from "react-redux";

export const SuccessText: React.FC = () => {
  const email=useSelector((state:any)=>state.answers.email)
  return (
    <SectionWrapper >
      <Container>
        <FlexWrapper flexDirection="column" alignItems="center" gap="1rem" >
          <Typography type="h6" pt="s80"  >
            How to start the Anxietless program?
          </Typography>
          <Typography  >
            We have just sent out a letter to this email address:
          </Typography>
          <Typography fontSize="fs18" fontWeight="fw700"  >
            {email}
          </Typography>
          <Typography fontSize="fs14"  >
            (Please check your Spam folder, too)
          </Typography>
          <Box maxWidth='38.3125rem'>
          <Typography textAlign='center' >
            Start your Anxietless journey right away! P.s. If you ordered any
            additional services, check your email for a confirmation letter.
          </Typography>
          </Box>
        </FlexWrapper>
      </Container>
    </SectionWrapper>
  );
};
