import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice"

const store = configureStore({
    reducer: {
        slice: slice
    }
})
export type AppDispatch = typeof store.dispatch;

export default store;