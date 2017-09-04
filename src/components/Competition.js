import React, { Component } from 'react';
import { Link } from 'react-router';

import imageEvent from '../images/image-evento.jpg';
import marker from'../images/ico-marker.png';
import dummyImage from '../images/640x320.png';

class Competition extends Component {

        render(){

            return(

                <Link to="/page" className="each-competition">

                    <header>
                        <figure className="image is-2by1 crop-alike" style={ {backgroundImage: `url(${imageEvent})`} }>
                            <img src={ dummyImage } alt=""/>
                        </figure>
                    </header>
                    <div className="competition-info">

                        <div className="row flex collapse">
                            <div className="small-4 columns">
                                <span class="day">23</span>
                            </div>
                            <div className="small-8 columns">
                                <h4>6° Etapa do Circuito Soul de Mountain Bike</h4>
                            </div>
                        </div>
                        <span className="location flex"><img src={ marker } alt=""/>Santana do Livramento (RS)</span>
                    </div>
                </Link>
            );
        }
}

export default Competition;