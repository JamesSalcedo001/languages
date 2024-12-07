/* eslint-disable react/prop-types */
export const Navbar = ({ links }) => {
    // destructuring links prop from the arguments. links is an array of objects

    return (
        <nav>
            <ul className="navbar">

                {/* iterates over the links array using map method, and for each link object in array, create a list item, using index as unique key to help React identify elems in list */}

                {links.map((link, index) => (
                    <li key={index}>
                        
                        {/* create anchor elem, sets href attribute as the href property of the link object, and the text is set to the text prop of link object */} 

                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}