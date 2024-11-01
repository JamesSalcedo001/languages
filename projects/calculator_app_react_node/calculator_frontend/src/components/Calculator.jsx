// src/components/Calculator.js

import { useState } from "react";

export function Calculator({ onNewCalculation }) {
    const [firstOperand, setFirstOperand] = useState("");
    const [operator, setOperator] = useState("");
    const [secondOperand, setSecondOperand] = useState("");
    const [result, setResult] = usestate(null);
    const [error, setError] = useState("");


    return (
        <div className="calculator">
            <h1>Calculator</h1>
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
                    <option value="-"></option>
                    <option value="*">&times;</option>
                    <option value="/">&divide;</option>
                </select>
                <input 
                    type="number"
                    placeholder="secondOperand"
                    value={secondOperand}
                    onChange={(e) => setSecondOperand(e.target.value)}
                />
                <button onClick={handleCalculation} disabled={!firstOperand || !operator || !secondOperand}>Calculate</button>
                {result !== null && <h3>Result: {result}</h3>}
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    )
}