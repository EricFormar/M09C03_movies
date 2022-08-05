import React, {Component} from 'react';
import Genre  from './Genre';

/* let genres = [
    {genre: 'Acción'},
    {genre: 'Animación'},
    {genre: 'Aventura'},
    {genre: 'Ciencia Ficción'},
    {genre: 'Comedia'},
    {genre: 'Documental'},
    {genre: 'Drama'},
    {genre: 'Fantasia'},
    {genre: 'Infantiles'},
    {genre: 'Musical'}
]
 */
class GenresInDb extends Component{
    constructor(){
        super()
        this.state = {
            genresList : [],
        }
    }

    render(){
    return (
        <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    this.state.genresList.map((genre,index)=>{
                                        return  <Genre  genre={genre}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
    )
}

async apiCall (url,handler) {
    try {
        let response = await fetch(url);
        let result = await response.json();
        handler(result)
    } catch (error) {
        console.log(error)
    }
}

getGenres = (info) => {
    this.setState(
        {
            genresList: info.data
        }
        )
}


async componentDidMount() {
    await this.apiCall('http://localhost:3001/api/genres',this.getGenres)
}
}
export default GenresInDb;