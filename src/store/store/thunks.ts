import axios, { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserStateAnswers } from "store/types";


const url ="https://62810b691020d8520584bcbd.mockapi.io/data/";

const urlAnnsw ="https://62810b691020d8520584bcbd.mockapi.io/answers";

const fetchQuestionsPrefix = "questions/GET_QUESTIONS";
const postAnswersPrefix = "answers/POST_ANSWERS";


export const fetchQuizAxios= createAsyncThunk(
  fetchQuestionsPrefix,
  async () => {
    try {
      const { data }: AxiosResponse = await axios.get(url);
      return data[0];
    } catch (e) {
      alert(e);
    }
  }
);
export const postUser= createAsyncThunk(
  postAnswersPrefix,
  async (quizData: UserStateAnswers ) => {
    try {
      const resp = await axios({
        method: "post",
        url: urlAnnsw,
        data: quizData,
      });
    } catch (e) {
        alert(e);
    }
  }
);

