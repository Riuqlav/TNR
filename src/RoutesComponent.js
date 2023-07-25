import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Ranks from './pages/Ranks';
import Vocabulary from './pages/Vocabulary';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/ranks" element={<Ranks />} />
      <Route path="/vocabulary" element={<Vocabulary />} />
    </Routes>
  );
};

export default RoutesComponent;
