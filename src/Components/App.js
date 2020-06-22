import React,{ Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from '../reducers';
import MovieDetail from './MovieDetail';
import MoviesList from './MoviesList';

const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 
const App = () =>{
  return(
         <Provider store={store} >
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <MoviesList/>
                    </div>
                    <div className="col-sm-6">
                        <MovieDetail/>
                    </div>
                </div>
            </div> 
         </Provider>
       ) 
}

export default App;