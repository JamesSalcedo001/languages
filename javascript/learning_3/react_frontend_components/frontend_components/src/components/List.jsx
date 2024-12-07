/* eslint-disable react/prop-types */
export const List = ({ items, ordered }) => {
    const Tag = ordered ? "ol" : "ul";
    return (
        <Tag className="custom-list">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </Tag>
    );
};
