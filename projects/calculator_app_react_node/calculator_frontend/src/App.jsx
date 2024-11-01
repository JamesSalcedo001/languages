import React, { useState, useEffect } from 'react';
import { Calculator } from './components/Calculator';

import './App.css'

function App() {
  const [calculations, setCalculations] = useState([]);

  return (
    <div className='app'>
      <h1>Calculator App</h1>
      <Calculator />
    </div>
  )
}

export default App
