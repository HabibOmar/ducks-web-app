import React from "react";
import Root from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpAltOutlined from "@mui/icons-material/ThumbUpAltOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";

import { useDispatch } from "react-redux";

import { deletePost, likePost } from "../../../features/posts/postsSlice";
import defaultImage from "../../../images/duck_pic.jpg";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const Likes = () => {
    if (post.likes.length > 0) {
      console.log(post.likes.length);
      return post.likes.find(
        (like) => like === (user?.result?.googleID || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;Like
        </>
      );
    }
    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  return (
    <Root>
      <Card className="card">
        <CardMedia
          className="media"
          image={post.selectedFile || defaultImage}
          title={post.title}
        />
        <div className="overlay">
          <Typography variant="h6">{post.name}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        {(user?.result?.googleID === post?.creator ||
          user?.result?._id === post?.creator) && (
          <div className="overlay2">
            <Button
              style={{ color: "white" }}
              size="small"
              onClick={() => setCurrentId(post._id)}
            >
              <MoreHorizIcon fontSize="default" />
            </Button>
          </div>
        )}
        <div className="details">
          <Typography variant="body2" color="textSecondary">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>
        <Typography className="title" variant="h5" gutterBottom>
          {post.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.message}
          </Typography>
        </CardContent>
        <CardActions className="cardActions">
          <Button
            size="small"
            color="primary"
            disabled={!user?.result}
            onClick={() => dispatch(likePost(post._id))}
          >
            <Likes />
          </Button>
          {(user?.result?.googleID === post?.creator ||
            user?.result?._id === post?.creator) && (
            <Button
              size="small"
              color="primary"
              onClick={() => dispatch(deletePost(post._id))}
            >
              <DeleteIcon fontSize="small" />
              Delete
            </Button>
          )}
        </CardActions>
      </Card>
    </Root>
  );
};

export default Post;
