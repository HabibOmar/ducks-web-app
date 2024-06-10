import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/index.js";

// Async Thunks
export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (page, thunkAPI) => {
    try {
      const { data } = await api.fetchPosts(page);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPostsBySearch = createAsyncThunk(
  "posts/getPostsBySearch",
  async (searchQuery, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await api.fetchPostsBySearch(searchQuery);

      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (post, thunkAPI) => {
    try {
      const { data } = await api.createPost(post);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async ({ id, post }, thunkAPI) => {
    try {
      const { data } = await api.updatePost(id, post);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const likePost = createAsyncThunk(
  "posts/likePost",
  async (id, thunkAPI) => {
    try {
      const { data } = await api.likePost(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id, thunkAPI) => {
    try {
      await api.deletePost(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Slice
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: { data: [], currentPage: 1, numberOfPages: 1 },
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.data.push(action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const index = state.posts.data.findIndex(
          (post) => post._id === action.payload._id
        );
        if (index !== -1) {
          state.posts.data[index] = action.payload;
        }
      })
      .addCase(likePost.fulfilled, (state, action) => {
        const index = state.posts.data.findIndex(
          (post) => post._id === action.payload._id
        );
        if (index !== -1) {
          state.posts.data[index] = action.payload;
        }
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts.data = state.posts.data.filter(
          (post) => post._id !== action.payload
        );
      })
      .addCase(getPostsBySearch.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPostsBySearch.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts.data = action.payload;
      })
      .addCase(getPostsBySearch.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default postsSlice.reducer;
