import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const Check: React.FC = () => (
  <StaticImage
    src="./../svg/complete.svg"
    alt="complete logo"
    style={{ width: "2rem", height: "1.9rem", marginRight: "1rem" }}
  />
);
