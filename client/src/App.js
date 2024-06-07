import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import ducks from "./images/duck_pic.jpg";
import Root from "./styles"; // Update the import path as necessary
import { getPosts } from "./features/posts/postsSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Root>
        <AppBar className="appBar" position="static" color="inherit">
          <Typography className="heading" variant="h2" align="center">
            Ducks
          </Typography>
          <img className="image" src={ducks} alt="memories" height="60" />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Root>
    </Container>
  );
};

export default App;
