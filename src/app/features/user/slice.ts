import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../../services/api";
import { useAppSelector } from "../../store/hooks";
import { IUserState, RequestUserResponseType } from "./types";

// Async Thunks
export const requestUserData = createAsyncThunk(
    'user/requestUserData',
    async (data, ThunkAPI) => {
        const auth = useAppSelector(state => state.auth);

        try {
            const response = await api.get<RequestUserResponseType>('/users/me', {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });

            return response.data

        } catch (error) {
            return ThunkAPI.rejectWithValue({ error: 'Cannot fetch user Data' })

        }
        // return response.data.data
    }
);





const initialState: IUserState = {
    email: '',
    name: '',
    permissions: [],
    fabrica: null,
    birth: null,
    loading: false
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userfetchLoading: (state, action) => {
            state.loading = 'pending';
        },
        userFetchFailed: (state) => {
            state.loading = 'failed'
        },
        userFetchSucceeded: (state, { payload }: PayloadAction<{ name: string, email: string, fabrica: number, permissions: string[] }>) => {
            state.name = payload.name;
            state.email = payload.email;
            state.fabrica = payload.fabrica;
            state.permissions = payload.permissions;
            state.loading = 'succeeded';
        }
    },
    extraReducers: builder => {
        builder.addCase(requestUserData.fulfilled, (state, action) => {
            state.email = action.payload.data.email;
            state.name = action.payload.data.full_name;
            state.fabrica = action.payload.data.codfabrica;
            state.birth = new Date(action.payload.data.data_nascimento);
        })
    }
});

export const { userFetchFailed, userFetchSucceeded, userfetchLoading } = userSlice.actions;
export default userSlice.reducer;
