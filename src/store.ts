
import { combineReducers, legacy_createStore } from "redux";
import { appReducer } from "./appReducer";

const rootReducer = combineReducers({
    counts: appReducer
})

export const store = legacy_createStore(rootReducer)

export type RootState  = ReturnType<typeof store.getState>


//@ts-ignore
window.store = store