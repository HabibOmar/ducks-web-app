import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import * as api from "../../api/index.js";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authData: null,
  },
  reducers: {
    auth: (state, action) => {
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));

      return { ...state, authData: action?.payload };
    },
    logout: (state) => {
      localStorage.clear();

      return { ...state, authData: null };
    },
  },
});

export const { auth, logout } = authSlice.actions;
export default authSlice.reducer;
