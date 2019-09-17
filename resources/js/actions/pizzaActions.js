import {FETCH_PIZZA_LIST, ADD_PIZZA,DELETE_PIZZA} from './types'
import axios from "axios";

export const fetchPizzaList=()=>dispatch =>{
    axios.get("/api/pizzas").then(response=>{
        dispatch({
            type:FETCH_PIZZA_LIST,
            payload:response.data
        })
    })
}
export const addPizza = (pizza) => dispatch => {
    dispatch({
        type:ADD_PIZZA,
        payload:pizza
    })
};
