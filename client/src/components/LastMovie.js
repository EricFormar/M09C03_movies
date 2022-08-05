import React, { Component } from 'react';

class Lastmovie extends Component {

    constructor(){
        super()
        this.state = {
            movie : {}
        }
    }

    render() {
        return (
            <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={`http://localhost:3001/img/${this.state.movie.image}`} alt={this.state.movie.title}/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                </div>
            </div>
        </div>
        );
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

    getLastMovie = (info) => {
        this.setState({
            movie: info.data
        })
    }

     async componentDidMount(){
        await this.apiCall('http://localhost:3001/api/movies/last', this.getLastMovie);
        let getLastMovie = setInterval( async() => {
            await this.apiCall('http://localhost:3001/api/movies/last', this.getLastMovie);
            console.log('actualizando pelicula')
        }, 1000*5);
        
    }
}

export default Lastmovie;
