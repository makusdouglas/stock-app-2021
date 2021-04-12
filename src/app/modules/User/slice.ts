import { fetchFactory } from "@Module/Application/slice";
import { Factory, ResponseFactoryRequest } from "@Module/Application/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { notification } from "antd";
import api from "../../../services/api";
import { DispatchThunk, RootState } from "../../store";
import { makeLogout } from "../SignIn/slice";
import { IUserState, ResponseUserRequest } from "./types";


// Async Thunks
export const fetchUserData = createAsyncThunk<
    ResponseUserRequest,
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
            const response = await api.get<ResponseUserRequest>('/users/me', {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            console.log(response.data.data);
            const factory = await ThunkAPI.dispatch(fetchFactory());
            if (factory.meta.requestStatus === 'rejected') {
                return ThunkAPI.rejectWithValue({ error: 'Cannot Fech Factory data' })
            }
            return response.data

        } catch (error) {
            console.log(error);
            // if request is unauthorized, let user logout
            ThunkAPI.dispatch(makeLogout());
            return ThunkAPI.rejectWithValue({ error: 'Cannot fetch user Data' });
        }
        // return response.data.data
    }
);



const initialState: IUserState = {
    id: null,
    email: '',
    name: '',
    permissions: [],
    fabrica: null,
    birth: null,
    loading: false,
    initials: 'PT',
    firstName: null,
    lastName: null,
    active: false
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        alterFactory: (state, { payload }: PayloadAction<{ factoryId: number }>) => {
            state.fabrica = payload.factoryId;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchUserData.pending, (state) => {
            state.loading = 'pending';
        })
        builder.addCase(fetchUserData.rejected, (state) => {
            state.loading = 'failed';
        })

        builder.addCase(fetchUserData.fulfilled, (state, { payload }) => {
            state.id = payload.data.id;
            state.email = payload.data.email;
            state.name = payload.data.full_name;
            state.fabrica = payload.data.codfabrica;
            state.birth = payload.data.data_nascimento;
            state.active = (payload.data.status === '1')

            // Split Initials of name
            let splitedName = payload.data.name.trim().split(' ');
            let firstName = splitedName[0];
            let lastName = splitedName[splitedName.length - 1];
            let firstLetter = firstName[0];
            let secondLetter = firstName === lastName ? firstName[1] : lastName[0];
            state.initials = `${firstLetter + secondLetter}`;
            state.firstName = firstName;
            state.lastName = lastName;

            state.loading = 'succeeded';

            notification.success({
                message: `Olá, ${state.name}!`,
                description: 'Seja bem vindo(a) ao Petruz Web 2.0.'
            });
        })
    }
});

export const { alterFactory } = userSlice.actions;
export default userSlice.reducer;
