import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SettingsSlice from "./reducers/SettingsSlice";
import UserSlice from "./reducers/user_slice";


const rootReducers = combineReducers({
    SettingsSlice,
    UserSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducers
    })
}

export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']