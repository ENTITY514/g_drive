import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../models/User";

const initialState: IUser = {
    name: "",
    data: ""
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        set_name: (state, action) => {
            state.name = action.payload
        },
        set_data: (state, action) => {
            state.data = action.payload
        }
    }
})
export const { set_name, set_data } = userSlice.actions
export default userSlice.reducer;