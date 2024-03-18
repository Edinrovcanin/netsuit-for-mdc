// src/App.js
import React, { useState } from 'react';
import './App.css';
import ButtonCenter from './ButtonCenter';
import AppContent from './AppContent';

function App() {
  const [showApp, setShowApp] = useState(false);

  const handleButtonClick = () => {
    setShowApp(true);
  };

  return (
    <div className="App">
      {!showApp ? <ButtonCenter onClick={handleButtonClick} /> : <AppContent />}
    </div>
  );
}

export default App;
