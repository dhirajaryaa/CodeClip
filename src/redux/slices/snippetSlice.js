import { auth } from "@/firebase/firebase";
import snippetServices from "@/services/snippetServices";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDBLoading: false,
  snippets: [],
  mySnippets: [],
  isError: null,
};

// add new snippet to db
export const addSnippet = createAsyncThunk("snippet/addSnippet", async ({title,desc,selectedLanguage,code,tags,viability,uid},{rejectWithValue}) => {
  try {
    const res = await snippetServices.addSnippet({
      title,
      description:desc,
      language:selectedLanguage,
      code,
      tags,
      isPublic: viability,
      userId: auth.currentUser.uid,
      createdAt: new Date().toString(),
    });
    console.log(res);
    
    return res.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})

// get single snippet by id
export const getSnippet = createAsyncThunk("snippet/getSnippet", async ({docId}, { rejectWithValue }) => {
  try {
    const res = await snippetServices.getSnippet(docId);
    return res.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// get all snippets form db 
export const getSnippets = createAsyncThunk("snippet/getSnippets", async (_, { rejectWithValue }) => {
  try {
    const res = await snippetServices.getSnippets();
    return res.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})

export const getUserSnippets = createAsyncThunk("snippet/getUserSnippets", async ({uid}, { rejectWithValue }) => {
try {
  const res = await snippetServices.getUserSnippets(uid);
  return res.data;
} catch (error) {
  return rejectWithValue(error.message);
}
})

// snippet update 
export const updateSnippet = createAsyncThunk("snippet/updateSnippet", async ({docId, data}, { rejectWithValue }) => {
  try {
    const res = await snippetServices.updateSnippet(docId, data);
    return res.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})

// remove snippet 
export const removeSnippet = createAsyncThunk("snippet/removeSnippet", async ({docId}, { rejectWithValue }) => {
  try {
    const res = await snippetServices.removeSnippet(docId);
    return res.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})

const snippetSlice  = createSlice({
  name:"snippet",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(addSnippet.pending, (state) => {
      state.isDBLoading = true;
      state.isError = null;
    });
    builder.addCase(addSnippet.fulfilled, (state, action) => {
      state.isDBLoading = false;
      state.isError = null;
      state.snippets.push(action.payload);
    });
    builder.addCase(addSnippet.rejected, (state, action) => {
      state.isDBLoading = false;
      state.isError = action.payload;
    });
    builder.addCase(getSnippet.pending, (state) => {
      state.isDBLoading = true;
      state.isError = null;
    });
    builder.addCase(getSnippet.fulfilled, (state, action) => {
      state.isDBLoading = false;
      state.isError = null;
      state.snippets = action.payload;
    });
    builder.addCase(getSnippet.rejected, (state, action) => {
      state.isDBLoading = false;
      state.isError = action.payload;
    });
    builder.addCase(getSnippets.pending, (state) => {
      state.isDBLoading = true;
      state.isError = null;
    });
    builder.addCase(getSnippets.fulfilled, (state, action) => {
      state.isDBLoading = false;
      state.isError = null;
      state.snippets = action.payload;
    });
    builder.addCase(getSnippets.rejected, (state, action) => {
      state.isDBLoading = false;
      state.isError = action.payload;
    });
    builder.addCase(getUserSnippets.pending, (state) => {
      state.isDBLoading = true;
      state.isError = null;
    });
    builder.addCase(getUserSnippets.fulfilled, (state, action) => {
      state.isDBLoading = false;
      state.isError = null;
      state.mySnippets = action.payload;
    });
    builder.addCase(getUserSnippets.rejected, (state, action) => {
      state.isDBLoading = false;
      state.isError = action.payload;
    });
    builder.addCase(updateSnippet.pending, (state) => {
      state.isDBLoading = true;
      state.isError = null;
    });
    builder.addCase(updateSnippet.fulfilled, (state, action) => {
      state.isDBLoading = false;
      state.isError = null;
      state.snippets = action.payload;
    });
    builder.addCase(updateSnippet.rejected, (state, action) => {
      state.isDBLoading = false;
      state.isError = action.payload;
    });
    builder.addCase(removeSnippet.pending, (state) => {
      state.isDBLoading = true;
      state.isError = null;
    });
    builder.addCase(removeSnippet.fulfilled, (state, action) => {
      state.isDBLoading = false;
      state.isError = null;
      state.snippets = action.payload;
    });
    builder.addCase(removeSnippet.rejected, (state, action) => {
      state.isDBLoading = false;
      state.isError = action.payload;
    });
  },
})


export const {} = snippetSlice.actions;
export default snippetSlice.reducer;