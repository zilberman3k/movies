import React, {Component, PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import TMDBImage from './TMDBImage'
import './MoviesList.css'

import '../../styles.scss';
import {connect} from "react-redux";
import {getMovies, getSelectedMovie} from "../store/selectors";
import {deSelectMovie, fetchTopRatedMovies, selectMovie, setSortOrder} from "../store/actions";

class MoviesList extends PureComponent {

    static propTypes = {
        movies: PropTypes.array.isRequired
    }

    handleSelectMovie = item => this.props.selectMovie(item);

    handleSortingChange = sortingType => {
        this.props.setSortOrder(sortingType);
        this.props.fetchTopRatedMovies();
    }
    closeSelectedMovie = () => this.props.deSelectMovie();

    render() {

        const {movies, selectedMovie} = this.props;

        return (
            <div className="movies-wrapper">
                <div className="sort-list">
                    <span>Sort by:</span>
                    <SortingOptions onChange={this.handleSortingChange}/>
                </div>
                <div className="movies-list">

                    <div className="items">
                        {
                            movies.map(movie =>
                                <MovieListItem key={movie.id} movie={movie} isSelected={selectedMovie === movie}
                                               onSelect={this.handleSelectMovie}/>
                            )
                        }
                    </div>

                </div>
                {selectedMovie && <ExpandedMovieItem movie={selectedMovie} onClose={this.closeSelectedMovie}/>
                }
            </div>
        )
    }
}

export default connect(state => ({
    movies: getMovies(state),
    selectedMovie: getSelectedMovie(state)
}), { selectMovie, deSelectMovie, setSortOrder,fetchTopRatedMovies})(MoviesList)

const ExpandedMovieItem = ({movie: {title, original_title, poster_path, overview, vote_average, vote_count}, onClose}) => (
    <div className="expanded-movie-item" onClick={onClose}>
        <TMDBImage src={poster_path} className="poster"/>
        <div className="description">
            <h2>{title}({original_title})</h2>
            <div><h4>Rank(votes count)</h4>: <span>{vote_average}({vote_count})</span></div>
            <span>{overview}</span>
        </div>
    </div>
)


class MovieListItem extends Component {

    handleClick = () => {
        const {movie, onSelect} = this.props
        onSelect(movie)
    }

    render() {
        const {movie: {title, vote_average, poster_path, original_title, overview, vote_count}, isSelected} = this.props
        return (
            <div className={classNames('movie-list-item', {'selected': isSelected})}
                 onClick={this.handleClick}>
                <div className="title">
                    {title}
                </div>
                <TMDBImage src={poster_path} className="poster"/>
                <div className="vote">
                    Rank - ({vote_average})
                </div>


            </div>
        )
    }
}

class SortingOptions extends Component {

    state = {
        value: ''
    }

    handleChange = e => {
        const selectedValue = e.target.value
        const {onChange} = this.props
        this.setState({value: selectedValue})
        onChange(selectedValue)
    }

    render() {

        return (
            <select value={this.state.value} onChange={this.handleChange}>
                <option value=""></option>
                <option value="name_asc">A -> Z</option>
                <option value="name_desc">Z -> A</option>
                <option value="rating">Rating</option>
            </select>
        )
    }
}

