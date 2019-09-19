import {combineReducers} from "redux";
import pizzaReducer from './pizzaReducers'
import orderReducer from './orderReducers'
import { connectRouter } from 'connected-react-router'

const rootReducer= (history) => combineReducers({
    pizza_items : pizzaReducer,
    router: connectRouter(history),
    order : orderReducer
});

export default rootReducer
