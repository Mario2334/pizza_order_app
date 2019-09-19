import {ADD_SESSION} from "../actions/types";

const initialState = {
    session_token:""

};

export default function (state = initialState , action) {
    switch (action.type) {
        case ADD_SESSION:
            return {
                ...state,
                session_token: action.payload
            };
        default:
            return state
    }
}
