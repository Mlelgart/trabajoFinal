import { useState, useEffect } from 'react';
import './Footer.css';
import RedesSociales from './Iconos';


const Footer = () => {
    const [contadorVisitas, setContadorVisitas] = useState(0);

    useEffect(() => {
        const visitasGuardadas = parseInt(localStorage.getItem('contadorVisitas'), 10);
        if (!isNaN(visitasGuardadas)) {
            setContadorVisitas(visitasGuardadas);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('contadorVisitas', contadorVisitas.toString());
    }, [contadorVisitas]);

    const aumentarVisita = () => {
        setContadorVisitas((prevContador) => prevContador + 1);
    };

    const reiniciarContador = () => {
        setContadorVisitas(0);
    };

    return (
        <footer className='footer'>
            <RedesSociales />
            <p>Contador de Visitas: {contadorVisitas}</p>
            <button onClick={aumentarVisita}>Aumentar Visita</button>
            <button onClick={reiniciarContador}>Reiniciar Contador</button>
            <p>Derechos de autor © 2023 Mouslin</p>

        </footer>
    );
};

export default Footer;



