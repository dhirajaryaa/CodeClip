import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

export default store = configureStore({
    reducer:{
        auth:authSlice
    }
})