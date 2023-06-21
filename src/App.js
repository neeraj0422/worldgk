import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Asia from './components/Asia';
import Africa from './components/Africa';
import Antarctica from './components/Antarctica';
import Europe from './components/Europe';
import NorthAmerica from './components/North America';
import SouthAmerica from './components/South America';
import Aus from './components/Aus';
import './styles.css';

const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Asia" element={<Asia />} />
        <Route path="/Africa" element={<Africa />} />
        <Route path="/Europe" element={<Europe />} />
        <Route path="/Aus" element={<Aus />} />
        <Route path="/Antarctica" element={<Antarctica />} />
        <Route path="/NorthAmerica" element={<NorthAmerica />} />
        <Route path="/SouthAmerica" element={<SouthAmerica />} />
      </Routes>
      
    </Router>
  );
};

export default App;
