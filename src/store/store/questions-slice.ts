import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QUIZ } from "constants/quiz";
import { fetchQuizAxios } from "./thunks";

export type QuestionsState = QuestionsPropsDDD[]
// [key: number]: QuestionsPropsDDD,
// QuestionsPropsDDD[]
// // email:string
// }



export interface QuestionsPropsDDD{
    id:number,
    answerType:string,
    questionText:string,
    answerOptions:string[]
}
// export interface AnswerProps{
//     id:number,
//     answer:string
// }

const initialState:QuestionsState= []


// {
    
//         id: null as unknown as number,
//         name:'',
//         type: '',
//         questions:null as unknown as string[],
//         answers:null as unknown as string[]
//       } 
    
// }

const questionsSlice=createSlice({
    name:'questions',
    initialState,
    reducers:{
        // setQuestions:(state, actions:PayloadAction<QuestionsPropsDDD[]>)=>{
        //     // console.log(actions.payload)
        //     state = actions.payload
        // }
        // setAnswer:(state, actions:PayloadAction<AnswerProps>)=>{
        //     // state[actions.payload.id].answers
        //     const anserExist=state[actions.payload.id].answers.indexOf(actions.payload.answer)
        //     console.log(anserExist)
        //     if(anserExist !== -1){
        //         state[actions.payload.id].answers.splice(anserExist, 1)
        //         return 
        //     }
        //     state[actions.payload.id].answers.push(actions.payload.answer)
        // },
        // setAnswers:(state, actions:PayloadAction<AnswerProps>)=>{
        //     // state[actions.payload.id].answers
        //     state[actions.payload.id].answers = [actions.payload.answer]
        // }
            // state[actions.payload.id].answers = actions.payload.answers

        
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuizAxios.fulfilled, (state, action) => {
            // Add user to the state array
            state.push(action.payload)
          })
    }
})

// export const {setQuestions}=questionsSlice.actions
export default questionsSlice