
//REDUX TOOLKIT
import { configureStore,  } from '@reduxjs/toolkit';
import { combineReducers, CombinedState, AnyAction } from 'redux';
import answersSlice from 'store/slice';
import questionsSlice, {  QuestionsPropsDDD } from 'store/slice';
// import userSlice from './slice';
// import { UserState } from './types';

export interface RootState {
	answers: any;
	questions: any;
	//funnel: FunnelState;
}

const combinedReducer = combineReducers<CombinedState<RootState>>({
	questions: questionsSlice.reducer,
	answers: answersSlice.reducer,

});

export const rootReducer = (state: any, action: AnyAction) =>
	combinedReducer(state, action);

export const store = configureStore({
	reducer: rootReducer,

});