import axios from "axios";
import { currentUrl } from "../Assets/urls";

export const GET_FIRSTSLIDERS_START = "GET_FIRSTSLIDERS_START";
export const GET_FIRSTSLIDERS_SUCCESS = "GET_FIRSTSLIDERS_SUCCESS";
export const GET_FIRSTSLIDERS_FAILURE = "GET_FIRSTSLIDERS_FAILURE";

export const GET_SLIDER_FIRSTSLIDERS_START = "GET_SLIDER_FIRSTSLIDERS_START";
export const GET_SLIDER_FIRSTSLIDERS_SUCCESS = "GET_SLIDER_FIRSTSLIDERS_SUCCESS";
export const GET_SLIDER_FIRSTSLIDERS_FAILURE = "GET_SLIDER_FIRSTSLIDERS_FAILURE";

export const ADD_FIRSTSLIDER_START = "ADD_FIRSTSLIDER_START";
export const ADD_FIRSTSLIDER_SUCCESS = "ADD_FIRSTSLIDER_SUCCESS";
export const ADD_FIRSTSLIDER_FAILURE = "ADD_FIRSTSLIDER_FAILURE";

export const DELETE_FIRSTSLIDER_START = "DELETE_FIRSTSLIDER_START";
export const DELETE_FIRSTSLIDER_SUCCESS = "DELETE_FIRSTSLIDER_SUCCESS";
export const DELETE_FIRSTSLIDER_FAILURE = "DELETE_FIRSTSLIDER_FAILURE";

export const CHANGE_ORDER_FIRSTSLIDER_START = "CHANGE_ORDER_FIRSTSLIDER_START";
export const CHANGE_ORDER_FIRSTSLIDER_SUCCESS = "CHANGE_ORDER_FIRSTSLIDER_SUCCESS";
export const CHANGE_ORDER_FIRSTSLIDER_FAILURE = "CHANGE_ORDER_FIRSTSLIDER_FAILURE";

const headers = {
    Accept: "application/json"
}

export const getFirstSliders = (user_id) => dispatch => {
    dispatch({type: GET_FIRSTSLIDERS_START});
    axios.get(`${currentUrl}/api/firstslider/${user_id}`,{headers})
        .then(
            res => {
                // console.log(res.data)
                const sortedFirstFliders = res.data.sort((a, b) => {
                    return a.order_number - b.order_number;
                });
                // console.log(sortedFirstFliders)
                dispatch({type:GET_FIRSTSLIDERS_SUCCESS, payload: sortedFirstFliders})
            }
        ).catch(err => {
            // console.log(err)
            dispatch({type: GET_FIRSTSLIDERS_FAILURE})
        })
}

export const getSliderFirstSliders = (user_id) => dispatch => {
    dispatch({type: GET_SLIDER_FIRSTSLIDERS_START});
    axios.get(`${currentUrl}/api/firstslider/${user_id}/slider`,{headers})
        .then(
            res => {
                // console.log(res.data)
                const sortedFirstFliders = res.data.sort((a, b) => {
                    return a.order_number - b.order_number;
                });
                // console.log(sortedFirstFliders)
                dispatch({type:GET_SLIDER_FIRSTSLIDERS_SUCCESS, payload: sortedFirstFliders})
            }
        ).catch(err => {
            // console.log(err)
            dispatch({type: GET_SLIDER_FIRSTSLIDERS_FAILURE})
        })
}

export const addFirstSlider = (image) => dispatch => {
    dispatch({type : ADD_FIRSTSLIDER_START})
    const editedImage = {...image, order_number: image.order_number}
    // console.log(editedImage)
        axios.post(`${currentUrl}/api/firstslider/`,editedImage)
            .then(res => {
                // console.log(res)
                dispatch({type: ADD_FIRSTSLIDER_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({type: ADD_FIRSTSLIDER_FAILURE})
            })
}

export const deleteFirstSlider = (id) => dispatch => {
    // console.log(id)
    dispatch({type : DELETE_FIRSTSLIDER_START})
    axios.delete(`${currentUrl}/api/firstslider/${id}`, headers)
        .then(res => {
            // console.log(res)
            dispatch({type: DELETE_FIRSTSLIDER_SUCCESS, payload:res.data})
        })
        .catch(err => {
            // console.log(err)
            dispatch({type: DELETE_FIRSTSLIDER_FAILURE})
        })
}

export const changeOrderFirstSlider = (id, changes) => dispatch => {
    // console.log(`id:${id} changes:${changes.order_number}`)
    dispatch({type: CHANGE_ORDER_FIRSTSLIDER_START})
    axios.put(`${currentUrl}/api/firstslider/${id}`, changes)
        .then(res => {
            // console.log(res)
            dispatch({type: CHANGE_ORDER_FIRSTSLIDER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: CHANGE_ORDER_FIRSTSLIDER_FAILURE})
        })
}
