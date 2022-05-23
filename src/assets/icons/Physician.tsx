import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components/macro";

export const Physician: React.FC = () => {
  return (
 

    <StaticImage
      src="./../images/CoachB.png"
      alt="physician"
      style={{ borderRadius: "3.75rem", width: "8rem", height: "5rem" }}
     
      />
  
  );
};

