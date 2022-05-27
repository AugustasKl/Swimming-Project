import React from "react";
import { Box, FlexWrapper } from "components";
import { Logo } from "assets/icons";
import { useQuery } from "styles/theme";
import { NavigationOptions } from "..";

export const Header: React.FC = () => {
  const { isMobile } = useQuery();
  return (
    <Box as='header' backgroundColor='mainBackground'>
      <FlexWrapper
        alignItems="center"
        flexDirection={{ _: "column", desktop: "row" }}
        gap={isMobile ? "1rem" : "0rem"}
        justifyContent="space-between"
        paddingY={{ _: "s32", desktop: "s24" }}
        paddingX={{ _: "s8", desktop: "s160" }}
      >
        <Logo />
        <NavigationOptions />     
      </FlexWrapper>
    </Box>
  );
};




