import axios from "axios";
import { currentUrl } from "../Assets/urls";

export const GET_DESIGNS_START = "GET_DESIGNS_START";
export const GET_DESIGNS_SUCCESS = "GET_DESIGNS_SUCCESS";
export const GET_DESIGNS_FAILURE = "GET_DESIGNS_FAILURE";

export const GET_SLIDER_DESIGNS_START = "GET_SLIDER_DESIGNS_START";
export const GET_SLIDER_DESIGNS_SUCCESS = "GET_SLIDER_DESIGNS_SUCCESS";
export const GET_SLIDER_DESIGNS_FAILURE = "GET_SLIDER_DESIGNS_FAILURE";

export const ADD_DESIGN_START = "ADD_DESIGN_START";
export const ADD_DESIGN_SUCCESS = "ADD_DESIGN_SUCCESS";
export const ADD_DESIGN_FAILURE = "ADD_DESIGN_FAILURE";

export const DELETE_DESIGN_START = "DELETE_DESIGN_START";
export const DELETE_DESIGN_SUCCESS = "DELETE_DESIGN_SUCCESS";
export const DELETE_DESIGN_FAILURE = "DELETE_DESIGN_FAILURE";

export const CHANGE_ORDER_DESIGN_START = "CHANGE_ORDER_DESIGN_START";
export const CHANGE_ORDER_DESIGN_SUCCESS = "CHANGE_ORDER_DESIGN_SUCCESS";
export const CHANGE_ORDER_DESIGN_FAILURE = "CHANGE_ORDER_DESIGN_FAILURE";

const headers = {
    Accept: "application/json"
}

export const getDesigns = (user_id,setImages) => dispatch => {
    dispatch({type: GET_DESIGNS_START});
    // console.log(user_id)
    axios.get(`${currentUrl}/api/designs/${user_id}`,{headers})
        .then(
            res => {
                // console.log(res.data)
                const sortedDesigns = res.data.sort((a, b) => {
                    return a.order_number - b.order_number;
                });
                // console.log(sortedDesigns)
                setImages(sortedDesigns)
                dispatch({type:GET_DESIGNS_SUCCESS, payload: sortedDesigns})
            }
        ).catch(err => {
            // console.log(err)
            dispatch({type: GET_DESIGNS_FAILURE})
        })
}

export const getSliderDesigns = (user_id) => dispatch => {
    dispatch({type: GET_SLIDER_DESIGNS_START});
    // console.log(user_id)
    axios.get(`${currentUrl}/api/designs/${user_id}/slider`,{headers})
        .then(
            res => {
                // console.log(res.data)
                const sortedDesigns = res.data.sort((a, b) => {
                    return a.order_number - b.order_number;
                });
                // console.log(sortedDesigns)
                dispatch({type:GET_SLIDER_DESIGNS_SUCCESS, payload: sortedDesigns})
            }
        ).catch(err => {
            // console.log(err)
            dispatch({type: GET_SLIDER_DESIGNS_FAILURE})
        })
}

export const addDesign = (image) => dispatch => {
    dispatch({type : ADD_DESIGN_START})
    const editedImage = {...image, order_number: image.order_number}
    console.log(image)
        axios.post(`${currentUrl}/api/designs/`,editedImage)
            .then(res => {
                // console.log(res)
                dispatch({type: ADD_DESIGN_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({type: ADD_DESIGN_FAILURE})
            })
}

export const deleteDesign = (id) => dispatch => {
    // console.log(id)
    dispatch({type : DELETE_DESIGN_START})
    axios.delete(`${currentUrl}/api/designs/${id}`, headers)
        .then(res => {
            // console.log(res)
            dispatch({type: DELETE_DESIGN_SUCCESS, payload:res.data})
        })
        .catch(err => {
            // console.log(err)
            dispatch({type: DELETE_DESIGN_FAILURE})
        })
}

export const changeOrderDesign = (id, changes) => dispatch => {
    // console.log(`id:${id} changes:${changes.order_number}`)
    dispatch({type: CHANGE_ORDER_DESIGN_START})
    axios.put(`${currentUrl}/api/designs/${id}`, changes)
        .then(res => {
            // console.log(res)
            dispatch({type: CHANGE_ORDER_DESIGN_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: CHANGE_ORDER_DESIGN_FAILURE})
        })
}
