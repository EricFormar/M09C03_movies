import React, { Component } from 'react';
import SmallCard from './SmallCard';

class ContentRowTop extends Component {

    constructor() {
        super()
        this.state =
        {
            movies: {
                color: "primary",
                titulo: "Movies in Data Base",
                valor: "",
                icono: "fas fa-film",
            },
            awards: {
                color: "success",
                titulo: "Total awards",
                valor: "",
                icono: "fas fa-award",
            },
            actors: {
                color: "warning",
                titulo: "Actors quantity",
                valor: "",
                icono: "fas fa-user",
            }
        }

    }

    render() {
        return (
            <React.Fragment>
                {/*<!-- Content Row -->*/}
                <div className="row">

                    <SmallCard  {...this.state.movies} />
                    <SmallCard  {...this.state.awards} />
                    <SmallCard  {...this.state.actors} />

                </div>
            </React.Fragment>
        )
    }

    async apiCall(url, handler) {
        try {
            let response = await fetch(url);
            let result = await response.json();
            handler(result)
        } catch (error) {
            console.log(error)
        }
    }

    getTotalMovies = (info) => {
        this.setState({
            movies: {
                ...this.state.movies,
                valor: info.data,
            },
        })
    }

    getTotalAwards = (info) => {
        this.setState({
            awards: {
                ...this.state.awards,
                valor: info.data,
            },
        })
    }

    getTotalActors = (info) => {
        this.setState({
            actors: {
                ...this.state.actors,
                valor: info.data,
            },
        })
    }

    async componentDidMount() {
        await this.apiCall('http://localhost:3001/api/movies/total', this.getTotalMovies);
        await this.apiCall('http://localhost:3001/api/movies/awards', this.getTotalAwards);
        await this.apiCall('http://localhost:3001/api/actors/total', this.getTotalActors);

    }

}
export default ContentRowTop;