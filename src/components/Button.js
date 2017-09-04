import React, { Component } from 'react';
import { Link } from 'react-router';

class Button extends Component {

    render(props){
        return(
            <Link to="/page" className="btn-default">{ this.props.text }</Link>
        );
    }
}

export default Button;