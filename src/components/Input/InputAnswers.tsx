import React, { useRef } from 'react'
import { Input } from './elements/Input'

interface InputProps{
    answer:string,
    type:string,
    onChange:()=>void,
    onSubmit:()=>void
}

const InputAnswers:React.FC <InputProps>= ({answer, type, onChange, onSubmit}) => {
//   const refAns=useRef()

//   const submitHandler=(event:React.FormEvent)=>{
//       event.preventDefault()
//       const value = refAns.current!.value
//     console.log(value)
//     }
    return (
    <form onSubmit={onSubmit}>

    <Input
    key={answer}
    name="answer"
    label={answer}
    // checked={answers.includes(answer)}
    type={type}
    value={answer}
    onChange={onChange}
    // ref={refAns}
    />
    </form>
  )
}

export default InputAnswers