import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import MyRouter from "./router/routes";

import styled from "styled-components";

import Header from "./composents/Layout/Header";
import Footer from "./composents/Layout/Footer";


const StyleContent = styled.div`
    width:100%; 
    max-width:1240px;
    margin: 5px auto;
    height:auto;
`

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <StyleContent>
      <MyRouter />
      </StyleContent>
      <Footer />
    </Router>
  </React.StrictMode>
);
