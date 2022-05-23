import React from "react";
import { FlexWrapper, Image } from "components";
import { useQuery } from "styles/theme";

export const HeroImage: React.FC = () => {
    const{isMobile}=useQuery()
  return (
    <FlexWrapper opacity='0.8'>
      {isMobile? <Image src="swimmingMobile" alt="swimming freestyle" /> :<Image src="swimmingDesktop" alt="swimming mobile freestyle" />}
    </FlexWrapper>
  );
};

