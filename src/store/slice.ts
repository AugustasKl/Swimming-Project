import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QUIZ } from "constants/quiz";
import { fetchQuizAxios } from "./store/thunks";

export interface QuestionsState {
  // [key: number]: QuestionsPropsDDD;
  // email:string
  quiz_answers:QuizAnswers
}

export interface QuestionsPropsDDD {
  id: number;
  answerType: string;
  questionText: string;
  answerOptions: string[];
  answers: string[];
}
// export interface AnswerProps{
//     id:number,
//     answer:string
// }

export interface AnswerProps {
  answers: {
    id: any;
    answer: object[];
    // answer: obj]ect[];
  }
}

interface StateProps {
//   data: object[];
//   kitas: string;
  id:any,
  // answers: answerProps[];
  answers: answerProps;
}
interface answerProps {
  
        id: any;
        answer: any;
    }[]


export interface QuizAnswers{
lololol: string[],
vardas: string
  
}


const initialState: QuestionsState = {
  
  quiz_answers:{
lololol: [],
vardas:''
  }
};



const answersSlice = createSlice({   
  name: "answers",
  initialState,
  reducers: {
  setQuizAnswers: (state, actions:PayloadAction<Partial<QuizAnswers>>) => {
    state.quiz_answers = {
      ...state.quiz_answers,
      ...actions.payload,
    };
  },
//   setAnswer:(state, actions:PayloadAction<AnswerProps>)=>{
//     console.log(actions.payload)
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
//     // console.log(actions)
//     // state[actions.payload.id].answers
//     state[actions.payload.id].answers = [actions.payload.answer]
// }


  },

 
});

export const { setQuizAnswers}=answersSlice.actions
export default answersSlice;


// const userAnswersSelector=(state:AppState)=>state.user.answers
// const quizAnswersSelector=(key:keyof QuizAnswers)=>createSelector(userAnswersSelector,quiz_answers=>{
//   if(quiz_answers && key){
//     return quiz_answers[key as keyof QuizAnswers]
//   }else {
//     return null 
//   }
// })
// // import {SingleQuizAnswer} from typings/user
const onSelect =  (answer:SingleQuizAnswer)=>{
  // if(question)
  dispatch(setQuizAnswers(answer))
}

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { QUIZ } from "constants/quiz";
// import { fetchQuizAxios } from "./store/thunks";

// export interface QuestionsState {
//   // [key: number]: QuestionsPropsDDD;
//   // email:string
//   quiz_answers:QuizAnswers
// }

// export interface QuestionsPropsDDD {
//   id: number;
//   answerType: string;
//   questionText: string;
//   answerOptions: string[];
//   answers: string[];
// }
// // export interface AnswerProps{
// //     id:number,
// //     answer:string
// // }

// export interface AnswerProps {
//   answers: {
//     id: any;
//     answer: object[];
//     // answer: obj]ect[];
//   }
// }

// interface StateProps {
// //   data: object[];
// //   kitas: string;
//   id:any,
//   // answers: answerProps[];
//   answers: answerProps;
// }
// interface answerProps {
  
//         id: any;
//         answer: any;
//     }[]


// export interface QuizAnswers{
//   question1:string,
//   question2:string,
//   question3:string[],
//   question4:string,
  
// }


// // const initialState:QuestionsState=[]
// // // {
// // //     // data:null as unknown as [],
// // //     data:[],
// // //     kitas:'',
// // //     answers:[]
// // //     }

// const initialState: QuestionsState = {
  
//   quiz_answers:{
//     question1:'',
//     question2:'',
//     question3:[],
//     question4:''
//   }
// };

// // {

// //         id: null as unknown as number,
// //         name:'',
// //         type: '',
// //         questions:null as unknown as string[],
// //         answers:null as unknown as string[]
// //       }

// // }

