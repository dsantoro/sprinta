import React, { Component } from 'react';

class Competition extends Component {

        render(){

            return(

                <div className="each-competition">

                    <header></header>
                    <div className="row collapse">
                        <div className="small-4 columns">
                            <span>23</span>
                        </div>
                        <div className="small-8 columns">

                            <h4>6° Etapa do Circuito Soul de Mountain Bike</h4>
                        </div>
                    </div>
                    <span className="location">Santana do Livramento (RS)</span>
                </div>
            );
        }
}

export default Competition;