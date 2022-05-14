import { Star } from "assets/icons";
import {
  Box,
  Container,
  FlexWrapper,
  Input,
  SectionWrapper,
  Typography,
} from "components";
import { NextButton } from "components/buttons";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { QUIZ } from "constants/quiz";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAnswer, setAnswers } from "store/slice";
import { fetchQuizAxios } from "store/store/thunks";
import { theme } from "styles/theme";
import { QuizQuestionItem } from "../elements/QuizQuestionItem";

export const QuizSection: React.FC = () => {
  const dispatch = useDispatch();
useEffect(()=>{
  dispatch(fetchQuizAxios())
},[])

  const [questionNumber, setQuestionNumber] = useState<number>(0);
  // const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const answers= useSelector((state:any) => state.questions[questionNumber].answers)

  const currentQuestionHandler = () => {
    // console.log(selectedAnswers)
    // dispatch(setAnswers({ id: questionNumber, answers: selectedAnswers }));
    // setSelectedAnswers([]);
    setQuestionNumber((prevState) => prevState + 1);
    // console.log(questionNumber, answer)
  };
  // console.log(QUIZ[questionNumber].answerOptions)
  //
const quizFinished =  Object.keys(QUIZ).length === questionNumber + 1

  const backButtonhandler=()=>{
    setQuestionNumber((prevState) => prevState - 1);
  }
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setSelectedAnswer(event.target.textContent)

    // const anserExist = selectedAnswers.indexOf(event.target.value);
    // console.log(anserExist)
    // if (anserExist !== -1) {
    //   setSelectedAnswers((state) =>
    //     state.filter((item) => item !== event.target.value)
    //   );
    //   return;
    // }
    // setSelectedAnswers((state) => [...state, event.target.value]);
    // console.log({question:QUIZ[questionNumber].questionText, answer:event.target.textContent})
    dispatch(setAnswer({id:questionNumber, answer:event.target.value}))
  };

  const radioHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
    // setSelectedAnswers([event.target.value])
    dispatch(setAnswers({id:questionNumber, answer:event.target.value}))
  }


  const emailHandler =(event:React.ChangeEvent<HTMLInputElement>)=>{

  }
  if(quizFinished) {
return (

  <Input label='input email' type='email'  onChange={emailHandler}   />
)
  }

  return (
    <SectionWrapper>
      <Container>
        <Typography>{QUIZ[questionNumber].questionText}</Typography>
        {QUIZ[questionNumber].answerType === "single" &&
          QUIZ[questionNumber].answerOptions.map((answer) => {
          return (

            <Input
              key={answer}
              name="answer"
              label={answer}
              checked={answers.includes(answer)}
              type="radio"
              value={answer}
              onChange={radioHandler}
            />
          )
          })}
        {QUIZ[questionNumber].answerType === "multiple" &&
          QUIZ[questionNumber].answerOptions.map((answer) => (
            <Input
              key={answer}
              label={answer}
              type="checkbox"
      checked={answers.includes(answer)}
              value={answer}
              onChange={changeHandler}
            />
          ))}

        <ButtonPrimary onClick={backButtonhandler} >Back</ButtonPrimary>
        <ButtonPrimary onClick={currentQuestionHandler}>Next</ButtonPrimary>
      </Container>
    </SectionWrapper>
  );
};

// import { Box, Container, SectionWrapper, Typography } from 'components'
// import { NextButton } from 'components/buttons'
// import { ButtonPrimary } from 'components/buttons/ButtonPrimary'
// import React, { useState } from 'react'
// import { theme } from 'styles/theme'

// interface questionProps{
//   id: number,
//   questionText:string,
//   answerOptions:Array<object>;
// }
// const questions = [
//     {
  //           {id:'as6', answerText: 'Reinas'},
  //         questionText: 'What is the capital of France?',
  //         questionId:0,
//         answerOptions: [
//           {id:'a4s0', answerText: 'New York' },
//           {id:'as5', answerText: 'Kumpirs' },
//           {id:'as7', answerText: 'Dublin' },
//       ],
//     },
//     {
//       questionId:1,
//         questionText: 'What is the capital of Lithuania?',
//         answerOptions: [
//             {id:'a40', answerText: 'New York' },
//             {id:'a5', answerText: 'Kumpirs' },
//             {id:'a6', answerText: 'Reinas'},
//             {id:'a7', answerText: 'Dublin' },
//         ],
//     },
//     {
//       questionId:2,
//         questionText: 'What is the capital of latvia?',
//         answerOptions: [
//             {id:'a8', answerText: 'Muonas' },
//             {id:'a9', answerText: 'sala' },
//             {id:'a10', answerText: 'klafke'},
//             {id:'a11', answerText: 'Dublin' },
//         ],
//     },
//     {
//       questionId:3,
//       answerType:'multiple',
//         questionText: 'What is the capital of lololol?',
//         answerOptions: [
//             {id:'a88', answerText: '777' },
//             {id:'a98', answerText: '4444' },
//             {id:'a108', answerText: '1111'},
//             {id:'a118', answerText: '7788' },
//         ],
//     },
//     {
//       questionId:4,
//         questionText: 'What is the capital of laefewfwefwfetvia?',
//         answerOptions: [
//             {id:'a87', answerText: 'Muonas' },
//             {id:'a79', answerText: 'sala' },
//             {id:'a410', answerText: 'klafke'},
//             {id:'a111', answerText: 'Dublin' },
//         ],
//     },
//   ]

