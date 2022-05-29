import React from "react";
import { CommunityProps } from "constants/community";
import { FlexWrapper, Typography } from "components";
import { theme, useQuery } from "styles/theme";

export const CommunityItem: React.FC<CommunityProps> = ({
  percentage,
  text,
}) => {
  const { isTablet } = useQuery();
  return (
    <FlexWrapper
      alignItems="center"
      border={`1px dashed ${theme.colors.radioColor}`}
      borderRadius="r10"
      flexDirection={{ _: "row", desktop: "column" }}
      gap={isTablet ? "1.25rem" : "0rem"}
      paddingX="s8"
      paddingY="s16"
    >
      <Typography fontSize="fs40" fontWeight="fw600">
        {percentage}%
      </Typography>
      <Typography color="radioColor" fontSize="fs14">
        {text}
      </Typography>
    </FlexWrapper>
  );
};
