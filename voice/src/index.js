import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GamePage from './app/GamePage';
import Fruit from './app/fruit/Fruit';
import reportWebVitals from './app/reportWebVitals';
import Biologygame from './app/biologygame/Biologygame';
import Mathgame from './app/mathgame/Mathgame';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
      <Routes>
        <Route path="/" element={<GamePage />} />
        <Route path="/biologygame" element={<Biologygame />} />
        <Route path="/mathgame" element={<Mathgame />} />
        <Route path="/fruit" element={<Fruit />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();