import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './combine-reducers';

export const store = configureStore({
  reducer: rootReducer,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
