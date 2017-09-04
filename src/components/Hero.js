import React, { Component } from 'react';

import movie from '../images/movie-home.mov';
import banner from '../images/poster.jpg';

import Button from './Button';

class Hero extends Component {

    render() {

        return(

            <div className="hero">
                <video poster={ banner } autoPlay loop preload="auto">
                    <source src={ movie } type="video/mp4" />
                </video>
                <div className="curtain flex">
                    <div className="row">
                        <div className="small-12 columns">                                
                            <h2>Apaixonados por esporte</h2>
                            <p>Uma comunidade de atletas, organizadores e<br />marcas com afinidades em comum.</p>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;