import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchQuizAxios } from "../store/thunks";
import { UserStateQuestions } from "store/types";

const initialState: UserStateQuestions = {
  data: null,
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchQuizAxios.fulfilled,
      (state, action: PayloadAction<UserStateQuestions["data"]>) => {
        if (action.payload) {
          state.data = action.payload;
        }
      }
    );
  },
});

export default questionsSlice;
