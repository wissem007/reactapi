// src/App.js
import React from 'react';
import './App.css';
import Informations from './components/Informations';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Application pour afficher les informations</h1>
        <Informations />
      </header>
    </div>
  );
}

export default App;
