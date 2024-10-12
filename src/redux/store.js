import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import uiSlice from "./slices/uiSlice";
import snippetSlice from "./slices/snippetSlice";

const store = configureStore({
    reducer:{
        auth:authSlice,
        ui:uiSlice,
        snippet:snippetSlice
    }
})

export default store