import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosResponse } from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { setQuestions } from './questions-slice'

// const url='https://reactproject-e302f-default-rtdb.europe-west1.firebasedatabase.app/pizzas.json'
const url='https://swimming-c3397-default-rtdb.europe-west1.firebasedatabase.app/q.json'
// const url = 'https://reqres.in/api/users';
const urlAnnsw='https://swimming-c3397-default-rtdb.europe-west1.firebasedatabase.app/answers.json'

const fetchQuestionsPrefix ='questions/GET_QUESTIONS'
const postQuestionsPrefix ='answers/POST_ANSWERS'

export const fetchQuizAxios:any=createAsyncThunk(fetchQuestionsPrefix, async(dispatch: any)=>{
    

    try{
        const {data}:AxiosResponse=await axios.get(url)
        console.log(data)
        // const transformedData=[]
        // for (const key in data) {
        //   // console.log(key)
        //     const dataObj = {
        //       id: key,
        //       ...data[key],
        //     };
        //     transformedData.push(dataObj);
            
        //   }
        //   console.log(transformedData)
          // return transformedData;    
          return data    
    }catch(e){
        console.log(e)
    }
})
export const postUser:any = createAsyncThunk(
	postQuestionsPrefix,
	async (quizData:any) => {
		try {
			const resp = await axios({
				method: 'post',
				url: urlAnnsw,
				data: quizData,
			});
			console.log(quizData);
		} catch (e) {
			// const errRes = (e as AxiosError).response;
			// if (errRes) {
			// 	return rejectWithValue(errRes.statusText);
			// }
      console.log(e)
		}
	}
);

