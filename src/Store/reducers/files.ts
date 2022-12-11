import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../models/User";

const initialState: IUser = {
    name: "user",
    is_auth: false
}

export const FileSlice = createSlice({
    name: 'file',
    initialState,
    reducers: {
        create: () => {

        }
    }
})

export default FileSlice.reducer;