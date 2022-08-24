import axios from "axios";
import { currentUrl } from "../../Assets/urls";

export const GET_DESIGNS_START = "GET_DESIGNS_START";
export const GET_DESIGNS_SUCCESS = "GET_DESIGNS_SUCCESS";
export const GET_DESIGNS_FAILURE = "GET_DESIGNS_FAILURE";

export const ADD_DESIGN_START = "ADD_DESIGN_START";
export const ADD_DESIGN_SUCCESS = "ADD_DESIGN_SUCCESS";
export const ADD_DESIGN_FAILURE = "ADD_DESIGN_FAILURE";

export const DELETE_DESIGN_START = "DELETE_DESIGN_START";
export const DELETE_DESIGN_SUCCESS = "DELETE_DESIGN_SUCCESS";
export const DELETE_DESIGN_FAILURE = "DELETE_DESIGN_FAILURE";

const headers = {
    Accept: "application/json"
}

export const getDesigns = (user_id) => dispatch => {
    dispatch({type: GET_DESIGNS_START});
    console.log(user_id)
    axios.get(`${currentUrl}/api/designs/${user_id}`,{headers})
        .then(
            res => {
                console.log(res.data)
                const sortedDesigns = res.data.sort((a, b) => {
                    return b.id - a.id;
                });
                console.log(sortedDesigns)
                dispatch({type:GET_DESIGNS_SUCCESS, payload: sortedDesigns})
            }
        ).catch(err => {
            console.log(err)
            dispatch({type: GET_DESIGNS_FAILURE})
        })
}

export const addDesign = (image) => dispatch => {
    dispatch({type : ADD_DESIGN_START})
    console.log(image)
        axios.post(`${currentUrl}/api/designs/`,image)
            .then(res => {
                console.log(res)
                dispatch({type: ADD_DESIGN_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({type: ADD_DESIGN_FAILURE})
            })
}

export const deleteDesign = (id) => dispatch => {
    console.log(id)
    dispatch({type : DELETE_DESIGN_START})
    axios.delete(`${currentUrl}/api/designs/${id}`, headers)
        .then(res => {
            console.log(res)
            dispatch({type: DELETE_DESIGN_SUCCESS, payload:res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: DELETE_DESIGN_FAILURE})
        })
}
