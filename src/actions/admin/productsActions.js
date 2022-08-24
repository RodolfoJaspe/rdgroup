import axios from "axios";
import { currentUrl } from "../../Assets/urls";

export const GET_PRODUCTS_START = "GET_PRODUCTS_START";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";

export const ADD_PRODUCT_START = "ADD_PRODUCT_START";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const ADD_PRODUCT_FAILURE = "ADD_PRODUCT_FAILURE";

export const DELETE_PRODUCT_START = "DELETE_PRODUCT_START";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_FAILURE = "DELETE_PRODUCT_FAILURE";

const headers = {
    Accept: "application/json"
}

export const getProducts = (user_id) => dispatch => {
    dispatch({type: GET_PRODUCTS_START});
    console.log(user_id)
    axios.get(`${currentUrl}/api/products/${user_id}`,{headers})
        .then(
            res => {
                console.log(res.data)
                const sortedProducts = res.data.sort((a, b) => {
                    return b.id - a.id;
                });
                console.log(sortedProducts)
                dispatch({type:GET_PRODUCTS_SUCCESS, payload: sortedProducts})
            }
        ).catch(err => {
            console.log(err)
            dispatch({type: GET_PRODUCTS_FAILURE})
        })
}

export const addProduct = (image) => dispatch => {
    dispatch({type : ADD_PRODUCT_START})
    console.log(image)
        axios.post(`${currentUrl}/api/products/`,image)
            .then(res => {
                console.log(res)
                dispatch({type: ADD_PRODUCT_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({type: ADD_PRODUCT_FAILURE})
            })
}

export const deleteProduct = (id) => dispatch => {
    console.log(id)
    dispatch({type : DELETE_PRODUCT_START})
    axios.delete(`${currentUrl}/api/products/${id}`, headers)
        .then(res => {
            console.log(res)
            dispatch({type: DELETE_PRODUCT_SUCCESS, payload:res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: DELETE_PRODUCT_FAILURE})
        })
}
