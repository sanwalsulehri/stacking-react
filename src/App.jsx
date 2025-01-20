import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stacking from './pages/Stacking';
<<<<<<< HEAD
import Footer from './components/Footer';
import ReferralTable from './components/ReferralTable';
import UserStack from './components/UserStack';




=======
import Dashboard from './pages/Dashboard';
>>>>>>> ef91b78a625101d98bb5e73f1bf1cbf499298b87
const App = () => {


  return (
    <Router>

    <div className="">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/stacking" element={<Stacking />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 

        </Routes>
     
      
<<<<<<< HEAD
      <Footer />
      <UserStack />
      

=======
>>>>>>> ef91b78a625101d98bb5e73f1bf1cbf499298b87
    </div>
    </Router>

  )
}

export default App;