//   // questions.map(({id,answerOptions})=>{
//   //   console.log(id)

//   // })

//     export const QuizSection:React.FC = () => {
//       const[questionNumber, setQuestionNumber]=useState<number>(questions[0].questionId)
//       const[selectedAnswer, setSelectedAnswer]=useState<{id:string, answerText:string,questionId:number, answerArray:string[]}>({
//        id: null as unknown as string,
//        answerText: null as unknown as string,
//        questionId: null as unknown as number,
//        answerArray: []
//       })
//       // console.log(selectedAnswer)

//       const currentQuestionHandler=()=>{
//         setQuestionNumber((prevState)=>prevState+1)
//         console.log(questionNumber)
//         console.log(selectedAnswer)

//       }

//       const multipleAnswers=(answer:string)=>{
//         // let newAnswers
//         // if(!selectedAnswer.answerArray?.includes(answer)){
//         //   newAnswers=[...selectedAnswer.answerArray, answer]
//         // }else{
//         //   newAnswers=selectedAnswer.answerArray.filter(item=>item!==answer)
//         // }
//         // setSelectedAnswer({...selectedAnswer, answerArray:newAnswers})
//         // // console.log(newAnswers+',,,,,,,,,,,,,,,')
//         // console.log(newAnswers)
//         console.log(answer)
//         let arr=[]
//         arr.push(answer)

//           if(!arr.includes(answer)){
//           arr=[...arr, answer]
//           }else{
//               arr=arr.filter(item=>item!==answer)
//             }
//             arr=[...arr, answer]
//         console.log(arr)

//       }
//       // console.log(multipleAnswers)
//       // console.log(selectedAnswer.answerArray)
//       // console.log(selectedAnswer)

//       const selectAnswershandler=(id:string, answerText:string)=>{
//         if(questions[questionNumber].answerType==='multiple'){
//           console.log('zdare')
//           console.log({answerText, id, questionNumber})
//           let arr:string[]=[]
//             arr.concat(answerText)
//           // arr=[...arr, answerText]
//           console.log(arr)
//           // setSelectedAnswer(questions[questionNumber].answerOptions.push(answerText))
//         multipleAnswers(answerText)
//         }

//           // console.log(selectedAnswer.answerArray)

//         // console.log({answerText, id, questionNumber})
//         setSelectedAnswer({
//           id:id,
//           answerText:answerText,
//           questionId:questionNumber,

//         })

//              }

//   return (
//     <SectionWrapper>
//       <Container>
//       <Typography>{questions[questionNumber].questionText}</Typography>
//       {questions[questionNumber].answerOptions.map(({id,answerText})=>(

//         <Box
//         key={id}
//         		onClick={() =>
//               selectAnswershandler(id, answerText)
//               // multipleAnswers(answerText)
//             }
//             border={
//               selectedAnswer.id === id
//                 ? `2px solid ${theme.colors.black}`
//                 : '2px solid transparent'
//             }
//         >
//           <Typography>{answerText}</Typography>
//           {/* {<Typography>{answerText}</Typography>} */}

//         </Box>

//       ))}
//       <ButtonPrimary onClick={currentQuestionHandler}>Next</ButtonPrimary>

//       </Container>
//     </SectionWrapper>
//   )
// }

// import { Box, Container, SectionWrapper, Typography } from "components";
// import { NextButton } from "components/buttons";
// import { ButtonPrimary } from "components/buttons/ButtonPrimary";
// import { QUIZ } from "constants/quiz";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { theme } from "styles/theme";
// import { fetchQuizAxios } from "../elements/QuizAxios";
// import { QuizQuestionItem } from "../elements/QuizQuestionItem";

// interface questionProps {
//   id: number;
//   questionText: string;
//   answerOptions: Array<object>;
// }

// // questions.map(({id,answerOptions})=>{
// //   console.log(id)

// // })

// export const QuizSection: React.FC = () => {
//   const dispatch=useDispatch()
//   useEffect(()=>{
//     dispatch(fetchQuizAxios())

//   },[])
//   const data =useSelector((state)=>state)
//   console.log(data)
//   const [questionNumber, setQuestionNumber] = useState<number>(
//     QUIZ[0].questionId
//   );
//   // const [selectedAnswer, setSelectedAnswer] = useState<{
//   //   id: string;
//   //   answerText: string;
//   //   questionId: number;
//   //   answerArray: string[];
//   // }>({
//   //   id: null as unknown as string,
//   //   answerText: null as unknown as string,
//   //   questionId: null as unknown as number,
//   //   answerArray: [],
//   // });

