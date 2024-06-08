import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postsSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    auth: authReducer,
  },
});

export default store;
