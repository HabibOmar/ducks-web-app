import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useNavigate } from 'react-router-dom';

import Root from './styles';
import { getPost, getPostsBySearch } from '../../features/posts/postsSlice';
import default_duck from '../../images/duck_pic.jpg';
import CommentSection from './CommentSection';

const PostDetails = () => {
  const { post, posts: { data: posts = [] }, status } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {

    dispatch(getPost(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (post) {
      dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
      }
    }, [post, dispatch]);

  const recommendedPosts = posts.filter(({ _id }) => _id !== post?._id).slice(0, 4);

  const openPosts = (_id) => navigate(`/posts/${_id}`);

  if (!post) return null;

  if (status === 'loading') {
    return (
      <Paper elevation={6} className='loadingPaper'>
        <CircularProgress size=""/>
      </Paper>
    );
  }

  

  return (
    <Root>
      <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
        <div className="card">
          <div className="section">
            <Typography variant="h3" component="h2">{post.title}</Typography>
            <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
            <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
            <Typography variant="h6">Created by: {post.name}</Typography>
            <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
            <Divider style={{ margin: '20px 0' }} />
            <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
            <Divider style={{ margin: '20px 0' }} />
            <CommentSection post={post}/>
            <Divider style={{ margin: '20px 0' }} />
          </div>
          <div className="imageSection">
            <img className="media" src={post.selectedFile || default_duck} alt={post.title} />
          </div>
        </div>
        {recommendedPosts.length > 0 && (
         <div className="section">
          <Typography gutterBottom variant="h5">You might also like:</Typography>
          <Divider />
          <div className="recommendedPosts">
            {recommendedPosts?.map(({ title, name, message, likes, selectedFile, _id }) => (
              <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openPosts(_id)} key={_id}>
                <Typography gutterBottom variant="h6">{title}</Typography>
                <Typography gutterBottom variant="subtitle2">{name}</Typography>
                <Typography gutterBottom variant="subtitle2">{message}</Typography>
                <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                <img src={selectedFile || default_duck} width="200px" alt="duck" />
              </div>
            ))}
              </div>
          </div> 
        )}
      </Paper>
    </Root>
  )
}

export default PostDetails
