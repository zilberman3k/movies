import {
    FETCH_MOVIES,
    SELECT_MOVIE,
    DESELECT_MOVIE,
    SORT_ORDER,
    LOAD_EXTRA_PAGE,
    SET_PAGE_NUMBER
} from '../../actionTypes'
import {orderMoviesFetchProp, loadPageData} from '../../utils';

const all = Promise.all.bind(Promise);

export function fetchFirstMovieBulk() {
    return async function (dispatch, getState) {

        const sortString = orderMoviesFetchProp(getState().movieLib.sortOrder);
        const [p1, p2, p3] = await all([
            loadPageData(sortString, 1),
            loadPageData(sortString, 2),
            loadPageData(sortString, 3)
        ]);

        dispatch(setInitialSortMovies(p1.concat(p2).concat(p3)));
        dispatch(setPageNumber(3));
    }
}

export function setInitialSortMovies(movies) {
    return {
        type: FETCH_MOVIES,
        payload: movies
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

export function setPageNumber(pageNumber) {
    return {
        type: SET_PAGE_NUMBER,
        payload: pageNumber
    }
}

function updateNextPage (nextPage){
    return {
        type: LOAD_EXTRA_PAGE,
        payload: nextPage
    }
}

export function loadExtraPage() {

    return async function (dispatch, getState) {
        const {page, sortOrder} = getState().movieLib;
        const sortString = orderMoviesFetchProp(sortOrder);
        const nextPage = await loadPageData(sortString, page+1);
        dispatch(updateNextPage(nextPage));
        dispatch(setPageNumber(page+1));
    }
}