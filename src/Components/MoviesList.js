import React from 'react';
import {connect} from 'react-redux';
import { selectMovie } from '../actions'

class MoviesList extends React.Component{
    constructor(props){
        super(props);
    }
    renderMoviesList(){
        return this.props.movies.map((movie,index)=>{
            return (<li style={{"cursor":"pointer"}} onClick={()=>this.props.handleMovieSelect(movie)} className="list-group-item" key={index}> {movie.title} </li>)
        })
    }
    render(){
       return(
          <ul className="list-group">
             {this.renderMoviesList()}
          </ul>
       ) 
    }
}

function mapStateToProps(state){
    return {
        movies:state.movies
    }
}

export default connect(mapStateToProps,{handleMovieSelect:selectMovie})(MoviesList);