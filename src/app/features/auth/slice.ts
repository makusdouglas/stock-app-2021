/** @format */

import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../services/api';
import type { AppDispatch, AppThunk, RootState } from '../../store/index';
import { SignInPayload } from './types';

// Define a type for the slice state
interface AuthState {
  email: string | null;
  password: string | null;
  isAuthenticated: boolean;
  token: string | null;
  loading: false | 'pending' | 'succeeded' | 'failed';
}
interface MyKnownError {
  errorMessage: string;
}
interface RequestLoginResponse {
  access_token: string;
}

export const requestLogin = createAsyncThunk<RequestLoginResponse, SignInPayload>(
  'auth/requestLogin',
  async (userData, thunkApi) => {
    const { email, password } = userData;
    try {
      const response = await api.post<RequestLoginResponse>('/oauth/token', {
        client_id: "3",
        client_secret: "petruzapiBxwer!294nPqzojd8349",
        grant_type: "password",
        email,
        password,
      });
      console.log(response.data);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue({ errorMessage: 'falha no login' });
    }
  },
  {}
);
// Define the initial state using that type
const initialState: AuthState = {
  email: null,
  password: null,
  isAuthenticated: false,
  loading: false,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    makeLogin: (state, action: PayloadAction<SignInPayload>) => {
      state.isAuthenticated = true;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
  extraReducers: builder => {
    builder.addCase(requestLogin.pending, state => {
      state.loading = 'pending';
    });
    builder.addCase(requestLogin.fulfilled, (state, action) => {
      state.email = action.meta.arg.email;
      state.token = action.payload.access_token;
      state.isAuthenticated = true;
      state.password = null;
      state.loading = 'succeeded';
    });
    builder.addCase(requestLogin.rejected, (state, action) => {
      state.email = null;
      state.isAuthenticated = false;
      state.loading = 'failed';
      state.token = null;
      state.password = null;
    });
  },
});

export function asyncLogin(props: SignInPayload): AppThunk {
  return async function (dispatch: AppDispatch) {

    setTimeout(
      () => dispatch(makeLogin({
        email: props.email,
        password: props.password
      })), 5000)
    // try {
    //   const response = await api.post<RequestLoginResponse>('/oauth/token', {
    //     client_id: "3",
    //     client_secret: "petruzapiBxwer!294nPqzojd8349",
    //     grant_type: "password",
    //     email: props.email,
    //     password: props.password
    //   });
    //   console.log(response.data);
    //   return response.data;
    // } catch (err) {
    //   console.log(err);
    // }
  };
}

export const { makeLogin } = authSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.auth;

export default authSlice.reducer;
