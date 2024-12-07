/* eslint-disable react/prop-types */
export const Navbar = ({ links }) => {
    return (
        <nav>
            <ul className="navbar">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}