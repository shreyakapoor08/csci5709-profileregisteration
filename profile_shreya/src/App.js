import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profileregisteration from './components/Profileregisteration';
import Profilepage from './components/Profilepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Profileregisteration />} />  
          <Route path="/profile" element={<Profilepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
