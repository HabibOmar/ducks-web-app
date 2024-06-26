import React, { useEffect } from "react";
import { Pagination, PaginationItem } from '@mui/material';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "../features/posts/postsSlice";

import Root from "./styles";

const Paginate = ({page}) => {
    const { numberOfPages } = useSelector((state) => state.posts.posts);

    const dispatch = useDispatch();
    useEffect(() => {
        if(page) {
            dispatch(getPosts(page));
        }
    }, [page, dispatch]);

    return (
        <Root>
        <Pagination className="ul" count={numberOfPages} page={Number(page) || 1} variant="outlined" color="primary" renderItem={(item)=>(
            <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
        )} />
        </Root>
    );
};

export default Paginate;