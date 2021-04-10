import { makeLogout } from "@Module/SignIn/slice";
import { requestFabricas } from "@Module/User/slice";
import { ResponseUserRequest } from "@Module/User/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '@Services/api';
import { DispatchThunk, RootState } from "@Store/index";

const fetchUserData = createAsyncThunk<
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
            const factory = await ThunkAPI.dispatch(requestFabricas());
            if (factory.meta.requestStatus === 'rejected') {
                return ThunkAPI.rejectWithValue({ error: 'Cannot Fech Factory data' })
            }
            return response.data;

        } catch (error) {
            console.log(error);
            // if request is unauthorized, let user logout
            ThunkAPI.dispatch(makeLogout());
            return ThunkAPI.rejectWithValue({ error: 'Cannot fetch user Data' });
        }
        // return response.data.data
    }
);

export default fetchUserData