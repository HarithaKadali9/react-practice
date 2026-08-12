import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Crud from './components/Crud';

const App = () => {
  return (
      <Router>
        <NavBar/>
        <Routes>
          
          <Route path="/" element={<Home/>}></Route>
          <Route path="/crud" element={<Crud/>}></Route>
          
          
        </Routes>

      </Router>
  );
};

export default App;