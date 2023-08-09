import React from 'react';
import {Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Articles from './pages/Articles';
import Community from './pages/Community';
import Ranks from './pages/Ranks';
import Vocabulary from './pages/Vocabulary';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/community" element={<Community />} />
      <Route path="/ranks" element={<Ranks />} />
      <Route path="/vocabulary" element={<Vocabulary />} />
    </Routes>
  );
};

export default RoutesComponent;
