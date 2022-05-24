import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuizAnswers, UserStateAnswers } from "../types";

const initialState: UserStateAnswers = {
  quiz_answers: {
    exercise_type: [],
    gender: "",
    health_problems: [],
    last_3_months: "",
    personality: "",
    reason: "",
    swim_meters: "",
    training_frequency: "",
  },
  email: "",
};

const answersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    setQuizAnswers: (state, actions: PayloadAction<Partial<QuizAnswers>>) => {
      state.quiz_answers = {
        ...state.quiz_answers,
        ...actions.payload,
      };
    },
    setEmail: (state, actions: PayloadAction<string>) => {
      state.email = actions.payload;
    },
  },
});

export const { setQuizAnswers, setEmail } = answersSlice.actions;
export default answersSlice;
