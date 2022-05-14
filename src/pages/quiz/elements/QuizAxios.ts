import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosResponse } from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const url='https://swimming-c3397-default-rtdb.europe-west1.firebasedatabase.app/questions.json'
// const url = 'https://reqres.in/api/users';
const fetchQuestionsPrefix ='questions/GET_QUESTIONS'

export const fetchQuizAxios:any=createAsyncThunk(fetchQuestionsPrefix, async()=>{
    

    try{
        const {data}:AxiosResponse=await axios.get(url)
        // console.log(data)

    }catch(e){
        console.log(e)
    }
})


