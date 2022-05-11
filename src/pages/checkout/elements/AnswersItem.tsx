import { Box, Typography } from "components";
import React from "react";
import styled from "styled-components/macro";

export const AnswersItem: React.FC<{ specificAnswer?: string }> = ({
  specificAnswer,
}) => {
  return (
      <Typography color="white">{specificAnswer}</Typography>
  
  );
};

