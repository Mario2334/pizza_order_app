import {FETCH_PIZZA_LIST , ADD_PIZZA, DELETE_PIZZA } from '../actions/types'

const initialState ={
    top_pizza_list:[],
    add_buy_pizza:{},
};

export default function (state = initialState , action) {
    switch (action.type) {
        case FETCH_PIZZA_LIST:
            return {
                ...state,
                top_pizza_list: action.payload
            };
        case ADD_PIZZA:
            var payload = Object.assign(state.add_buy_pizza,action.payload);
            return {
                ...state,
                add_buy_pizza: payload
            };
        case DELETE_PIZZA:
            delete state.add_buy_pizza[action.payload];
            return {...state};
        default:
            return state
    }
}
