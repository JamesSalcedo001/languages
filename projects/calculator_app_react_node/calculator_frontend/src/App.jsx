import { useState, useEffect } from 'react';
import { Calculator } from './components/Calculator';

import './App.css'

function App() {
  const [calculations, setCalculations] = useState([]);

  const fetchCalculations = async () => {
    try {
      const response = await fetch("/api/calculations");
      if (!response.ok) {
        throw new Error("Failed to fetch calculations");
      }
      const data = await response.json();
      setCalculations(data);
    } catch (error) {
      console.error(`Error fetching calculations: `, error);
    }
  };

  return (
    <div className='app'>
      <h1>Calculator App</h1>
      <Calculator />
    </div>
  )
}

export default App
