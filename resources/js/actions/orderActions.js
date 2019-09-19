import {ADD_SESSION} from "../actions/types";

export const addSession=(token)=>dispatch =>{
    dispatch({
        type:ADD_SESSION,
        payload:token
    })
};
