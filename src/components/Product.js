import React, { Component } from 'react';

import Button from './Button';

class Product extends Component {
    render(props) {

        return(
            <div className="each-product">

                <figure>
                    <img src={ this.props.image } alt=""/>
                </figure>

                <h3>{ this.props.title }</h3>
                <p>{ this.props.text }</p>
                <Button text={ this.props.buttonText } />
            </div>
        );
    }
}

export default Product;