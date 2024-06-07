import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@mui/material";

import Post from "./Post/Post";
import Root from "./styles";

const Posts = () => {
  const { posts = [], status } = useSelector((state) => state.posts);

  if (status === "loading") {
    return <CircularProgress />;
  }

  if (status === "failed") {
    return <div>Failed to load posts</div>;
  }

  return (
    <Root>
      <Grid
        className="mainContainer"
        container
        alignItems="stretch"
        spacing={3}
      >
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    </Root>
  );
};

export default Posts;
