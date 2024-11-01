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
            </div>
        </div>
    )
}