import React, { Component } from 'react';
import Movielist from './MovieList';

class Movie extends Component {

	constructor() {
		super()
		this.state = (
			{
				movies: []
			})
	}

	render() {
		return (
			<React.Fragment>
				{/*<!-- PRODUCTS LIST -->*/}
				<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>

				{/*<!-- DataTales Example -->*/}
				<div className="card shadow mb-4">
					<div className="card-body">
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%">
								<thead>
									<tr>
										<th>Id</th>
										<th>Titulo</th>
										<th>Calificación</th>
										<th>Premios</th>
										<th>Duración</th>
									</tr>
								</thead>
								<tbody>
									{
										this.state.movies.map((movie,index) => {
											return <Movielist
												key={index + movie.title}
												id={movie.id }
												title={movie.title }
												rating={ movie.rating}
												awards={ movie.awards}
												length={ movie.length}
											/>
										})
									}

								</tbody>
								<tfoot>
									<tr>
										<th>Id</th>
										<th>Titulo</th>
										<th>Calificación</th>
										<th>Premios</th>
										<th>Duración</th>
									</tr>
								</tfoot>
							</table>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}

	async apiAll(url, handler) {
		try {
			let response = await fetch(url)
			let result = await response.json()
			handler(result)
		} catch (error) {
			console.log(error)
		}

	}

	getMovies = (info) => {
		//console.log(info)
		this.setState(
			{
				movies: info.data
			}
		)
	}

	async componentDidMount() {
		this.apiAll('http://localhost:3001/api/movies', this.getMovies)
	}
}
export default Movie;