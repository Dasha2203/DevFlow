import { configureStore } from '@reduxjs/toolkit';
import { menuReducer, userReducer } from './slices';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    user: userReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
