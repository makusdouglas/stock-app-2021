import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../services/api';
import type { AppDispatch, RootState } from '../../store/index';
import { SignInPayload } from './types';

// Define a type for the slice state
interface AuthState {
    value: number,
    email: string | null,
    password: string | null,
    isAuthenticated: boolean
}

// Define the initial state using that type
const initialState = {
    value: 0,
    email: null,
    password: null,
    isAuthenticated: false
} as AuthState

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
    extraReducers: {
    }
})

const requestLogin = createAsyncThunk<
    // Return type of the payload creator
    {
        access_token: string,
    },
    // First argument to the payload creator
    {
        email: string,
        password: string
    },
    {
        // Optional fields for defining thunkApi field types
        dispatch: AppDispatch
        state: AuthState,
        extra: {
        },
        rejectValue: {
            error: string
        }

    }
>(
    'auth/requestLogin',
    async (userData, thunkApi) => {
        const { email, password } = userData;
        try {
            const response = await api.post('/oauth', {
                email,
                password
            })
            const { access_token } = response.data;
            return { access_token }
        } catch (err) {
            return thunkApi.rejectWithValue({ error: 'falha no login' })
        }
    },
    {

    }
)

export const { makeLogin } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.auth

export default authSlice.reducer