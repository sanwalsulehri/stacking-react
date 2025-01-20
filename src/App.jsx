import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stacking from './pages/Stacking';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import CoinPage from './pages/CoinPage';
import UsersPage from './pages/UsersPage';
import UsersDetails from './pages/UsersDetails';
import RefferalsPage from './pages/RefferalsPage';




const App = () => {


  return (
    <Router>

    {/* <div className="bg-[#10141B] text-white min-h-screen w-full"> */}
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/stacking" element={<Stacking />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/coinPage" element={<CoinPage />} /> 
          <Route path="/UsersPage" element={<UsersPage />} /> 
          <Route path="/UsersDetails" element={<UsersDetails />} /> 

          <Route path="/RefferalsPage" element={<RefferalsPage />} /> 

        </Routes>
     
      
      {/* <Footer /> */}

      

    {/* </div> */}
    </Router>

  )
}

export default App;