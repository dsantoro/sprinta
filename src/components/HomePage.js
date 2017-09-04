import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router';

import Hero from './Hero';
import Product from './Product';
import Competition from './Competition';
import Clube from './Clube';
import Button from './Button';
import Footer from './Footer';

import desafioImage from '../images/desafio.png';
import eventoImage from '../images/evento.png';
import gruposImage from '../images/grupos.png';
import peopleRunning from '../images/people-running.jpg';
import dummyImage from '../images/480x320.png';
import dummyImageSquare from '../images/480x480.png';
import dummyImageRect from '../images/640x320.png';

import fgc from '../images/fgc.jpg';
import danda from '../images/danda.jpg';
import fcp from '../images/fcp.jpg';
import desbravadores from '../images/desbravadores.jpg';
import fsc from '../images/fsc.jpg';
import soul from '../images/soul.jpg';
import blog1 from '../images/blog-1.jpg';
import blog2 from '../images/blog-2.jpg';

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
			],
			clubes: [
				{
					id: 1,
					image: peopleRunning,
					count: '100',
					category: 'running',
					title: 'Treino de Resistência Go Power',
					'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non lorem eget libero bibendum lobortis.'
				},
				{
					id: 2,
					image: peopleRunning,
					count: '200',
					category: 'ciclismo',
					title: 'Treino de Resistência Go Power',
					'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non lorem eget libero bibendum lobortis.'
				},
				{
					id: 3,
					image: peopleRunning,
					count: '50',
					category: 'cross fit',
					title: 'Treino de Resistência Go Power',
					'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non lorem eget libero bibendum lobortis.'
				},
				{
					id: 4,
					image: peopleRunning,
					count: '400',
					category: 'triatlon',
					title: 'Treino de Resistência Go Power',
					'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non lorem eget libero bibendum lobortis.'
				}
			],
			parceiros: [
				{
					image: fgc,
					url: 'https://www.google.com.br'
				},
				{
					image: danda,
					url: 'https://www.google.com.br'
				},
				{
					image: fcp,
					url: 'https://www.google.com.br'
				},
				{
					image: desbravadores,
					url: 'https://www.google.com.br'
				},
				{
					image: fsc,
					url: 'https://www.google.com.br'
				},
				{
					image: soul,
					url: 'https://www.google.com.br'
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
		
		const clubSettings = {

            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
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
                        { this.state.products.map((product, index) => {
                            return(
                                <div className="small-12 medium-4 columns" 
									key={ index }
								>
                                    <Product 
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
                            <h3 className="title">Pronto para competir?</h3>
							<h4 className="select-events flex align-center"><span className="text-center mobile-centered">Eventos na região do</span> 
								<select name="">
									<option value="">Rio Grande do Sul</option>
									<option value="">Rio Grande do Norte</option>
								</select>
							</h4>
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

				<section className="container container-clubs">

					<div className="curtain"></div>

					<div className="upper-info">
						<div className="row">
							<div className="small-12 columns">
								<div className="flex">
									<div>
										<a href=""><strong>Descubra eventos </strong>no Brasil inteiro</a>
									</div>
									<div>
										<a href="">Seja um <strong>organizador parceiro</strong></a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="row">

						<div className="small-12 medium-8 large-7 columns">
							
							<h3 className="cta-clubs"><strong>Encontre </strong>clubes, grupos, treinos e pessoas com os <strong>mesmos interesses<br />que você.</strong></h3>
						</div>
					</div>

					<div className="row">

						<div className="small-12 columns">

							<Slider {...clubSettings}>
								{this.state.clubes.map((clube, index) => {
									return(
										<div key={ index }>
												<Clube
													id={ clube.id }
													image={ clube.image }
													category={ clube.category }
													count={ clube.count }
													title={ clube.title }
													description= { clube.description }
												/>
										</div>
									)
								})}
							</Slider>
						</div>
					</div>

					<div className="lower-info">

						<div className="row">

							<div className="small-12 columns">

								<div className="flex">
									<div>
										<a href="">Procure por <strong>mais grupos</strong></a>
									</div>
									<div>
										<a href="">Crie seu <strong>grupo grátis</strong></a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="place-filter flex">

						<div className="row">
							<div className="small-12 columns">
								<ul className="flex">
									<li>Clubes por <strong>interesse</strong></li>
									<li><a href="" className="label">Running</a></li>
									<li><a href="" className="label">Ciclismo</a></li>
									<li><a href="" className="label">Fitness</a></li>
									<li><a href="" className="label">Triatlon</a></li>
									<li><a href="" className="label">Cross Fit</a></li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<section className="container">

					<div className="row">
						<div className="small-12 columns">

							<div className="row collapse mosaic-wrapper">

								<div className="small-12 medium-6 columns">

									<Link to="/page" className="post-link">

										<div className="curtain flex">
											<div>
												<h4>Uma boa corrida começa por um bom tênis</h4>
												<span className="flex author">
													<img src={ peopleRunning } alt=""/>
													<span>Vanessa Camargo</span>
												</span>
											</div>
										</div>
										<figure className="image is-1by1 crop-alike" style={ {backgroundImage: `url(${ blog1 })`} }>
											<img src={ dummyImageSquare } alt=""/>
										</figure>
									</Link>
								</div>

								<div className="small-12 medium-6 columns">

									<Link to="/page" className="post-link">
									
										<div className="curtain flex">
											<div>
												<h4>5 dicas para dar umUPno seu evento</h4>
												<span className="flex author">
													<img src={ peopleRunning } alt=""/>
													<span>Equipe Sprinta</span>
												</span>
											</div>
										</div>
										<figure className="image is-2by1 crop-alike" style={ {backgroundImage: `url(${ blog2 })`} }>
											<img src={ dummyImageRect } alt=""/>
										</figure>
									</Link>

									<Link to="/page" className="post-link">
									
										<div className="curtain flex">
											<div>
												<h4>Para onde a corrida meleva</h4>
												<span className="flex author">
													<img src={ peopleRunning } alt=""/>
													<span>Vanessa Camargo</span>
												</span>
											</div>
										</div>
										<figure className="image is-2by1 crop-alike" style={ {backgroundImage: `url(${ blog2 })`} }>
											<img src={ dummyImageRect } alt=""/>
										</figure>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="container container-partners">

					<div className="row">
						<div className="small-12 medium-6 columns">

							<div className="to-right">

								<h4>A plataforma oficial de grandes parceiros</h4>
								<h5>+ de 700 eventos parceiros em 2016, distribuídos em 16 estados brasileiros.</h5>
								<p>O SPRINTA é uma plataforma oficial de diversas federações e empresas de todo o Brasil. Seja você também nosso parceiro.</p>
								<div className="fix-bottom">
									<Button  text="Seja um parceiro" />
								</div>
							</div>
						</div>
						<div className="small-12 medium-6 columns">

							<ul className="small-block-grid-2 medium-block-grid-3">

								{this.state.parceiros.map((parceiro, index) => {
									return(
										<li key={ index }>
											<Link to= { parceiro.url } target="_blank">

												<figure className="image is-3by2 each-parceiro" style={  {backgroundImage: `url(${ parceiro.image })`} }>
													<img src={ dummyImage } alt="" />
												</figure>
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</section>

				<Footer />
			</div>
		);
	}
}

export default HomePage;
