/** @format */

import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../services/api';
import type { AppDispatch, RootState } from '../../store/index';
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

const requestLogin = createAsyncThunk<
  // Return type of the payload creator
  RequestLoginResponse,
  // First argument to the payload creator
  SignInPayload,
  {
    rejectValue: MyKnownError;
  }

  // Optional fields for defining thunkApi field types
>(
  'auth/requestLogin',
  async (userData, thunkApi) => {
    const { email, password } = userData;
    try {
      const response = await api.post<RequestLoginResponse>('/oauth', {
        email,
        password,
      });
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

export function asyncLogin(props: SignInPayload) {
  return async function (dispatch: AppDispatch) {
    try {
      //   const response = await api.post('/auth', {});
      //   dispatch(
      //     makeLogin({
      //       email: props.email,
      //       password: props.password,
      //     })
      //   );
    } catch (error) {}
  };
}

export const { makeLogin } = authSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.auth;

export default authSlice.reducer;