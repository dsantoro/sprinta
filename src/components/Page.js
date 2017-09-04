import React, { Component } from 'react';
import { Link } from 'react-router';

class Page extends Component {
	render() {
		return (
			
			<section className="container">
				<div className="row">

					<div className="small-12 columns">
						<br />
						<br />
						<h1>Dummy Page</h1>
						<Link to="/">Voltar</Link>
					</div>
				</div>
			</section>
		);
	}
}

export default Page;