import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { notification } from "antd";
import api from "../../../services/api";
import { DispatchThunk, RootState } from "../../store";
import { makeLogout } from "../auth/slice";
import { IUserState, RequestUserResponseType } from "./types";

// Async Thunks
export const requestUserData = createAsyncThunk<
    RequestUserResponseType,
    void,
    {
        state: RootState,
        dispatch: DispatchThunk
    }
>(
    'user/requestUserData',
    async (_data, ThunkAPI) => {
        const { auth } = ThunkAPI.getState();



        try {
            const response = await api.get<RequestUserResponseType>('/users/me', {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            console.log(response.data.data);
            return response.data;

        } catch (error) {
            console.log(error);
            // if request is unauthorized, let user logout
            ThunkAPI.dispatch(makeLogout());
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
    loading: false,
    initials: 'PT'
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
        userFetchSucceeded: (state, { payload }: PayloadAction<IUserState>) => {
            state.name = payload.name;
            state.email = payload.email;
            state.fabrica = payload.fabrica;
            state.permissions = payload.permissions;
            state.loading = 'succeeded';
        }
    },
    extraReducers: builder => {
        builder.addCase(requestUserData.pending, (state) => {
            state.loading = 'pending';
        })
        builder.addCase(requestUserData.rejected, (state) => {
            state.loading = 'failed';
        })

        builder.addCase(requestUserData.fulfilled, (state, { payload }) => {
            state.email = payload.data.email;
            state.name = payload.data.full_name;
            state.fabrica = payload.data.codfabrica;
            state.birth = payload.data.data_nascimento;
            state.loading = 'succeeded';

            // Split Initials of name
            let splitedName = payload.data.name.trim().split(' ');
            let firstName = splitedName[0];
            let lastName = splitedName[splitedName.length - 1];
            let firstLetter = firstName[0];
            let secondLetter = firstName === lastName ? firstName[1] : lastName[0];
            state.initials = `${firstLetter + secondLetter}`;

            notification.success({
                message: `Olá, ${state.name}!`,
                description: 'Seja bem vindo(a) ao Petruz Web 2.0.'
            });
        })
    }
});

export const { userFetchFailed, userFetchSucceeded, userfetchLoading } = userSlice.actions;
export default userSlice.reducer;
