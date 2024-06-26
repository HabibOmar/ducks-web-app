import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import Root from "./styles";
import { TextField, Button, Typography, Paper } from "@mui/material";
import {
  createPost,
  getPosts,
  updatePost,
} from "../../features/posts/postsSlice";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const post = useSelector((state) =>
    currentId ? state.posts.posts.data.find((p) => p._id === currentId) : null
  );

  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(
        updatePost({
          id: currentId,
          post: { ...postData, name: user?.result?.name },
        })
      );
      dispatch(getPosts());
    } else {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
    }
    clear();
  };

  if (!user?.result?.name) {
    return (
      <Paper className="paper" elevation={6}>
        <Typography variant="h6" align="center">
          Please sign in to create your own memories and like other's memories.
        </Typography>
      </Paper>
    );
  }

  return (
    <Root>
      <Paper className="paper" elevation={6}>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Typography variant="h6">
            {currentId ? "Editing" : "Creating"} a Duck Memory
          </Typography>
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <TextField
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            multiline
            rows={4}
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
          <TextField
            name="tags"
            variant="outlined"
            label="Tags (coma separated)"
            fullWidth
            value={postData.tags}
            onChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(",") })
            }
          />
          <div className="fileInput">
            <FileBase
              name="selectedFile"
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          <Button
            className="buttonSubmit"
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </Root>
  );
};

export default Form;
