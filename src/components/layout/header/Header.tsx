import React from "react";
import { Box, FlexWrapper, NavigationOptions } from "components";
import { Logo } from "assets/icons";
import { useQuery } from "styles/theme";


export const Header: React.FC = () => {
  const { isMobile } = useQuery();
  return (
    <Box as='header' backgroundColor='mainBackground'>
      <FlexWrapper
        alignItems="center"
        flexDirection={{ _: "column", desktop: "row" }}
        gap={isMobile ? "1rem" : "0rem"}
        justifyContent="space-between"
        paddingX={{ _: "s8", desktop: "s160" }}
        paddingY={{ _: "s32", tablet:'s16', desktop: "s24" }}
      >
        <Logo />
        <NavigationOptions />     
      </FlexWrapper>
    </Box>
  );
};




