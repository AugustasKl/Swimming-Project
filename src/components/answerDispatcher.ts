
import { setQuizAnswers } from "store/slice"


interface answerDispatcherProps{
  question:string,
  answer:string|[],
  dispatch:()=>void

}

export const answerDispatcher=(question?:any, answer?:string )=>{

   
 return (dispatch:()=>void)=>{
   
 
    switch(question){
      case 'question0':
          dispatch(setQuizAnswers({question1:answer}));
        case 'question1':
            dispatch(setQuizAnswers({question2:answer}));
          case 'question2':
             dispatch(setQuizAnswers({question3:answer}));
            case 'question3':
                 dispatch(setQuizAnswers({question4:answer}))
              default:
                return question
    }
   
}
  }

