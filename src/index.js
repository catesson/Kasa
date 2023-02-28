import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import MyRouter from "./router/routes";
import "./index.css";
import styled from "styled-components";

import Header from "./composents/Layout/Header";
import Footer from "./composents/Layout/Footer";


const StyleContent = styled.div`
    width:100%; 
    max-width:1240px;
    margin: 5px auto;
   min-height:75vh;
`
const StyledBody = styled.div`
min-width:375px;

`

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <Router>
      <StyledBody>
      <Header />
      <StyleContent>
      <MyRouter />
      </StyleContent>
      <Footer />
      </StyledBody>
    </Router>
  </React.StrictMode>
);
