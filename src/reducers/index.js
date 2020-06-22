import { combineReducers } from 'redux';
import jsonPlaceHolderApi from '../api/jsonPlaceHolder';
//import data from '../fixture/sample.json';

function moviesListReducer(movies= [],action){
    //return data.movies;
    if(action.type == "FETCHED_MOVIES"){
        return action.payload
    }
    return movies;
}

function selectedMovieReducer(selectedMovie = null,action){
    if(action.type == "MOVIE_SELECTED"){
        return action.payload;
    }
    return selectedMovie;
}

export default combineReducers({movies:moviesListReducer,movie:selectedMovieReducer});