import { GET_PRODUCTS_START, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE, ADD_PRODUCT_START, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE, DELETE_PRODUCT_START, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE,CHANGE_ORDER_PRODUCTS_START, CHANGE_ORDER_PRODUCTS_SUCCESS, CHANGE_ORDER_PRODUCTS_FAILURE} from "../../actions/admin/productsActions";



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
        case CHANGE_ORDER_PRODUCTS_START:
            return {...state, loading: true};
        case CHANGE_ORDER_PRODUCTS_SUCCESS:
            const changedImages = state.images.map(image => {
                if(image.id === action.payload.id){
                    image.order_number = action.payload.order_number
                }
                return image
            })
            return {...state, loading: false, images: changedImages};
        case CHANGE_ORDER_PRODUCTS_FAILURE:
            return {...state, loading: false};      
        default:
            return state;
    }
}