//   const [quizData, setQuizData] = useState<{ id:number,question: string;answersItems: string[]; singleAnswer:string}>({id:null as unknown as number, question: "", answersItems: [], singleAnswer:'' });

//   const currentQuestionHandler = () => {
//     setQuestionNumber((prevState) => prevState + 1);

//     setQuizData({...quizData, question:QUIZ[questionNumber].questionText, id:questionNumber})

//   };

//   // console.log(answers)

//   const addAnswers =(answer:string)=>{
//       // console.log(answer)
//       let newAnswers
//       if(!quizData.answersItems.includes(answer)){

//           console.log(answer)
//           newAnswers=[...quizData.answersItems, answer]
//           console.log(newAnswers)
//       }
//       else{
//            console.log(quizData.answersItems)
//            newAnswers=quizData.answersItems.filter(item=> item !== answer)
//            console.log(newAnswers)
//       }
//       setQuizData({...quizData, answersItems:newAnswers})
//   }

// const answerHandler =(answers:string, id:number, question:string)=>{
//   // setQuizData({...quizData, id:id})
//   setQuizData({...quizData,singleAnswer:answers})
//   if(QUIZ[questionNumber].answerType==='multiple'){
//     addAnswers(answers)

//   }
// }

// console.log(quizData)
//   return (
//     <SectionWrapper>
//       <Container>
//         <Typography>{QUIZ[questionNumber].questionText}</Typography>

//         {QUIZ[questionNumber].answerOptions.map((answers, index)=>{
//           // console.log(answers, index)

//           return(
//           <QuizQuestionItem
//           key={index}
//           id={index}
//           answers={answers}
//           question={QUIZ[questionNumber].questionText}
//           onSelectAnswer={answerHandler}
//           />
//         )}
//         )}

//         <ButtonPrimary onClick={currentQuestionHandler}>Next</ButtonPrimary>
//       </Container>
//     </SectionWrapper>
//   );
// };

// import { Star } from "assets/icons";
// import {
//   Box,
//   Container,
//   FlexWrapper,
//   Input,
//   SectionWrapper,
//   Typography,
// } from "components";
// import { NextButton } from "components/buttons";
// import { ButtonPrimary } from "components/buttons/ButtonPrimary";
// import { QUIZ } from "constants/quiz";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setAnswers } from "store/slice";
// import { theme } from "styles/theme";
// import { fetchQuizAxios } from "../elements/QuizAxios";
// import { QuizQuestionItem } from "../elements/QuizQuestionItem";

// export const QuizSection: React.FC = () => {
//   const dispatch = useDispatch();
//   const [questionNumber, setQuestionNumber] = useState<number>(0);
//   const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
//   const answers= useSelector((state:any) => state.questions[questionNumber].answers)
//   console.log(answers)

//   const currentQuestionHandler = () => {
//     console.log(selectedAnswers)
//     dispatch(setAnswers({ id: questionNumber, answers: selectedAnswers }));
//     setSelectedAnswers([]);
//     setQuestionNumber((prevState) => prevState + 1);
//     // console.log(questionNumber, answer)
//   };
//   // console.log(QUIZ[questionNumber].answerOptions)
//   //

//   const backButtonhandler=()=>{
//     setQuestionNumber((prevState) => prevState - 1);
//     console.log(questionNumber)
//   }

//   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//     // setSelectedAnswer(event.target.textContent)

//     const anserExist = selectedAnswers.indexOf(event.target.value);
//     // console.log(anserExist)
//     if (anserExist !== -1) {
//       setSelectedAnswers((state) =>
//         state.filter((item) => item !== event.target.value)
//       );
//       return;
//     }
//     setSelectedAnswers((state) => [...state, event.target.value]);
//     // console.log({question:QUIZ[questionNumber].questionText, answer:event.target.textContent})
//   };

//   const radioHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
//     setSelectedAnswers([event.target.value])
//   }

//   return (
//     <SectionWrapper>
//       <Container>
//         <Typography>{QUIZ[questionNumber].questionText}</Typography>
//         {QUIZ[questionNumber].answerType === "single" &&
//           QUIZ[questionNumber].answerOptions.map((answer) => {
// console.log(answers.includes(answer))
//           return (

//             <Input
//               key={answer}
//               name="answer"
//               label={answer}
//               checked={answers.includes(answer)}
//               type="radio"
//               value={answer}
//               onChange={radioHandler}
//             />
//           )
//           })}
//         {QUIZ[questionNumber].answerType === "multiple" &&
//           QUIZ[questionNumber].answerOptions.map((answer) => (
//             <Input
//               key={answer}
//               label={answer}
//               type="checkbox"
//               // checked={true}
//               value={answer}
//               onChange={changeHandler}
//             />
//           ))}

//         <ButtonPrimary onClick={backButtonhandler} >Back</ButtonPrimary>
//         <ButtonPrimary onClick={currentQuestionHandler}>Next</ButtonPrimary>
//       </Container>
//     </SectionWrapper>
//   );
// };