import {FETCH_COMMENTS, IS_LOGGED_IN, SAVE_COMMENT} from "actions/types";
import axios from "axios";

export const saveComment = (comment) => {

    return {
        type:SAVE_COMMENT,
        payload: comment
    }
}


export const fetchComments = () =>{
    const response = axios.get("http://jsonplaceholder.typicode.com/comments");

    return {
        type:FETCH_COMMENTS,
        payload:response
    }
}


export const login = (userLoggedIn) =>{
    return {
        type:IS_LOGGED_IN,
        payload:userLoggedIn
    }
}