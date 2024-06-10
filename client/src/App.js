import React from "react";
import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import PostDetails from "./components/PostDetails/PostDetails";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const ProtectedRoute = ({ user, children }) => {
    return user ? <Navigate to="/posts" /> : children;
  };

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <GoogleOAuthProvider clientId="883471662137-md1iq7v7k059mcf86q7ksqti50657tvd.apps.googleusercontent.com">
          <Routes>
            <Route path="/" element={<Navigate to="/posts" />} />
            <Route path="/posts" element={<Home />} />
            <Route path="/posts/search" element={<Home />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route
              path="/auth"
              element={
                <ProtectedRoute user={user}>
                  <Auth />
                </ProtectedRoute>
              }
            />
          </Routes>
        </GoogleOAuthProvider>
      </Container>
    </BrowserRouter>
  );
};

export default App;
