import { AnyAction, CombinedState, combineReducers } from "@reduxjs/toolkit";
import answersSlice from "./users/answers-slice";
import questionsSlice from "./users/questions-slice";
import { UserStateAnswers, UserStateQuestions } from "./types";

export interface RootState {
  answers: UserStateAnswers;
  questions: UserStateQuestions;
}

const combinedReducer = combineReducers<CombinedState<RootState>>({
  questions: questionsSlice.reducer,
  answers: answersSlice.reducer,
});

export const rootReducer = (state: any, action: AnyAction) =>
  combinedReducer(state, action);
