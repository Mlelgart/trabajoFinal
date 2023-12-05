import { useEffect } from 'react';
import './Header.css';

function Header() {
    useEffect(() => {
        const logo = document.querySelector('.logo');

        const restartAnimation = () => {
            logo.style.animation = 'none';
            void logo.offsetWidth;
            logo.style.animation = 'escribir 2s steps(20, end), titilar 5s linear infinite';
        };

        restartAnimation();
        const intervalId = setInterval(restartAnimation, 4000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <header className="header">
            <div className="background-image"></div>
            <div className="logo"><strong>Mouslin DVP</strong></div>
            <h1 className='titulo5'> My Profile </h1>
        </header>
    );
}

export default Header;
