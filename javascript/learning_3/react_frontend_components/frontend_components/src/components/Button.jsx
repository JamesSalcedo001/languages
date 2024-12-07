/* eslint-disable react/prop-types */
export const Button = ({ text, onClick }) => {
    // define functional React component and destructure text and onClick props passed to the button component 

    // attaches onClick prop as click event handler for the button, and displays the value of the 'text' prop as the button's label
    
    return <button className="custom-button" onClick={onClick}>{text}</button>;
}

 