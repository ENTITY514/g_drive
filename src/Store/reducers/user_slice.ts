import { cryptico, RSAKey } from "@daotl/cryptico";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../models/User";

const initialState: IUser = {
    name: "",
    data: "",
    files: [],
    id: ""
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
        },
        set_id: (state, action) => {
            state.id = action.payload
        },
        updateFIles: () => {
            let Data: { name: string, data: string, id: string }[] = []
            const Documents = localStorage.getItem("documents")
            if (Documents !== null) {
                Data = JSON.parse(Documents) as Array<{ name: string, data: string, id: string }>
            }
            const key: RSAKey = cryptico.generateRSAKey("iman", 1024)
            Data.map((file) => {
                const name = cryptico.decrypt(file.name, key) as { status: string, plaintext: string }
                return ({ name: name, data: file.data, id: file.id })
            })
        }
    }
})
export const { set_name, set_data, set_id } = userSlice.actions
export default userSlice.reducer;