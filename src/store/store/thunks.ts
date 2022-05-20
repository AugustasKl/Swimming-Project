import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { setQuestions } from './questions-slice'

// const url='https://reactproject-e302f-default-rtdb.europe-west1.firebasedatabase.app/pizzas.json'
const url =
"https://62810b691020d8520584bcbd.mockapi.io/data/";
// const url = 'https://reqres.in/api/users';
const urlAnnsw =
  "https://62810b691020d8520584bcbd.mockapi.io/answers";

const fetchQuestionsPrefix = "questions/GET_QUESTIONS";
const postQuestionsPrefix = "answers/POST_ANSWERS";
const queryParams = {
  sort: "id",
};

export const fetchQuizAxios: any = createAsyncThunk(
  fetchQuestionsPrefix,
  async (dispatch: any) => {
    try {
      const { data }: AxiosResponse = await axios.get(url);
    //   console.log(Object.entries(data));
      console.log(data[0])
    //   const ddata=...data

    //   let result = Object.keys(data).sort((a,b)=> data[a].id -  data[b].id);
    //   console.log(result[0])

    // console.log(obj)
    // const obj = result.reduce((o, key) => Object.assign(o, {[key]: Object.entries(data)}), {});
    // console.log(obj)
    // for (const key in data) {
    // console.log(key)
    //   const dataObj = {
    //     id: key,
    //     ...data[key],
    //   };
    //   console.log(dataObj)
    //   return dataObj
    // }
    // console.log(Object.fromEntries)
     
    // const obj1 = Object.fromEntries(
    //     result.map(year => [year, 
            
    //         //  dataObj
    //         {...data}
    //     ])
    //   )
    //   console.log(obj1)

      return data[0];
    } catch (e) {
      console.log(e);
    }
  }
);
export const postUser: any = createAsyncThunk(
  postQuestionsPrefix,
  async (quizData: any) => {
    try {
      const resp = await axios({
        method: "post",
        url: urlAnnsw,
        data: quizData,
      });
      console.log(quizData);
    } catch (e) {
      // const errRes = (e as AxiosError).response;
      // if (errRes) {
      // 	return rejectWithValue(errRes.statusText);
      // }
      console.log(e);
    }
  }
);

// const sortPizzas = (pizzas, ascending) => {
//     return pizzas.sort((pizzaA, pizzaB) => {
//       if (ascending) {
//         return pizzaA.id > pizzaB.id ? 1 : -1;
//       } else {
//         return pizzaA.id < pizzaB.id ? 1 : -1;
//       }
//     });
//   };
