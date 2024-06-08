import React, { useState, useEffect } from "react";
import { AppBar, Avatar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";

import ducks from "../../images/duck_pic.jpg";
import Root from "./styles";
import { logout } from "../../features/auth/authSlice";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const Logout = () => {
    dispatch(logout(true));
    setUser(null);
    navigate("/");
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
        <div className="brandContainer">
          <Typography
            component={Link}
            to="/"
            className="heading"
            variant="h2"
            align="center"
          >
            Ducks
          </Typography>
          <img className="image" src={ducks} alt="memories" height="60" />
        </div>
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
