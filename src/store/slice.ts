import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QUIZ } from "constants/quiz";

export interface QuestionsState{
[key: number]: QuestionsPropsDDD,
// email:string
}



export interface QuestionsPropsDDD{
    id:number,
    answerType:string,
    questionText:string,
    answerOptions:string[]
    answers:string[]
}
// export interface AnswerProps{
//     id:number,
//     answer:string
// }

export interface AnswerProps{
        id:number,
        answer:string
    }
const initialState:QuestionsState= QUIZ


// {
    
//         id: null as unknown as number,
//         name:'',
//         type: '',
//         questions:null as unknown as string[],
//         answers:null as unknown as string[]
//       } 
    
// }

const answersSlice=createSlice({
    name:'answers',
    initialState,
    reducers:{
        // setQuestions:(state, actions:PayloadAction<QuestionsPropsDDD>)=>{
        //     // state.questions=actions.payload
        // }
        setAnswer:(state, actions:PayloadAction<AnswerProps>)=>{
            // state[actions.payload.id].answers
            const anserExist=state[actions.payload.id].answers.indexOf(actions.payload.answer)
            console.log(anserExist)
            if(anserExist !== -1){
                state[actions.payload.id].answers.splice(anserExist, 1)
                return 
            }
            state[actions.payload.id].answers.push(actions.payload.answer)
        },
        setAnswers:(state, actions:PayloadAction<AnswerProps>)=>{
            // state[actions.payload.id].answers
            state[actions.payload.id].answers = [actions.payload.answer]
        }
            // state[actions.payload.id].answers = actions.payload.answers

        
        
    }
})

export const {setAnswer,setAnswers}=answersSlice.actions
export default answersSlice