import authServices from "@/services/authServices";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuth: false,
  isLoading: false,
  isError: null,
};

export const transformData = (user) => {
  if (!user) return null; // Handle case where user is null or undefined

  return {
    uid: user.uid,
    name: user.displayName || "",
    email: user.email || "",
    photoUrl: user.photoURL || "",
  };
};

export const signInWithEmailAndPassword = createAsyncThunk(
  "auth/signin",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const user = await authServices.emailPasswordSignIn(email, password);
      return transformData(user);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAuth = true;
      state.user = transformData(action.payload);
    },
    signOut: (state) => {
      state.isAuth = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInWithEmailAndPassword.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });

    builder.addCase(signInWithEmailAndPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = null;
      state.isAuth = true;
      console.log(action.payload);

      state.user = action.payload;
    });

    builder.addCase(signInWithEmailAndPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export const { setUser, signOut } = AuthSlice.actions;
export default AuthSlice.reducer;
