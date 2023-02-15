import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import MyRouter from "./router/routes";
import Header from "./composents/header";
import Footer from "./composents/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <MyRouter />
      <Footer />
    </Router>
  </React.StrictMode>
);
