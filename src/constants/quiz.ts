import { getMaxListeners } from "process"

export interface QuestionsState{
  [key: number]: QuestionsPropsDDD
  }

export interface QuestionsPropsDDD{
    id:number,
    answerType:string,
    questionText:string,
    answerOptions:string[]
    answers:string[]
}

// const answers = {
//   lukas@getMaxListeners.com: {
//     0: ['Moncius'],
//     1: ['New York']
//   }
// }

export const QUIZ:QuestionsState={
   
       0: {
          id: 0,
          answerType:'single',
          questionText: "Monciaus vardas?",
          answerOptions: ["Moncius", "liepa", "Reinas", "birzelis"],
          answers: [],
        },
        1:{
          id: 1,
          answerType:'single',
          questionText: "What is the capital of Lithuania?",
          answerOptions: ["New York", "Kumpirs", "Reinas", "Dublin"],
          answers: [],
        },
        2:{
          id: 2,
          answerType:'single',
          questionText: "What is the capital of latvia?",
          answerOptions: ["Muonas", "sala", "klafke", "Dublin"],
          answers: [],
        },
        3:{
          id: 3,
          answerType: "multiple",
          questionText: "What is the capital of lololol?",
          answerOptions: ["777", "4444", "1111", "7788"],
          answers: [],
        },
        4:{
          id: 4,
          answerType:'single',
          questionText: "What is the capital of laefewfwefwfetvia?",
          answerOptions: ["Muonas", "sala", "klafke", "Dublin"],
          answers: [],
        },

      }