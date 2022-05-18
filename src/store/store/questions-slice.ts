import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QUIZ } from "constants/quiz";
import { fetchQuizAxios } from "./thunks";

export type QuestionsState = QuestionsPropsDDD[]
// export type QuestionsState = {
//     [key:number]:QuestionsPropsDDD
// }
// [key: number]: QuestionsPropsDDD,
// QuestionsPropsDDD[]
// // email:string
// }



export interface QuestionsPropsDDD{
  

        id:number,
        answerType:string,
        questionText:string,
        answerOptions:string[]
    }[]

// export interface AnswerProps{
//     id:number,
//     answer:string
// }

interface StateProps{
    data:object| null,
    kitas:string
}


const initialState:StateProps= {
// data:null as unknown as [],
data:null,
kitas:''

}
//     id: null,
//         answerType: "",
//         questionText: "",
//         answerOptions: []
// }[]
// const initialState:QuestionsState=
// {
//     id: null,
//     answerType: "",
//     questionText: "",
//     answerOptions: []
// }


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
        setQuestions:(state, action:PayloadAction<StateProps['kitas']>)=>{
            console.log(action.payload)
            state.kitas = action.payload
        }
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
        builder.addCase(fetchQuizAxios.fulfilled, (state, action:PayloadAction<StateProps['data']>) => {
            // console.log('lopas')
            // Add user to the state array
            // console.log(action.payload)
            // state.push(action.payload)
            // console.log(action.payload)
            if(action.payload){
                state.data=action.payload
                // console.log('dejau')
            }
            // console.log(initialState)
            //     console.log(state)
            //     // state[action.payload.id]=action.payload
            //     state = action.payload
                // state[actions.payload.id].answers = [actions.payload.answer]
        })
    }
    // })
    // }
})

export const {setQuestions}=questionsSlice.actions
export default questionsSlice