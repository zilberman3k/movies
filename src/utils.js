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