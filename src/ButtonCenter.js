// src/ButtonCenter.js
import React from 'react';

function ButtonCenter({ onClick }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button className="custom-button" onClick={onClick}>Pokazni interface za MDC</button>
    </div>
  );
}

export default ButtonCenter;
