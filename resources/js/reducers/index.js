import {combineReducers} from "redux";
import pizzaReducer from './pizzaReducers'
import { connectRouter } from 'connected-react-router'

const rootReducer= (history) => combineReducers({
    pizza_items : pizzaReducer,
    router: connectRouter(history)
});

export default rootReducer
