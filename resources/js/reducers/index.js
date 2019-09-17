import {combineReducers} from "redux";
import pizzaReducer from './pizzaReducers'

export default combineReducers({
    pizza_items : pizzaReducer
})
