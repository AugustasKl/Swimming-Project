import { rootReducer } from "./reducers";

export interface QuizAnswers{
    exercise_type:string[],
    gender:string,
    health_problems:string[]
    last_3_months:string,
    personality:string
    reason:string,
    swim_meters:string,
    training_frequency:string,
  }


export interface UserStateAnswers{
    email:string;
    price:number;
    quiz_answers:QuizAnswers;

}
export interface UserStateQuestions{
    data:object|null
}

export type AppState = ReturnType<typeof rootReducer>;