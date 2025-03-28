import { combineReducers } from '@reduxjs/toolkit';
import { userReducer, menuReducer } from '@src/shared/store/slices';

const rootReducer = combineReducers({
  user: userReducer,
  menu: menuReducer,
});

export default rootReducer;
