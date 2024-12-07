/* eslint-disable react/prop-types */
export const Dropdown = ({ options, onChange }) => {
    return (
        <select className="custom-dropdown" onChange={(e) => onChange(e.target.value)}>
        {options.map((option, index) => (
            <option key={index} value={option.value}>
                {option.label}
            </option>
        ))}
        </select>
    )
}