import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosResponse } from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { setQuestions } from './questions-slice'

const url='https://swimming-c3397-default-rtdb.europe-west1.firebasedatabase.app/answers.json'
// const url = 'https://reqres.in/api/users';
const fetchQuestionsPrefix ='questions/GET_QUESTIONS'

export const fetchQuizAxios:any=createAsyncThunk(fetchQuestionsPrefix, async(dispatch: any)=>{
    

    try{
        const {data}:AxiosResponse=await axios.get(url)
        return data
        
    }catch(e){
        console.log(e)
    }
})

