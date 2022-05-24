import React from "react";
import { Image } from "components";


export const UniversalImages: React.FC<{
  height?: string;
  tag: string;
  width?: string;
}> = ({ height, tag,  width }) => (
      <Image src={tag} alt={tag} height={height} width={width} />
  );



