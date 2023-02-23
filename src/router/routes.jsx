import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/404";
import About from "../pages/about";
import Logements from "../pages/Logements";
import data from "../data/logements.json"


function MyRouter() {

  const logements = data.map((logement) => 
  <Route key={logement.id} path={"/logements/"+logement.id} element={<Logements logementID={logement.id}/>} />)
  return (
   <Routes>
        <Route path="/" element={<Home />} />
        {logements}
        <Route path="/a-propos" element={<About />} />
        <Route path="*" element={<Error />} />

      </Routes>

  );
}
export default MyRouter;
