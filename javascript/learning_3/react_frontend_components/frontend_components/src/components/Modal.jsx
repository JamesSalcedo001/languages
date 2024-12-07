/* eslint-disable react/prop-types */
export const Modal = ({ content, onClose }) => {
    return (
        <div className="modal">
                <div className="modal-content">
                    <p>{content}</p>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
    );
};