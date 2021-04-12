import { makeLogout } from "@Module/SignIn/slice";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "@Services/api";
import { AsyncThunkAPIConfig } from "@Store/index";
import { AppState, ResponseFactoryRequest } from "./types";

export const fetchFactory = createAsyncThunk<ResponseFactoryRequest, void, AsyncThunkAPIConfig>(
    'user/fetchFactory',
    async (data, ThunkAPI) => {
        const { auth } = ThunkAPI.getState();
        try {
            const response = await api.get<ResponseFactoryRequest>('/fabricas', {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            console.log(response.data.data);
            return { data: response.data.data }

        } catch (error) {
            console.log(error);
            // if request is unauthorized, let user logout
            ThunkAPI.dispatch(makeLogout());
            return ThunkAPI.rejectWithValue({ error: 'Cannot fetch user Data' })
        }
    }
)

const initialState: AppState = {
    factory: [],
    showWelcomeToast: true
}
const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setShowToast: (state, { payload }: PayloadAction<{ showToast: boolean }>) => {
            state.showWelcomeToast = payload.showToast
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchFactory.fulfilled, (state, action) => {
            state.factory = action.payload.data
        })
    }
});


export const { setShowToast } = appSlice.actions
export default appSlice.reducer