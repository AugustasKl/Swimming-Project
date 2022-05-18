import { Container, Input, SectionWrapper, Typography } from "components";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { QuizAnswers, setQuizAnswers } from "store/slice";
import { fetchQuizAxios, postUser } from "store/store/thunks";

export const QuizSection: React.FC = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state: any) => state.questions.data);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [radioAnswer, setRadioAnswer] = useState<string>("");
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  // const userAnswersSelector = ((state: any) => state.answers);
  const currentQuestion = questions ? Object.entries(questions)[questionNumber] : []
  const [questionKey, questionData]:any = currentQuestion ? currentQuestion : []
  const [email, setEmail] = useState('')
  const answers = useSelector((state: any) => state.answers.quiz_answers);
  console.log(answers)
  // const transformedData=[]
  // for (const key in answers) {
  //   console.log(key)
  //     // const dataObj = {
  //     //   id: key,
  //     //   ...answers[key],
  //     // };
  //     // transformedData.push(dataObj);
  //     return key
  //   }
    // console.log(transformedData)
  
  useEffect(() => {
    dispatch(fetchQuizAxios());
  }, []);
  
/*{
  // const quizAnswersSelector = (key: keyof QuizAnswers) =>
  //   createSelector(userAnswersSelector, (quiz_answers) => {
  //     if (quiz_answers && key) {
  //       return quiz_answers[key as keyof QuizAnswers];
  //     } else {
  //       return null;
  //     }
  //   });

}*/
  if (!questions) {
    return <Typography>Loading....</Typography>;
  }
  // const onSelect = (answer:string|string[])=>{
  //   // if(question)
  //   dispatch(setQuizAnswers(answer))
  // }

  const currentQuestionHandler = () => {
   
    

    if (questionData.answerType === "multiple") {
      // console.log({ question: questionData.id, selectedAnswers });
      dispatch(setQuizAnswers({[questionKey]:selectedAnswers}));
      setSelectedAnswers([]);
    }
    if (questionData.answerType === "single") {
      // console.log({ question: questions[questionNumber].id, radioAnswer });
      // let setAnswer=questions[questionNumber].id
      // console.log(setAnswer) 
      dispatch(setQuizAnswers({[questionKey]:radioAnswer}));

      // onSelect(radioAnswer)
      setRadioAnswer("");
    }
    
    setQuestionNumber((prevState) => prevState + 1);
  }

  const submitHanlder = () => {
    const quizData = {...answers, email}
    dispatch(postUser(quizData))
  }
  
  const onSelect = (answer:QuizAnswers)=>{
    
      return dispatch(setQuizAnswers(answer))
     
    
  }



  const quizFinished =!currentQuestion;

  const backButtonhandler = () => {
    if (0 < questionNumber) {
      setQuestionNumber((prevState) => prevState - 1);
    }
  };
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // let answers:string[]=[]
    let newAnswers;
    if (!selectedAnswers.includes(event.target.value)) {
      newAnswers = [...selectedAnswers, event.target.value];
    } else {
      newAnswers = selectedAnswers.filter(
        (item) => item !== event.target.value
        );
      }
      setSelectedAnswers(newAnswers);
    };
    
    const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {

    // console.log({
    //   question: questions[questionNumber].questionText,
    //   answer: event.target.value,
    // });
    setRadioAnswer(event.target.value);
  };

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  };
  if (quizFinished) {
    return (
      <>
        <Input label="input email" type="email" value={email} onChange={emailHandler} />
        <ButtonPrimary onClick={backButtonhandler}>Back</ButtonPrimary>
        <ButtonPrimary onClick={submitHanlder}>Done</ButtonPrimary>
      </>
    );
  }


  return (
    <SectionWrapper>
      <Container>
        <Typography>{questionData.questionText}</Typography>
        {questionData.answerType === "single" &&
          questionData.answerOptions.map((answer: string) => {
            // console.log(answers)
            return (
              <Input
                key={answer}
                name="answer"
                label={answer}
                // checked={answers.includes(answer)}
                type="radio"
                value={answer}
                onChange={radioHandler}
              />
            );
          })}
        {questionData.answerType === "multiple" &&
          questionData.answerOptions.map((answer: string) => {
            return (
              <Input
                key={answer}
                label={answer}
                type="checkbox"
                // checked={answers.includes(answer)}
                value={answer}
                onChange={changeHandler}
              />
            );
          })}

        <ButtonPrimary onClick={backButtonhandler}>Back</ButtonPrimary>
        <ButtonPrimary onClick={currentQuestionHandler}>Next</ButtonPrimary>
      </Container>
    </SectionWrapper>
  );
};

