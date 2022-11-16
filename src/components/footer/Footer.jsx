import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/logowado.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">Movies</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Inicio</Link>
                        <Link to="/">Contacto</Link>
                        <Link to="/">Términos de servicio</Link>
                        <Link to="/">Nosotros</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">En vivo</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Politica de privacidad</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Próximos estrenos</Link>
                        <Link to="/">Agregadas recientemente</Link>
                        <Link to="/">Top w-movies</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
