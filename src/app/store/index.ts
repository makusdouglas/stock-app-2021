/** @format */

import {
  Action,
  AsyncThunkAction,
  configureStore,
  createAsyncThunk,
  getDefaultMiddleware,
  ThunkAction,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import Logger from 'redux-logger';
// import rootReducer from './reducers';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore
} from 'redux-persist';
import persistedRootReducer from './persistConfig';

const middleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
}).concat(Logger);

const store = configureStore({
  reducer: persistedRootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;
export const persistor = persistStore(store);

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

export type AsyncThunkAPIConfig<Extra = unknown, RejectType = unknown, SerializedError = unknown> = {
  state: RootState;
  dispatch: DispatchThunk;
  extra?: Extra;
  rejectValue?: RejectType;
  serializedErrorType?: SerializedError;
};