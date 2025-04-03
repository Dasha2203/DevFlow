import { combineReducers } from '@reduxjs/toolkit';
import { menuReducer, userReducer } from '@slices/index';

const rootReducer = combineReducers({
  user: userReducer,
  menu: menuReducer,
});

export default rootReducer;
