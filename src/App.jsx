import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import DarkMode from './components/DarkMode';
import Accordian from './components/Accordian';

const App = () => {
  return (
      <Router>

        <Routes>
          <Route path="/darkmode" element={<DarkMode />}></Route>
          <Route path="/accordian" element={<Accordian />}></Route>
        </Routes>

      </Router>
  );
};

export default App;