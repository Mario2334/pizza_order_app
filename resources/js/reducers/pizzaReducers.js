import {FETCH_PIZZA_LIST , ADD_PIZZA, DELETE_PIZZA} from '../actions/types'

const initialState ={
    top_pizza_list:[],
    buy_pizza_list:{}
};

export default function (state = initialState , action) {
    switch (action.type) {
        case FETCH_PIZZA_LIST:
            console.log("reducer");
            return {
                ...state,
                top_pizza_list: action.payload
            };
        case ADD_PIZZA:
            return {
                ...state,
                payload: action.payload
            };
        default:
            return state
    }
}
