import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stacking from './pages/Stacking';
import Dashboard from './pages/Dashboard';
const App = () => {


  return (
    <Router>

    <div className="">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/stacking" element={<Stacking />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 

        </Routes>
     
      
    </div>
    </Router>

  )
}

export default App