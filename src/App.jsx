
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Survey from "./Survey";
import ThankYou from "./Components/Thankyou";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Survey />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
