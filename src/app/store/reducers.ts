/** @format */

import { combineReducers } from 'redux';
import authReducer from '../features/auth/slice';
import userReducer from '../features/user/slice';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer
});
export default rootReducer;
