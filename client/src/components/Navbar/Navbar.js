import React, { useState, useEffect } from "react";
import { AppBar, Avatar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";

import kinfe_duck from "../../images/duck2.png";
import Root from "./styles";
import { logout } from "../../features/auth/authSlice";
import { getPosts } from "../../features/posts/postsSlice";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const Logout = () => {
    dispatch(logout());
    localStorage.clear();
    setUser(null);
    dispatch(getPosts());
    console.log("logout");
    navigate("/");
  };

  useEffect(
    (Logout, user) => {
      const token = user?.token;

      if (token) {
        const decodedToken = jwtDecode(token);

        if (decodedToken.exp * 1000 < new Date().getTime()) Logout();
      }
      setUser(JSON.parse(localStorage.getItem("profile")));
    },
    [location]
  );

  return (
    <Root>
      <AppBar className="appBar" position="static" color="inherit">
        <Link to="/" className="brandContainer">
          <img className="image" src={kinfe_duck} alt="memories" height="60" />
          <Typography className="heading" variant="h2" align="center">
            Ducks
          </Typography>
        </Link>
        <Toolbar className="toolbar">
          {user ? (
            <div className="profile">
              <Avatar
                className="purple"
                alt={user.result.name}
                src={user.result.picture}
              >
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography className="userName" variant="h6">
                {user.result.name}
              </Typography>
              <Button
                variant="contained"
                className="logout"
                color="secondary"
                onClick={Logout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Root>
  );
};

export default Navbar;
