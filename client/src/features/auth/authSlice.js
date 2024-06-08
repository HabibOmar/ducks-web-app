import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/index.js";

export const login = createAsyncThunk(
  "user/login",
  async (formData, thunkAPI) => {
    try {
      const { data } = await api.login(formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signup = createAsyncThunk(
  "user/signup",
  async (formData, thunkAPI) => {
    try {
      const { data } = await api.signUp(formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authData: null,
    status: "idle",
    error: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "logging in";
      })
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
        state.status = "signed in";
        state.authData = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "sign in failed";
        state.error = action.error.message;
      })
      .addCase(signup.pending, (state) => {
        state.status = "signing up";
      })
      .addCase(signup.fulfilled, (state, action) => {
        localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
        state.status = "signed up";
        state.authData = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = "sign up failed";
        state.error = action.error.message;
      });
  },
});

export const { auth, logout } = authSlice.actions;
export default authSlice.reducer;