// import { Star } from "assets/icons";
// import {
//   Box,
//   Container,
//   FlexWrapper,
//   Input,
//   SectionWrapper,
//   Typography,
// } from "components";
// import { answerDispatcher, AnswerDispatcher } from "components/answerDispatcher";
// import { NextButton } from "components/buttons";
// import { ButtonPrimary } from "components/buttons/ButtonPrimary";
// import { InputQuiz } from "components/Input/elements/InputQuiz";
// import InputAnswers from "components/Input/InputAnswers";
// import { QUIZ } from "constants/quiz";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setAnswer,
//   setAnswers,
//   setQuizAnswers,
//   setQuizAnswers4,
// } from "store/slice";
// import { fetchQuizAxios } from "store/store/thunks";
// import { theme } from "styles/theme";
// import { QuizQuestionItem } from "../elements/QuizQuestionItem";

// export const QuizSection: React.FC = () => {
//   // const refData=useRef()
//   const dispatch = useDispatch();
//   const questions = useSelector((state: any) => state.questions.data);
//   const answers = useSelector((state: any) => state.answers);
//   const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
//   const [radioAnswer, setRadioAnswer]=useState<string>('')
//   const [questionNumber, setQuestionNumber] = useState<number>(0);
//   // const answers1=useSelector((state:any)=>state.answers)
//   // const id=useSelector((state:any)=>state.answers.id)
//   console.log(answers.quiz_answers);
//   // console.log(answers1)
//   // console.log(id)

//   // console.log(questions)

//   useEffect(() => {
//     dispatch(fetchQuizAxios());
//     // console.log('labas')
//   }, []);

//   // console.log(questions)
//   if (questions.length === 0) {
//     return <Typography>Loading....</Typography>;
//   }
//   // const answers23]= useSelector((state:any) => state.answers[questionNumber].answers)
//   // const questions=useSelector((state:any)=>state.questions)
//   // const data=data.questions.map()
//   // const mapedQuestions= data.questions.map((nested: any[]) => nested.map(element => element * 6));
//   // const answ=useSelector((state:any)=>state.answers)
//   // if(!questions) return
//   // console.log(answers23)

//   // console.log(answ)

//   // console.log(questions)

//   // const mapedQuestions = data.questions.map(data.questions, function (nested: any) {
//   //     return data.questions.map(nested, function (element: number) {
//   //         return element * 6;
//   //     });
//   // })
//   // console.log(mapedQuestions)

//   // const mapedData=data.questions.map((data:any)=>{

//   //   console.log(data)

//   //  const dData= data.map((data:any)=>{
//   //     console.log(data)
//   //     const filData=data
//   //     return filData
//   //   })
//   //   return dData
//   // })
//   // console.log(mapedData)
//   // // console.log(questionNumber)

//   // const doubledArray = data.questions.map(Array, function (nested:any) {
//   //     return data.questions.map(nested, function (element:any) {
//   //         return element * 5;
//   //     });
//   // });
//   // const doubledArray = data.questions.map(function (nested:any) {
//   //   return nested.map(function (element:number) {
//   //       return element * 0;
//   //   });
//   // });
//   // console.log(doubledArray)

//   // console.log(questions.length)
//   const currentQuestionHandler = () => {

//     if(questions[questionNumber].answerType === "multiple" ){
//       console.log({question:questions[questionNumber].id, selectedAnswers})

//       setSelectedAnswers([])
//     }
//     if(questions[questionNumber].answerType === "single" ){
//       console.log({question:questions[questionNumber].id, radioAnswer})

//         // dispatch()

//       // console.log(`question${questionNumber}`)
//       setRadioAnswer('')
//           };
//           setQuestionNumber((prevState) => prevState + 1);
// }
//   // console.log(QUIZ[questionNumber].answerOptions)
//   //
//   // console.log(QUIZ)
//   const quizFinished = questions.length === questionNumber;
//   // const quizFinished1 = data.questions.length
//   // console.log(quizFinished1)
//   // console.log(questions[0].length )
//   // console.log(Object.keys(QUIZ).length )

//   const backButtonhandler = () => {
//     if (0 < questionNumber) {
//       setQuestionNumber((prevState) => prevState - 1);
//     }
//   };
//   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//     // let answers:string[]=[]

//     let newAnswers;
//     if(!selectedAnswers.includes(event.target.value)){
//       newAnswers=[...selectedAnswers,  event.target.value]
//     }else{
//       newAnswers=selectedAnswers.filter(item=>item!==event.target.value)
//     }
//     setSelectedAnswers(newAnswers)
//     // console.log({question:questions[questionNumber].questionText, answer:event.target.value})
//   }

