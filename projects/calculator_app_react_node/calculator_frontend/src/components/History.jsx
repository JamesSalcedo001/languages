/* eslint-disable react/prop-types */
// src/components/History.js


export function History({ calculations }) {
    return (
        <div className="history">
            <h2>Calculation History</h2>
            {calculations.length === 0 ? (
                <p>No calculations yet</p>
            ) : (
                <ul>
                    {calculations.map((calc) => (
                        <li key={calc.id}>
                            {calc.firstOperand} {calc.operator} {calc.secondOperand} = {calc.result}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}