/* eslint-disable react/prop-types */
// src/components/Calculator.js

import { useState } from 'react';

export function Calculator({ onNewCalculation }) {
  const [firstOperand, setFirstOperand] = useState('');
  const [operator, setOperator] = useState('');
  const [secondOperand, setSecondOperand] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculation = async () => {
    try {
      const response = await fetch('/api/calculations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstOperand,
          operator,
          secondOperand,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.errors?.[0]?.msg || 'An error occurred during calculation.'
        );
      }

      const data = await response.json();
      setResult(data.result);
      setError('');
      onNewCalculation(); // Refresh the history
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <div>
        <input
          type="number"
          placeholder="First Operand"
          value={firstOperand}
          onChange={(e) => setFirstOperand(e.target.value)}
        />
        <select value={operator} onChange={(e) => setOperator(e.target.value)}>
          <option value="">Operator</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">&times;</option>
          <option value="/">&divide;</option>
        </select>
        <input
          type="number"
          placeholder="Second Operand"
          value={secondOperand}
          onChange={(e) => setSecondOperand(e.target.value)}
        />
      </div>
      <button
        onClick={handleCalculation}
        disabled={!firstOperand || !operator || !secondOperand}
      >
        Calculate
      </button>
      {result !== null && <h3>Result: {result}</h3>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

