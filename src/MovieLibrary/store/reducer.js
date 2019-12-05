import {
  FETCH_MOVIES,
  SELECT_MOVIE,
  DESELECT_MOVIE,
  SORT_ORDER,
  SET_PAGE_NUMBER,
  LOAD_EXTRA_PAGE
} from '../../actionTypes'
import {orderMovies} from "../../utils";

const initialState = {
    movies: [],
    selectedMovie: null,
    sortOrder: ''
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
                selectedMovie: payload
            };

        case DESELECT_MOVIE:
            return {
                ...state,
                selectedMovie: null
            };
        case SORT_ORDER:
            return {
                ...state,
                sortOrder: payload,
                movies: [...orderMovies(state.movies, payload)]
            }
        case SET_PAGE_NUMBER: {
            return {
            ...state,
            page: payload
          }
        }
      case LOAD_EXTRA_PAGE:{
          return  {
          ...state,
          movies: [...state.movies,...payload]
        }
      }
        default:
            return state
        }
    }
