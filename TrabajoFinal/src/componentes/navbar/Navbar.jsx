import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleContactClick = () => {
        window.location.href = "mailto:martinelgart@gmail.com";
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="navbar">
            <div></div>
            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li className="dropdown" onClick={toggleDropdown}>
                    Services
                    {isDropdownOpen && (
                        <ul className="dropdown-content">
                            <li>FrontEnd</li>
                            <li>BackEnd</li>
                            <li>Full</li>
                        </ul>
                    )}
                </li>
                <li onClick={handleContactClick}>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
