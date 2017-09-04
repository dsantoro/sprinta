import React, { Component } from 'react';

import { Link } from 'react-router';

import footerLogo from '../images/logo-footer.png';
import facebook from '../images/ico-facebook.png';
import instagram from '../images/ico-instagram.png';

class Footer extends Component {

    render(){

        return(

            <footer className="container container-footer">

                <div className="row">

                    <div className="small-12 medium-3 columns">

                        <Link to="/" className="footer-links">
                            <img src={ footerLogo } alt="Sprinta" />
                        </Link>

                        <ul className="socials clearfix">
                            <li>
                                <Link to="https://www.facebook.com/sprinta/" title="Visite nosso Facebook">
                                    <img src={ facebook } alt="Visite nosso Facebook"/>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.instagram.com/instasprinta/" title="Visite nosso Instagram">
                                    <img src={ instagram } alt="Visite nosso Instagram"/>
                                </Link>
                            </li>
                        </ul>

                        <p className="sign">&copy; 2017 Sprinta<br />Todos os direitos reservados</p>
                    </div>
                    <div className="small-12 medium-3 columns">

                        <ul className="footer-menu">

                            <li><Link to="/page">Sobre o Sprinta</Link></li>
                            <li><Link to="/page">Grupos</Link></li>
                            <li><Link to="/page">Eventos</Link></li>
                            <li><Link to="/page">Desafios</Link></li>
                            <li><Link to="/page">Blog</Link></li>
                            <li><Link to="/page">Fale Conosco</Link></li>
                        </ul>
                    </div>
                    <div className="small-12 medium-3 columns">

                        <ul className="list-footer">

                            <li>Atletas</li>
                            <li><Link to="/page">Encontre um evento</Link></li>
                            <li><Link to="/page">Crie seu evento</Link></li>
                            <li><Link to="/page">Crie seu grupo</Link></li>
                        </ul>

                        <ul className="list-footer list-end">

                            <li>Organizadores</li>
                            <li><Link to="/page">Crie seu evento</Link></li>
                            <li><Link to="/page">Gerencie seus Eventos</Link></li>
                        </ul>
                    </div>
                    <div className="small-12 medium-3 columns">

                        <p className="heart">Feito<br />com <span>&#9825;</span> para <strong>apaixonados por esporte</strong></p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;