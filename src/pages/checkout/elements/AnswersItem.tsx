import React from "react";
import {Typography } from "components";


export const AnswersItem: React.FC<{ specificAnswer: string }> = ({specificAnswer}) => (
      <Typography color="white" fontSize={{_:"fs14",tablet:'fs16', desktop:'fs16'}} >{specificAnswer}</Typography>
  );


