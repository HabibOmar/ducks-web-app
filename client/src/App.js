import React from "react";
import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <GoogleOAuthProvider clientId="883471662137-md1iq7v7k059mcf86q7ksqti50657tvd.apps.googleusercontent.com">
          <Routes>
            <Route path="/" exact element={<Home />} />

            <Route path="/auth" element={<Auth />} />
          </Routes>
        </GoogleOAuthProvider>
      </Container>
    </BrowserRouter>
  );
};

export default App;
