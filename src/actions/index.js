import fakeJsonAPi from '../api/jsonPlaceHolder';

export const fetchMovies = () => {
    return async (dispatch) =>{
        const response = await fakeJsonAPi.get("/movies");
        dispatch ({
            type:"FETCHED_MOVIES",
            payload:response.data
        })
    }
}

export const selectMovie = (movie) => {
    return {
        type:"MOVIE_SELECTED",
        payload:movie
    }
}