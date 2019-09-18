import {FETCH_PIZZA_LIST,ADD_PIZZA,DELETE_PIZZA} from './types'
import axios from "axios";

export const fetchPizzaList=()=>dispatch =>{
    axios.get("/api/pizzas").then(response=>{
        dispatch({
            type:FETCH_PIZZA_LIST,
            payload:response.data
        })
    })
};
export const addPizza = (pizza , count) => dispatch => {
    console.log(pizza);
    pizza.count = parseInt(count);
    const pizza_arr = {};
    pizza_arr[pizza.id] = pizza;
    console.log(pizza);
    dispatch({
        type:ADD_PIZZA,
        payload:pizza_arr
    })
};

export const deletePizza=(id)=> dispatch =>{
    dispatch({
        type:DELETE_PIZZA,
        payload:id
    })
};
