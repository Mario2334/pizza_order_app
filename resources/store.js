import {createStore , applyMiddleware , compose} from 'redux'
import thunk from "redux-thunk";
import rootReducer from './js/reducers'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'


const initialState = {};

export const history = createBrowserHistory();

const middleware = [thunk , routerMiddleware(history)];


const store = createStore(
    rootReducer(history) ,
    initialState,
   compose(
       applyMiddleware(...middleware),
       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
       ),
    );

export default store
