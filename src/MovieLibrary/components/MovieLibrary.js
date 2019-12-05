import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchTopRatedMovies,selectMovie,deSelectMovie} from '../store/actions'

import logo from './powtoon.svg'
import './MovieLibrary.css'
import {getMovies, getSelectedMovie, getSortOrder} from '../store/selectors'
import MoviesList from './MoviesList'
import '../../styles.scss';

class MovieLibrary extends Component {

  componentDidMount() {
   // https://api.themoviedb.org/3/discover/movie?api_key=54ffed57deb5a7a8688be4de3007e578&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
    const {fetchTopRatedMovies} = this.props;
    fetchTopRatedMovies()
      // https://api.themoviedb.org

  }

  render() {
    const {movies,selectedMovie} = this.props;
    return (
      <div className={`MovieLibrary ${selectedMovie ? 'overlay':''}`}>
        <header className="ML-header">
          <img src={logo} className="ML-logo" alt="logo" />
        </header>
        <div className="ML-intro">
          { movies.length && <MoviesList movies={movies}/> }
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  movies: getMovies(state),
  selectedMovie: getSelectedMovie(state),
  sortOrder:getSortOrder(state)
}), {fetchTopRatedMovies})(MovieLibrary)
