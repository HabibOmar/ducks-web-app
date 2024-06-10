import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@mui/material";
import { MuiChipsInput } from "mui-chips-input";

import Root from "./styles";
import { useNavigate, useLocation } from "react-router-dom";
import { getPostsBySearch } from "../../features/posts/postsSlice";
import Pagination from "../Pagination";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const query = useQuery();
  const navigate = useNavigate();
  const page = query.get("page") || 1;
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchPost();
    }
  };

  const handleChange = (value) => {
    setTags(value);
  };

  const searchPost = () => {
    if (search.trim() || tags.length > 0) {
      dispatch(getPostsBySearch({ search: search, tags: tags.join(",") }));
      navigate(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      navigate("/");
    }
  };

  return (
    <Root>
      <Grow in>
        <Container maxWidth="xl">
          <Grid
            className="GridContainer"
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7} md={9}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppBar
                className="AppBarSearch"
                position="static"
                color="inherit"
                style={{ borderRadius: 5, marginBottom: "30px" }}
              >
                <TextField
                  name="search"
                  variant="outlined"
                  label="Search Memories"
                  onKeyDown={handleKeyPress}
                  fullWidth
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <MuiChipsInput
                  style={{ margin: "10px 0" }}
                  label="Search Tags"
                  variant="outlined"
                  value={tags}
                  onChange={handleChange}
                />
                <Button
                  className="searchButton"
                  color="primary"
                  variant="contained"
                  onClick={searchPost}
                >
                  Search
                </Button>
              </AppBar>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
              <Paper elevation={6} className="Pagination">
                <Pagination page={page} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Root>
  );
};

export default Home;
