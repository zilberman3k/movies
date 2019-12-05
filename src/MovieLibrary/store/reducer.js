import {FETCH_MOVIES,SELECT_MOVIE,DESELECT_MOVIE} from '../../actionTypes'

const initialState = {
  movies: [],
  selectedMovie: null
};

export default function movies(state = initialState, action) {
  const {type, payload} = action
  switch (type) {

    case FETCH_MOVIES:
      return {
        ...state,
        movies: payload
      };

    case SELECT_MOVIE:
      return {
        ...state,
        selectedMovie:payload
      };

    case DESELECT_MOVIE:
      return {
        ...state,
        selectedMovie:null
      };
    default:
      return state
  }
}
