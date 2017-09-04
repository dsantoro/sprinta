import React, { Component } from 'react';
import { Link } from 'react-router';

import logo from '../images/logo.jpg';
import compass from '../images/compass.jpg';

import Button from './Button';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            pageTitle: "Sprinta"
        }
    }

	render() {
		return (
            <header className="header">

                <div className="row flex">

                    <div className="small-12 medium-6 large-3 columns">

                        <Link className="logo" to="/">
                            <img src={logo} alt={this.state.pageTitle} />
                        </Link>
                    </div>

                    <div className="show-for-large large-9 columns">
                        <ul className="flex navigation">
                            <li>
                                <Link to="cadastre">Cadastre-se</Link>
                            </li>
                            <li>
                                <Button text="ENTRAR" />
                            </li>
                            <li>
                                <Link>
                                    <img src={ compass } alt=""/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
		);
	}
}

export default Header;
