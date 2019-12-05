import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchFirstMovieBulk} from '../store/actions'
import logo from './powtoon.svg'
import './MovieLibrary.css'
import {getMovies, getSelectedMovie, getSortOrder} from '../store/selectors'
import MoviesList from './MoviesList'
import '../../styles.scss';


class MovieLibrary extends Component {

    componentDidMount() {
        const {fetchFirstMovieBulk} = this.props;
        fetchFirstMovieBulk()
    }

    render() {
        const {movies, selectedMovie} = this.props;
        return (
            <div className={`MovieLibrary ${selectedMovie ? 'overlay' : ''}`}>
                <header className="ML-header">
                    <img src={logo} className="ML-logo" alt="logo"/>
                </header>
                <div className="ML-intro">
                    {movies.length ? <MoviesList movies={movies}/>:''}
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    movies: getMovies(state),
    selectedMovie: getSelectedMovie(state),
    sortOrder: getSortOrder(state)
}), {fetchFirstMovieBulk})(MovieLibrary)
