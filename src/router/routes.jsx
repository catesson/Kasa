import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/404";
import Apropos from "../pages/a-propos";
import Logements from "../pages/logements";

function MyRouter() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logements" element={<Logements />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Routes>

  );
}
export default MyRouter