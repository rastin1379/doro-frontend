import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth } from "firebase/auth";

// Async thunk to fetch the token
export const fetchToken = createAsyncThunk("auth/fetchToken", async () => {
  const auth = getAuth();
  if (auth.currentUser) {
    return await auth.currentUser.getIdToken(true);
  }
  return null;
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    token: null,
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
  extraReducers: {
    [fetchToken.fulfilled]: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectAuthToken = (state) => state.auth.token;

export default authSlice.reducer;
