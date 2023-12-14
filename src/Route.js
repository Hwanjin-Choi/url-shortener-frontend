// src/Router.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import UrlMainPage from "./views/UrlMainPage";
import UrlRedirectPage from "./views/UrlRedirectPage";
const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<UrlMainPage />} />
      <Route path="/:shortUrl" element={<UrlRedirectPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
