import axios from "axios";
import { currentUrl } from "../Assets/urls";

export const GET_CONSTRUCTIONS_START = "GET_CONSTRUCTIONS_START";
export const GET_CONSTRUCTIONS_SUCCESS = "GET_CONSTRUCTIONS_SUCCESS";
export const GET_CONSTRUCTIONS_FAILURE = "GET_CONSTRUCTIONS_FAILURE";

export const ADD_CONSTRUCTION_START = "ADD_CONSTRUCTION_START";
export const ADD_CONSTRUCTION_SUCCESS = "ADD_CONSTRUCTION_SUCCESS";
export const ADD_CONSTRUCTION_FAILURE = "ADD_CONSTRUCTION_FAILURE";

export const DELETE_CONSTRUCTION_START = "DELETE_CONSTRUCTION_START";
export const DELETE_CONSTRUCTION_SUCCESS = "DELETE_CONSTRUCTION_SUCCESS";
export const DELETE_CONSTRUCTION_FAILURE = "DELETE_CONSTRUCTION_FAILURE";

export const CHANGE_ORDER_CONSTRUCTION_START = "CHANGE_ORDER_CONSTRUCTION_START";
export const CHANGE_ORDER_CONSTRUCTION_SUCCESS = "CHANGE_ORDER_CONSTRUCTION_SUCCESS";
export const CHANGE_ORDER_CONSTRUCTION_FAILURE = "CHANGE_ORDER_CONSTRUCTION_FAILURE";

const headers = {
    Accept: "application/json"
}

export const getConstructions = (user_id) => dispatch => {
    dispatch({type: GET_CONSTRUCTIONS_START});
    axios.get(`${currentUrl}/api/constructions/${user_id}`,{headers})
        .then(
            res => {
                // console.log(res.data)
                const sortedConstructions = res.data.sort((a, b) => {
                    return a.order_number - b.order_number;
                });
                console.log(sortedConstructions)
                dispatch({type:GET_CONSTRUCTIONS_SUCCESS, payload: sortedConstructions})
            }
        ).catch(err => {
            // console.log(err)
            dispatch({type: GET_CONSTRUCTIONS_FAILURE})
        })
}

export const addConstruction = (image) => dispatch => {
    dispatch({type : ADD_CONSTRUCTION_START})
    const editedImage = {...image, order_number: image.order_number}
    // console.log(editedImage)
        axios.post(`${currentUrl}/api/constructions/`,editedImage)
            .then(res => {
                // console.log(res)
                dispatch({type: ADD_CONSTRUCTION_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({type: ADD_CONSTRUCTION_FAILURE})
            })
}

export const deleteConstruction = (id) => dispatch => {
    console.log(id)
    dispatch({type : DELETE_CONSTRUCTION_START})
    axios.delete(`${currentUrl}/api/constructions/${id}`, headers)
        .then(res => {
            // console.log(res)
            dispatch({type: DELETE_CONSTRUCTION_SUCCESS, payload:res.data})
        })
        .catch(err => {
            // console.log(err)
            dispatch({type: DELETE_CONSTRUCTION_FAILURE})
        })
}

export const changeOrderConstruction = (id, changes) => dispatch => {
    // console.log(`id:${id} changes:${changes.order_number}`)
    dispatch({type: CHANGE_ORDER_CONSTRUCTION_START})
    axios.put(`${currentUrl}/api/constructions/${id}`, changes)
        .then(res => {
            // console.log(res)
            dispatch({type: CHANGE_ORDER_CONSTRUCTION_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: CHANGE_ORDER_CONSTRUCTION_FAILURE})
        })
}
