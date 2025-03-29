import { combineReducers } from '@reduxjs/toolkit';
import { menuReducer, userReducer } from '@shared/store/slices';

const rootReducer = combineReducers({
  user: userReducer,
  menu: menuReducer,
});

export default rootReducer;
