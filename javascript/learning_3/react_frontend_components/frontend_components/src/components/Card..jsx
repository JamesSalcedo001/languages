/* eslint-disable react/prop-types */
export const Card = ({ title, content }) => {
    // define functional React component Card and destructure the title and content props passed down to the card component

    return (
        <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "5px" }}>

            {/* display values of title and content props as an h3 and p  */}
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
};