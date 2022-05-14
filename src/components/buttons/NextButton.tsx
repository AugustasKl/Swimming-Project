import { Typography } from 'components'
import React, { useState } from 'react'
import { Button } from './Button'

export const NextButton:React.FC<{onPassCurrentQuestion:(questionNumber:number)=>void}> = (props) => {
    const[currentQuestion, setCurrentQuestion]=useState<number>(0)
    const nextQuestionHandler=()=>{
        setCurrentQuestion((prevState)=> prevState +1)
        props.onPassCurrentQuestion(currentQuestion)
    }
  return (
   <Button onClick={nextQuestionHandler}>
       <Typography>Next</Typography>
   </Button>
  )
}

 