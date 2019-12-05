export const orderMovies = (movies, sortOrder) => {
    switch (sortOrder) {
        case '':
            return movies.sort((a, b) => a.id - b.id);
        case 'name_asc':
            return movies.sort((a, b) => a.title >= b.title ? 1 : -1);
        case 'name_desc':
            return movies.sort((a, b) => a.title <= b.title ? 1 : -1);
        case 'rating':
            return movies.sort((a, b) => a.vote_count - b.vote_count);

        default:
            return movies;
    }
};


export const orderMoviesFetchProp = (sortOrder) => {
    switch (sortOrder) {
        case '':
            return 'release_date.asc';
        case 'name_asc':
            return 'original_title.asc';
        case 'name_desc':
            return 'original_title.desc';
        case 'rating':
            return 'vote_average.desc';

    }
};
const PREF = '/3/discover/movie?api_key=54ffed57deb5a7a8688be4de3007e578';
export const loadPageData = (sortString,page)=> fetch(`${PREF}&sort_by=${sortString}&page=${page}`).then(q=>q.json()).then(q=>q.results);