import React from 'react';
import Post from './Post/Post';
import Root from './styles';

const Posts = () => {
    return (
        <>
            <Root>
            <h1>Posts</h1>
            <Post />
            <Post />
            </Root>
        </>
    );
}

export default Posts;   