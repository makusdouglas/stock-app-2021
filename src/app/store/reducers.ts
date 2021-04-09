/** @format */

import { combineReducers } from 'redux';
import authReducer from '../modules/SignIn/slice';
import userReducer from '../modules/User/slice';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer
});
export default rootReducer;
