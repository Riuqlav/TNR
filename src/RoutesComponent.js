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
      <Route path="/TNR" element={<Home />} />
      <Route path="/TNR/articles" element={<Articles />} />
      <Route path="/TNR/community" element={<Community />} />
      <Route path="/TNR/ranks" element={<Ranks />} />
      <Route path="/TNR/vocabulary" element={<Vocabulary />} />
    </Routes>
  );
};

export default RoutesComponent;
