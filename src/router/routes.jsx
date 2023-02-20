import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/404";
import About from "../pages/about";
import Logements from "../pages/Logements";


function MyRouter() {
  return (
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logements" element={<Logements />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>

  );
}
export default MyRouter;
