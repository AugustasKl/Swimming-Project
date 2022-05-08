import { FlexWrapper, Typography } from "components";
import { CommunityProps } from "constants/community";
import React from "react";
import { useQuery } from "styles/theme";

export const CommunityItem: React.FC<CommunityProps> = ({
  percentage,
  text,
}) => {
    const {isMobile}=useQuery()
  return (
    <FlexWrapper
      flexDirection={{ _: "row", desktop: "column" }}
      alignItems='center'
      border="1px dashed #000"
      paddingY="s16"
      paddingX="s8"
      borderRadius="r10"
      gap={isMobile? '2rem': '0rem'}
    >
      <Typography fontSize="fs40" fontWeight="fw600">
        {percentage}%
      </Typography>
      <Typography fontSize="fs14" color="radioColor">
        {text}
      </Typography>
    </FlexWrapper>
  );
};
