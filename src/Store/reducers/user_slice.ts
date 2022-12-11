import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../models/User";

const initialState: IUser = {
    name: "user",
    is_auth: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        auth_in(state){
            state.is_auth = true
        },
        auth_out(state){
            state.is_auth = false
        }
    }
})

export default userSlice.reducer;