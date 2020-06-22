import { combineReducers,applyMiddleware } from 'redux';
import data from '../fixture/sample.json';

function moviesListReducer(movies= [],action){
    return data.movies;
}

function selectedMovieReducer(selectedMovie = null,action){
    if(action.type == "MOVIE_SELECTED"){
        return action.payload;
    }
    return selectedMovie;
}

export default combineReducers({movies:moviesListReducer,movie:selectedMovieReducer});