import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { QuizAnswers } from 'store/slice'
import { Input } from './Input'


interface InputQuizProps{
    label:string,
    answer:string,
    value:string,
    onChange:()=>void
    type:string,
    actionCall:()=>void,
    actionState:QuizAnswers
    // submitHandler:()=>void
}

export const InputQuiz:React.FC<InputQuizProps> = ({answer, onChange, type, actionCall, actionState, value, label}) => {
    const dispatch=useDispatch()
    const answers=useSelector((state:any)=>state.answers)
    console.log(answers)
    const submitHandler =(actionCall:any, actionState:QuizAnswers)=>{
        dispatch(actionCall({actionState}))
    }

  return (
      <form onSubmit={()=>submitHandler(actionCall,actionState)}> 
    <Input
    key={answer}
    name={answer}
    label={label}
    // checked={answers.includes(answer)}
    type={type}
    value={answer}
    onChange={onChange}
    
    />
    </form>
  )
}

 