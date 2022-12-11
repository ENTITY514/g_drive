import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Files } from "../models/Files";

const initialState: Files = {
    name: "",
    data: ""
}

export const FileSlice = createSlice({
    name: 'file',
    initialState,
    reducers: {
    }
})

export default FileSlice.reducer;