// const answersSlice = createSlice({
//   name: "answers",
//   initialState,
//   // reducers:{
//   //     // setQuestions:(state, actions:PayloadAction<QuestionsPropsDDD>)=>{
//   //     //     state=actions.payload
//   //     // },
//   //     setAnswer:(state, actions:PayloadAction<AnswerProps>)=>{
//   //         console.log(initialState)
//   //         const clickItem=actions.payload
//   //         const clickedAnswer=state.answers.findIndex((item)=>item.id===clickItem.id)
//   //         console.log(clickedAnswer)
//   //         const alreadyClickedAnswer=state.answers[clickedAnswer]
//   //         // state[actions.payload.id].answers
//   //         // const anserExist=state.answers[clickItem.id].indexOf(actions.payload.answer)
//   //         // console.log(anserExist)
//   //         if(!alreadyClickedAnswer){
//   //             state.answers.splice(alreadyClickedAnswer, 1)
//   //             return
//   //         }
//   //         state.answers.push(actions.payload.answer)
//   //     },
//   //     setAnswers:(state, actions:PayloadAction<AnswerProps>)=>{
//   //         // state[actions.payload.id].answers
//   //         state[actions.payload.id].answers = [actions.payload.answer]
//   //     },
//   // state[actions.payload.id].answers = actions.payload.answers
//   reducers: {
//     // // setQuestions:(state, actions:PayloadAction<QuestionsPropsDDD>)=>{
//     // //     // state.questions=actions.payload
//     // // }
//     // // setId:(state, action:PayloadAction<answerProps['id']>)=>{
//     // //   state.id=action.payload
//     // // },
//     // setAnswer:(state, action)=>{
//     //     const selectedAnswer=action.payload
//     //     console.log(action.payload.answer)
//     //     // console.log(action.payload)
//     //     // console.log(action.payload.id)
//     //     // state[actions.payload.id].answers
//     //     // const anserExist=state[actions.payload.id].answers.indexOf(actions.payload.answer)
//     //     // const anserExist=state.answers.id.indexOf(action.payload)
//     //     // const ans= state.answers.indexOf(action.payload.id)
//     //     // console.log(ans)
//     //     // const ansExi=state.answers.indexOf(action.payload.answer)
//     //     // console.log(ansExi)
//     //     const existingAnswerIndex=state.answers.findIndex((item)=>{
//     //       // console.log(item.answer)  
//     //       return(
//     //       item.answer ===action.payload.answer)
//     //     })
//     //     // console.log(existingAnswerIndex)
//     //     const existingAnswer=state.answers[existingAnswerIndex]
//     //     // console.log(typeof existingAnswer)
//     //     // console.log(existingAnswer)
//     //     if(existingAnswer){
//     //         // console.log(action.payload)
//     //         // console.log(state.answers)
//     //         state.answers.splice(existingAnswerIndex, 1)
//     //         return
//     //     }
//     //         state.answers.push(action.payload)
//     //         // console.log(state)

        
//     // },
//     // setAnswers:(state, action:PayloadAction<AnswerProps>)=>{
//     //     // state[actions.payload.id].answers
//     //     state[action.payload.id].answers = [action.payload.answer]
//     // },
//     //     // state[actions.payload.id].answers = actions.payload.answers

//   setQuizAnswers: (state, actions: PayloadAction<Partial<QuizAnswers>>) => {
//     state.quiz_answers = {
//       ...state.quiz_answers,
//       ...actions.payload,
//     };
//   },

//   // setQuizAnswers4: (state, actions: PayloadAction<Partial<QuizAnswers>>) => {
//   //   state.quiz_answers.question1 = {
//   //     ...state.quiz_answers.question1,
//   // ...actions.payload,
//   //   };
//   // },
//   },
//   // ,extraReducers: (builder) => {
//   //     builder.addCase(fetchQuizAxios.fulfilled, (state, action:PayloadAction<StateProps['data']>) => {
//   //         console.log('lopas')
//   //         // Add user to the state array
//   //         // console.log(action.payload)
//   //         // state.push(action.payload)
//   //         console.log(action.payload)
//   //         if(action.payload){
//   //             // state.data=action.payload
//   //             state.push(action.payload)
//   //             console.log('dejau')
//   //         }
//   //         // console.log(initialState)
//   //         //     console.log(state)
//   //         //     // state[action.payload.id]=action.payload
//   //         //     state = action.payload
//   //             // state[actions.payload.id].answers = [actions.payload.answer]
//   //     })
//   // }
// });

// export const { setQuizAnswers}=answersSlice.actions
// export default answersSlice;
