import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Community from "./pages/Community";
import Ranks from "./pages/Ranks";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/TNR/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/community" element={<Community />} />
      <Route path="/ranks" element={<Ranks />} />
    </Routes>
  );
};

export default RoutesComponent;
