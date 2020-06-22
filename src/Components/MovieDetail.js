import React from 'react';
import { connect } from 'react-redux';

const MovieDetail = ({selectedMovie}) =>{
       if(!selectedMovie){
           return <h1> Please Select a Movie </h1>
       }
       return(
            <div className="card" style={{"width": "18rem","border":"1px solid rgba(0,0,0,0.125)"}}>
                <img src={selectedMovie.imageUrl} style={{"height":"300px"}} className="card-img-top" alt={selectedMovie.title} />
                <div className="card-body">
                    <h5 className="card-title">{selectedMovie.title}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cast : {selectedMovie.cast}</li>
                    <li className="list-group-item">Released in : {selectedMovie.year} </li>
                    <li className="list-group-item">Director : {selectedMovie.director}</li>
                    <li className="list-group-item">Music Director : {selectedMovie.musicDirector}</li>
                </ul>
            </div>
       ) 
}

function mapStateToProps(state){
    return {
        selectedMovie:state.movie
    }
}

export default connect(mapStateToProps)(MovieDetail);