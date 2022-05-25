import { AppState } from "../types";



export const answers = ((state: AppState) => state.answers.quiz_answers);
export const answerReason = ((state: AppState) => state.answers.quiz_answers.reason);
export const email = ((state: AppState) => state.answers.email);
export const price =((state: AppState)=>state.answers.price)
export const questions = ((state: AppState) => state.questions.data);


