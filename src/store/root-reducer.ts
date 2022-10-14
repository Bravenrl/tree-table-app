import { combineReducers } from '@reduxjs/toolkit';


import { userReducer } from './app/app-slice';

export const RootReducer = combineReducers({
  App: userReducer,
});

export type TypeRootState = ReturnType<typeof RootReducer>;
