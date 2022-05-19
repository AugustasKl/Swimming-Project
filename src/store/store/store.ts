
//REDUX TOOLKIT
import { configureStore,  } from '@reduxjs/toolkit';
import { combineReducers, CombinedState, AnyAction } from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import answersSlice from 'store/slice';
import  {  QuestionsPropsDDD } from 'store/slice';
import questionsSlice from './questions-slice';
import sessionStorage from 'redux-persist/es/storage/session';
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

	const persistConfig = {
		key: 'data',
		storage: sessionStorage,
		whitelist: ['answers'],
	};

	const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false}),
});
export const persistor = persistStore(store);