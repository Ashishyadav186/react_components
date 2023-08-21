import React, { Component } from 'react';
import { getMovies} from '../services/fakeMovieService';
class movies extends Component {
    state = {  
        movies : getMovies()
    }; 
    handleDelete= movie => {
        const movies =this.state.movies.filter(m => m._id!==movie._id);
    };

    render() { 
        const { length : count } = this.state.movies;
        if ( this.state.movies.length===0 )
        return<p>there are bla-bla movies in the database</p>;
    
            return () 
                <p>showing {this.state.movies.length} movies in the database</p>
                 <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie => (
                    <tr>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberinstock}</td>
                        <td>movie.dailyRentalRate</td>
                        <td><button onClick={this.handleDelete} className='btn btn-danger b1'></button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        };
    }

 
export default movies;