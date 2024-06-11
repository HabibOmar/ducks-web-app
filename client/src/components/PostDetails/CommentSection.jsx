import React, {useState, useRef} from "react";
import {Typography, TextField, Button} from "@mui/material";
import {useDispatch} from "react-redux";

import Root from "./styles"
import {commentPost} from "../../features/posts/postsSlice";

const CommentSection = ({post}) => {
    const dispatch = useDispatch();
    // const commentsRef = useRef();

    const [comments, setComments] = useState(post?.comments);
    const [comment, setComment] = useState("");
    const user = JSON.parse(localStorage.getItem("profile"));

    const handleComment = async (e) => {
        e.preventDefault();
        const finalComment = `${user.result.name}: ${comment}`;
        const newComments = await dispatch(commentPost({id: post._id, comment: finalComment}));
        setComments(newComments);
        // commentsRef.current.scrollIntoView({behavior: "smooth"});
    };

    return (
        <Root>
            <div>
                <div className="commentOuterContainer">
                    <div className="commentsInnerContainer">
                        <Typography gutterBottom variant="h6">Comments</Typography>
                        {comments.map((c, i) => (
                            <Typography key={i} gutterBottom variant="subtitle1">
                                <strong>{c.split(": ")[0]}</strong> :{c.split(":")[1]}
                            </Typography>
                        ))}
                    </div>
                    {/* <div ref={commentsRef}/> */}
                    {user?.result?.name && (
                        <div style={{width:"70%"}}>
                        <Typography gutterBottom variant="h6">Leave a Comment</Typography>
                        <TextField
                            fullWidth
                            rows={4}
                            variant="outlined"
                            label="Comment"
                            multiline
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <Button style={{marginTop: '10px'}} fullWidth disabled={!comment} variant="contained" color="primary" onClick={handleComment}>
                            Comment
                        </Button>
                        </div>
                    )}
                </div>
            </div>
        </Root>
    )
}

export default CommentSection;