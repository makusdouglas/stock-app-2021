/** @format */

import { combineReducers } from 'redux';
import authReducer from '../modules/SignIn/slice';
import userReducer from '../modules/User/slice';
import appReducer from '../modules/Application/slice';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  user: userReducer
});
export default rootReducer;
