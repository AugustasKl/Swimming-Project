import { Input, Typography } from "components";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { theme } from "styles/theme";
import { fetchQuizAxios } from "./QuizAxios";

export const QuizQuestionItem: React.FC<{ id: number; answers: string;question: string; onSelectAnswer:( answers:string, id:number, question:string)=>void }> = (props) => {
const{answers, id, question}=props



  return (
      
    <Typography
      border={
          id === id
          ? `2px solid ${theme.colors.black}`
          : "2px solid transparent"
        }
        // onClick={()=> questionsHandler(id, answers,question)}
        onClick={()=>props.onSelectAnswer(answers, id, question )}
        >
      {answers}
    </Typography>
    //   <Input type='text' id="text">{answers}</Input>
  );
};