//     const existingAnswerIndex=selectedAnswers.findIndex((item)=>{
//       // console.log(item.answer)
//       return(
//       item ===event.target.value)
//     })
//     const existingAnswer=selectedAnswers[existingAnswerIndex]

//     if(existingAnswer){
//       // console.log(action.payload)
//       // console.log(state.answers)
//       selectedAnswers.splice(existingAnswerIndex, 1)
//       return
//   }
//       setSelectedAnswers(answer)
//       console.log(selectedAnswers)

// }

//   // answers.push(event.target.value)

// setSelectedAnswers( [ event.target.value]);
// console.log(selectedAnswers)
//   const existingAnswerIndex=selectedAnswers.findIndex((item)=>{
//     console.log(item)
//     return(
//     item ===event.target.value)
//   })
//   const existingAnswer=selectedAnswers[existingAnswerIndex]
//   console.log(existingAnswer)
//   if(existingAnswer){
//     // console.log(action.payload)
//     // console.log(state.answers)
//     selectedAnswers.splice(existingAnswerIndex, 1)
//     return
// }else{
//   setSelectedAnswers( [...selectedAnswers, event.target.value]);

// }
// console.log(selectedAnswers)
// }
//  setSelectedAnswers(event.target.value)
//   const anserExist = selectedAnswers.indexOf(event.target.value);
//   console.log(anserExist)
//   if (anserExist !== -1) {
//     setSelectedAnswers((state) =>
//       state.filter((item) => item !== event.target.value)
//     );
//     return;
//   }
//   setSelectedAnswers((state) => [...state, event.target.value]);

// let answers:string[]=[]
// if(!answers.includes(event.target.value)){
//   answers=[...answers, event.target.value]
//   console.log(answers)
// }else{
//   answers=answers.filter(item=>item!== event.target.value)
// }
// // answers[{...answers, event.target.value}]
//     console.log(answers)

// console.log(event.target.value)
// dispatch(setId({id:questions[questionNumber].id}))
// dispatch(setQuizAnswers4({question4:event.target.value}))
// dispatch(setAnswer({ id:questions[questionNumber].id, answer:event.target.value}))

//   const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//     console.log({question:questions[questionNumber].questionText, answer:event.target.value})
//     setRadioAnswer(event.target.value)
//     // console.log(event.target.value)
//     // setSelectedAnswers([event.target.value])
//     // dispatch(setAnswers({id:questionNumber, answer:event.target.value}))
//     // dispatch(setQuizAnswers({ question1: event.target.value }));
//   };

//   // const submitHandler=(event:React.FormEvent)=>{

//   // }

//   const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {};
//   if (quizFinished) {
//     return (
//       <>
//         <Input label="input email" type="email" onChange={emailHandler} />
//         <ButtonPrimary onClick={backButtonhandler}>Back</ButtonPrimary>
//       </>
//     );
//   }

//   //   const selectedAnswer =answers.map((data:any, index:number)=>{
//   //  console.log(data)
//   //   })
//   //   console.log(selectedAnswer)

//   //   console.log(answers)

//   return (
//     <SectionWrapper>
//       <Container>
//         <Typography>{questions[questionNumber].questionText}</Typography>
//         {questions[questionNumber].answerType === "single" &&
//           questions[questionNumber].answerOptions.map((answer: string,) => {
//             // console.log(answer)

//             return (

//               <Input
//                 key={answer}
//                 name="answer"
//                 label={answer}
//                 // checked={answers.includes(answer)}
//                 type="radio"
//                 value={answer}
//                 onChange={radioHandler}
//                 // ref={refData}
//                 />

//             );
//           })}
//         {questions[questionNumber].answerType === "multiple" &&
//           questions[questionNumber].answerOptions.map((answer: string) => {
//             // console.log(answer)

//             return (
//               <Input
//                 key={answer}
//                 label={answer}
//                 type="checkbox"
//                 // checked={selectedAnswers.includes(answer)}
//                 // checked={answers.map((data:any, index:number)=>{

//                 //   // if(data.answer===answer){
//                 //   //     return true
//                 //   // }else{
//                 //   //   return false
//                 //   // }
//                 // })}
//                 value={answer}
//                 onChange={changeHandler}
//               />
//             );
//           })}

//         <ButtonPrimary onClick={backButtonhandler}>Back</ButtonPrimary>
//         <ButtonPrimary onClick={currentQuestionHandler}>Next</ButtonPrimary>
//       </Container>
//     </SectionWrapper>
//   );
// };

// disabled={answers.length===0}
// {
//   answers: [
//     {answer: ['New yprl'], id: 0}

//   ]
//   email:''
// }

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
