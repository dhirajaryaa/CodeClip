import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import uiSlice from "./slices/uiSlice";

const store = configureStore({
    reducer:{
        auth:authSlice,
        ui:uiSlice
    }
})

export default store