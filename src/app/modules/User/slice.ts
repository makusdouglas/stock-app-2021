/** @format */

import { fetchFactory } from '@Module/Application/slice';
import { Factory, ResponseFactoryRequest } from '@Module/Application/types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { notification } from 'antd';
import api from '../../../services/api';
import { DispatchThunk, RootState } from '../../store';
import { makeLogout } from '../SignIn/slice';
import { IUserState, ResponseUserRequest } from './types';

// Async Thunks
export const fetchUserData = createAsyncThunk<
  ResponseUserRequest,
  void,
  {
    state: RootState;
    dispatch: DispatchThunk;
  }
>('user/requestUserData', async (_data, ThunkAPI) => {
  const { auth } = ThunkAPI.getState();
  try {
    const response = await api.get<ResponseUserRequest>('/users/me', {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    // if request is unauthorized, let user logout
    ThunkAPI.dispatch(makeLogout());
    return ThunkAPI.rejectWithValue({ error: 'Cannot fetch user Data' });
  }
  // return response.data.data
});

const initialState: IUserState = {
  id: null,
  email: '',
  name: '',
  roles: [],
  fabrica: null,
  birth: null,
  loading: false,
  initials: 'PT',
  firstName: null,
  lastName: null,
  active: false,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    alterFactory: (
      state,
      { payload }: PayloadAction<{ factoryId: number }>
    ) => {
      state.fabrica = payload.factoryId;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUserData.pending, state => {
      state.loading = 'pending';
    });
    builder.addCase(fetchUserData.rejected, state => {
      state.loading = 'failed';
    });

    builder.addCase(fetchUserData.fulfilled, (state, { payload }) => {
      state.id = payload.id;
      state.email = payload.email;
      state.fabrica = payload.codfabrica;
      state.birth = payload.birth;
      state.name = (payload.firstname + ' ' + payload.lastname).toUpperCase();
      state.active = true;

      // format firstname and lastaname
      let firstName = payload.firstname.toLowerCase().split(' ')[0];
      let lastNameSplitted = payload.lastname.toLowerCase().split(' ');
      let lastName = lastNameSplitted[lastNameSplitted.length - 1];
      firstName = firstName[0].toUpperCase() + firstName.substr(1);
      lastName = lastName[0].toUpperCase() + lastName.substr(1);
      state.firstName = firstName;
      state.lastName = lastName;

      // format initials
      let firstLetter = firstName[0].toUpperCase();
      let secondLetter = (firstName === lastName
        ? firstName[1]
        : lastName[0]
      ).toUpperCase();
      state.initials = `${firstLetter + secondLetter}`;

      state.loading = 'succeeded';

      notification.success({
        message: `Olá, ${state.firstName} ${state.lastName}!`,
        description: 'Seja bem vindo(a) ao STOK app',
      });
    });
  },
});

export const { alterFactory } = userSlice.actions;
export default userSlice.reducer;
