import { GET_PRODUCTS_START, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE, ADD_PRODUCT_START, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE, DELETE_PRODUCT_START, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE} from "../../actions/admin/productsActions";



const products = {
    user_id : "",
    loading: false,
    images: []
}

export const productsReducer = ( state = products, action ) => {
    switch( action.type ) {
        case GET_PRODUCTS_START:
            return {...state, loading: true};
        case GET_PRODUCTS_SUCCESS:
            return {...state, loading: false, images: action.payload};
        case GET_PRODUCTS_FAILURE:
            return {...state, loading: false};
        case ADD_PRODUCT_START:
            return {...state, loading: true};
        case ADD_PRODUCT_SUCCESS:
            return {...state, loading: false, images: [...state.images, action.payload]};
        case ADD_PRODUCT_FAILURE:
            return {...state, loading: false}; 
        case DELETE_PRODUCT_START:
            return {...state, loading: true};
        case DELETE_PRODUCT_SUCCESS:
            const filteredProducts = state.images.filter(image => image.id !== action.payload.id)
            return {...state, loading: false, images: filteredProducts};
        case DELETE_PRODUCT_FAILURE:
            return {...state, loading:false};   
        default:
            return state;
    }
}