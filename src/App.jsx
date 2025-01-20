import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stacking from './pages/Stacking';
import Footer from './components/Footer';




const App = () => {


  return (
    <Router>

    <div className="bg-[#10141B] text-white min-h-screen w-full">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/stacking" element={<Stacking />} /> 

        </Routes>
     
      
      <Footer />

      

    </div>
    </Router>

  )
}

export default App;