import {FETCH_MOVIES,SELECT_MOVIE,DESELECT_MOVIE,SORT_ORDER} from '../../actionTypes'
import topRatedMovies from '../mocks/topTatedMovies'

export function fetchTopRatedMovies() {
  return {
    type: FETCH_MOVIES,
    payload: topRatedMovies
  }
}

export function selectMovie(movie) {
  return {
    type: SELECT_MOVIE,
    payload: movie
  }
}

export function deSelectMovie() {
  return {
    type: DESELECT_MOVIE,
  }
}

export function setSortOrder(order) {
  return {
    type: SORT_ORDER,
    payload: order
  }
}
