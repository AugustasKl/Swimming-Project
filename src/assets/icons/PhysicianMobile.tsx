import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components/macro";

export const PhysicianMobile: React.FC = () => {
  return (
 

    <StaticImage
      src="./../images/CoachB.png"
      alt="physician"
      style={{ borderRadius: "3.125rem", width: "11rem", height: "5.75rem"  }}
     
      />
  
  );
};

