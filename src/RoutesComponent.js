import React from 'react';
import {Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Articles from './pages/Articles';
import Projects from './pages/Projects';
import Ranks from './pages/Ranks';
import Vocabulary from './pages/Vocabulary';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/TNR" element={<Home />} />
      <Route path="/TNR/articles" element={<Articles />} />
      <Route path="/TNR/projects" element={<Projects />} />
      <Route path="/TNR/ranks" element={<Ranks />} />
      <Route path="/TNR/vocabulary" element={<Vocabulary />} />
    </Routes>
  );
};

export default RoutesComponent;
