import React from "react";
import {Typography } from "components";


export const AnswersItem: React.FC<{ specificAnswer: string }> = ({specificAnswer}) => (
      <Typography color="white">{specificAnswer}</Typography>
  );


