import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuth: false,
  isLoading: false,
  isError: null,
};

const AuthSlice = createSlice({
  name: auth,
  initialState,
  reducers: {
    setUser: (state,action) => {
      state.user = action.payload
    },
  },
  extraReducers: {

  },
});

export const {setUser} = AuthSlice.actions;
export default AuthSlice.reducer;
