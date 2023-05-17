import './App.css';
import React from 'react'
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import Home from './pages/Home/Home'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
        <Home />
      </Router>
    </div>
  );
}

export default App;
