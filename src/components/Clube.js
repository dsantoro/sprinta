import React, { Component } from 'react';
import { Link } from 'react-router';

class Clube extends Component {

    render(props){
        return(

            <Link to="/page" className="each-club">

                <ul className="text-center">

                    <li>
                        <figure>
                            <img src={ this.props.image } alt=""/>
                            <span className="number flex">{ `+${this.props.count}` }</span>
                        </figure>
                    </li>
                    <li><span className="label">{ this.props.category }</span></li>
                    <li><h4>{ this.props.title }</h4></li>
                    <li><p>{ this.props.description }</p></li>
                </ul>
            </Link>
        );
    }
}

export default Clube;