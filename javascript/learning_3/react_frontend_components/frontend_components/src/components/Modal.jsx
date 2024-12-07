/* eslint-disable react/prop-types */
export const Modal = ({ content, onClose }) => {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            >
                <div style={{ background: "#fff", padding: "20px", borderRadius: "5px" }}>
                    <p>{content}</p>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
    );
};