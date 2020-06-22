import React,{ Component } from 'react';
import {createStore,applyMiddleware,compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import MovieDetail from './MovieDetail';
import MoviesList from './MoviesList';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
 
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