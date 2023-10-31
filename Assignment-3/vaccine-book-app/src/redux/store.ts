import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux"
import bookSlice from "./features/bookSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "rootPersist",
    storage
}

const rootPersist = combineReducers({bookSlice})
const reduxPersistedReducer = persistReducer(persistConfig, rootPersist)


export const store = configureStore({
    reducer: reduxPersistedReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

