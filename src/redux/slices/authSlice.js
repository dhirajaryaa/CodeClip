import authServices from "@/services/authServices";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

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
export const signOut = createAsyncThunk(
  "auth/signOut",
  async (_, { rejectWithValue }) => {
    try {
     await authServices.userSignOut();
     
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
      state.user = action.payload;
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
      state.user = action.payload;
      toast("🎉 Welcome back!", {
        description: "You have successfully signed in.",
        action: {
          label: "Go to Dashboard",
          onClick: () => console.log("Navigating to dashboard"),
        },
      });
      
    });

    builder.addCase(signInWithEmailAndPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });

    builder.addCase(signOut.fulfilled, (state) => {
      state.isLoading = false;
      state.user = null;
      state.isAuth = false;
      state.isError = null;
      toast("👋 See you later!", {
        description: "You have successfully signed out.",
        action: {
          label: "",
          onClick: () => console.log("User has signed back in"),
        },
      });
      
    });
    builder.addCase(signOut.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export const { setUser } = AuthSlice.actions;
export default AuthSlice.reducer;
