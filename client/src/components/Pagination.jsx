import React from "react";
import { Pagination, PaginationItem } from '@mui/material';
import { Link } from "react-router-dom";

import Root from "./styles";

const Paginate = () => {
    return (
        <Root>
        <Pagination className="ul" count={5} page={1} variant="outlined" color="primary" renderItem={(item)=>(
            <PaginationItem {...item} component={Link} to={`/posts?page=${1}`} />
        )} />
        </Root>
    );
};

export default Paginate;