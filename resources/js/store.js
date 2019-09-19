import {createStore , applyMiddleware , compose} from 'redux'
import thunk from "redux-thunk";
import rootReducer from './reducers'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'


const initialState = {};

export const history = createBrowserHistory();

const middleware = [thunk , routerMiddleware(history)];

const extension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    rootReducer(history) ,
    initialState,
   compose(
       applyMiddleware(...middleware),
       extension
       ),
    );

export default store
