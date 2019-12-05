import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {fetchTopRatedMovies,selectMovie,deSelectMovie} from '../store/actions'


import logo from './powtoon.svg'
import './MovieLibrary.css'
import {getMovies,getSelectedMovie} from '../store/selectors'
import MoviesList from './MoviesList'
import '../../styles.scss';

class MovieLibrary extends Component {

  static propTypes = {

  }

  componentDidMount() {
    const {fetchTopRatedMovies} = this.props;
    fetchTopRatedMovies()
  }

  render() {
    const {movies,selectedMovie} = this.props;
    return (
      <div className={`MovieLibrary ${!!selectedMovie ? 'overlay':''}`}>
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
  selectedMovie: getSelectedMovie(state)
}), {fetchTopRatedMovies})(MovieLibrary)
