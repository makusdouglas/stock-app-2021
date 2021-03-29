/** @format */

import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { notification } from 'antd';
import api from '../../../services/api';
import type { RootState } from '../../store/index';
import { SignInPayload } from './types';

// Define a type for the slice state
interface AuthState {
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

export const requestLogin = createAsyncThunk<
  RequestLoginResponse,
  SignInPayload,
  {
    rejectValue: MyKnownError;
  }
>('auth/requestlogin', async (userData, thunkApi) => {
  const { email, password } = userData;
  try {
    const response = await api.post<RequestLoginResponse>('oauth/token', {
      client_id: '3',
      client_secret: 'petruzapiBxwer!294nPqzojd8349',
      grant_type: 'password',
      username: email,
      password,
    });
    console.log('RESPONSE', response.data);
    return response.data;
  } catch (err) {
    console.log(err);

    return thunkApi.rejectWithValue({
      errorMessage: 'falha no login',
    });
  }
});
// Define the initial state using that type
const initialState: AuthState = {
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
      // state.email = action.payload.email;
      // state.password = action.payload.password;
    },
  },
  extraReducers: builder => {
    builder.addCase(requestLogin.pending, state => {
      state.loading = 'pending';
    });
    builder.addCase(requestLogin.rejected, (state, action) => {
      // state.email = null;
      // state.password = null;
      state.isAuthenticated = false;
      state.loading = 'failed';
      state.token = null;
    });
    builder.addCase(requestLogin.fulfilled, (state, action) => {
      // state.email = action.meta.arg.email;
      state.token = action.payload.access_token;
      state.isAuthenticated = true;
      // state.password = null;
      state.loading = 'succeeded';
      notification.success({
        message: 'Bem vindo!',
        description: 'Seja bem vindo(a) ao Petruz Web 2.0.'
      });
    });
  },
});

// export function asyncLogin(props: SignInPayload): AppThunk {
//   return async function (dispatch: AppDispatch) {
//     try {
//       const response = await api.post<RequestLoginResponse>(
//         '/api/oauth/token',
//         {
//           client_id: '3',
//           client_secret: 'petruzapiBxwer!294nPqzojd8349',
//           grant_type: 'password',
//           email: props.email,
//           password: props.password,
//         }
//       );
//       console.log(response.data);
//       return response.data;
//     } catch (err) {
//       console.log(err);
//     }
//   };
// }

export const { makeLogin } = authSlice.actions;
// Other code such as selectors can use the imported `RootState` type

export default authSlice.reducer;
