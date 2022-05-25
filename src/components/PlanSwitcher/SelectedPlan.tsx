import React from 'react'
import { PlanFromQuiz } from 'pages/checkout/elements'
import { price } from 'store/users/selectors'
import { SummaryDetails } from 'pages/success/elements'
import { useSelector } from 'react-redux'

interface PlanProps{
    title:string,
    enrolled:number
    lessonCount:number,
}

export const SelectedPlan:React.FC<PlanProps> = ({title, enrolled, lessonCount,}) =>{
const selectedPrice=useSelector(price)

if(selectedPrice!==0){
  return(
  <SummaryDetails title={title} price={selectedPrice}/>
  )
}
  return(
<PlanFromQuiz enrolled={enrolled} lessonCount={lessonCount} title={title} />
  )
}
  
  
  
