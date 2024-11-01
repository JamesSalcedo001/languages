import { useState, useEffect } from 'react';
import { Calculator } from './components/Calculator';
import { History } from './components/History';
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

  useEffect(() => {
    fetchCalculations();
  }, [])

  return (
    <div className='app'>
      <h1>Calculator App</h1>
      <Calculator onNewCalculation={fetchCalculations} />
      <History calculations={calculations} />
    </div>
  )
}

export default App
