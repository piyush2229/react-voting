import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Sidebar from "./Sidebar";
import Home from "./Pages/Home";
import Vote from "./Pages/Vote";

import About from "./Pages/About";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="App">
      <Sidebar isExpanded={isExpanded} setExpanded={setIsExpanded} />
      <div className={`content ${isExpanded ? 'expanded' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
