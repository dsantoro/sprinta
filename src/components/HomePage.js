import React, { Component } from 'react';
import Slider from 'react-slick';

import Hero from './Hero';
import Product from './Product';
import Competition from './Competition';

import desafioImage from '../images/desafio.png';
import eventoImage from '../images/evento.png';
import gruposImage from '../images/grupos.png';

class HomePage extends Component {

    constructor(props){
        super(props)
        
        this.state = {

            products: [
                {
                    id: 1,
                    image: desafioImage,
                    title: "Desafie seus limites",
                    text: "Descubra eventos espostivos próximos a você e inscreva-se. Suba de nível. Desafie-se.",
                    buttonText: "Descubra",
                    link: ""
                },
                {
                    id: 2,
                    image: eventoImage,
                    title: "Monte seu evento completo",
                    text: "Monte eventos completos, desde a inscrição até a divulgação.",
                    buttonText: "Crie seu evento",
                    link: ""
                },
                {
                    id: 3,
                    image: gruposImage,
                    title: "Crie grupos de treino",
                    text: "Convoque seus amigos para formar um grupo para treinarem juntos.",
                    buttonText: "Saiba mais",
                    link: ""
                }
            ]
        }
    }

	render() {

        const settings = {

            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        arrows: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                }
            ]
        }

		return (
			<div className="page-wrap">

                <Hero />

                <section className="container">
                    <div className="row">
                        { this.state.products.map((product) => {
                            return(
                                <div className="small-12 medium-4 columns">
                                    <Product 
                                        key={ product.id }
                                        image={ product.image }
                                        title={ product.title }
                                        text={ product.text }
                                        buttonText={ product.buttonText }
                                    />
                                </div>
                            )
                        }) }
                    </div>
                </section>

                <section className="container container-gray">

                    <div className="row">
                        <div className="small-12 columns">
                            <h3 className="title text-center">Pronto para competir?</h3>
                            <Slider {...settings}>
        	                    <div>
                                    <Competition />
                                </div>
                                <div>
                                    <Competition />
                                </div>
                                <div>
                                    <Competition />
                                </div>
                                <div>
                                    <Competition />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </section>
			</div>
		);
	}
}

export default HomePage;
