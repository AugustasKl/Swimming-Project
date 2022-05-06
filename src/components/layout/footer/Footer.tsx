import Logo from "assets/icons/Logo";
import { Box, FlexWrapper, Image, Typography } from "components";
import { Link } from "gatsby";
import React from "react";
import { useQuery } from "styles/theme";
// import HomeNav from "../navigation/HomeNav";
import NavigationOptions from "../navigation/NavigationOptions";
// import SocialItems from "../navigation/SocialItems";
import SocialLinks from "../navigation/SocialLinks";

const Footer: React.FC = () => {
  const { isMobile } = useQuery();
  return (
    <>
      <FlexWrapper
        justifyContent="space-around"
        alignItems="center"
        borderBottom="1px solid #ccc"
        pb="s40"
        flexDirection={isMobile ? "column" : "row"}
        gap={isMobile? "1rem": ""}
      >
        <FlexWrapper
          flexDirection="column"
          gap="0.5rem"
          alignItems={isMobile ? "center" : "flex-start"}
        >
          <Logo/>
          <Typography>
            Lorem ipsum dolor sit amet, consectetuipisicing elit,{" "}
          </Typography>
        </FlexWrapper>

        <NavigationOptions />
      </FlexWrapper>

      <FlexWrapper alignItems="center" justifyContent="space-evenly" flexDirection={isMobile? "column": "row"}>
        <Typography color="radioColor" py="s40" textAlign="center" >
          © 2020 Flowbase. Powered by Webflow
        </Typography>

        <FlexWrapper justifyContent={isMobile ? "center": "flex-end"} alignItems= {isMobile? "center" :"flex-end"} gap="1rem" >
          <SocialLinks/>
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
};

export default Footer;
