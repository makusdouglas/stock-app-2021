/** @format */

import {
  Action,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import authReducer from '../features/auth/slice';
import Logger from 'redux-logger';

const middleware = getDefaultMiddleware().concat(Logger);
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Inferred type of AppThunk
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
// export type AppThunk = ActionCreator<
//   ThunkAction<Action, RootState, void, Action<string>>
// >;
export type ThunkResult<R> = ThunkAction<R, RootState, null, Action<string>>;

export type DispatchThunk = ThunkDispatch<RootState, null, Action<string>>;
