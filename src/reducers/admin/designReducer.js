import { GET_DESIGNS_START, GET_DESIGNS_SUCCESS, GET_DESIGNS_FAILURE, ADD_DESIGN_START, ADD_DESIGN_SUCCESS, ADD_DESIGN_FAILURE, DELETE_DESIGN_START, DELETE_DESIGN_SUCCESS, DELETE_DESIGN_FAILURE,CHANGE_ORDER_DESIGN_START, CHANGE_ORDER_DESIGN_SUCCESS, CHANGE_ORDER_DESIGN_FAILURE} from "../../actions/admin/designActions";



const designs = {
    user_id : "",
    loading: false,
    images: []
}

export const designReducer = ( state = designs, action ) => {
    switch( action.type ) {
        case GET_DESIGNS_START:
            return {...state, loading: true};
        case GET_DESIGNS_SUCCESS:
            return {...state, loading: false, images: action.payload};
        case GET_DESIGNS_FAILURE:
            return {...state, loading: false};
        case ADD_DESIGN_START:
            return {...state, loading: true};
        case ADD_DESIGN_SUCCESS:
            return {...state, loading: false, images: [...state.images, action.payload]};
        case ADD_DESIGN_FAILURE:
            return {...state, loading: false}; 
        case DELETE_DESIGN_START:
            return {...state, loading: true};
        case DELETE_DESIGN_SUCCESS:
            const filteredDesigns = state.images.filter(image => image.id !== action.payload.id)
            return {...state, loading: false, images: filteredDesigns};
        case DELETE_DESIGN_FAILURE:
            return {...state, loading:false};
        case CHANGE_ORDER_DESIGN_START:
            return {...state, loading: true};
        case CHANGE_ORDER_DESIGN_SUCCESS:
            const changedImages = state.images.map(image => {
                if(image.id === action.payload.id){
                    image.order_number = action.payload.order_number
                }
                return image
            })
            return {...state, loading: false, images: changedImages};
        case CHANGE_ORDER_DESIGN_FAILURE:
            return {...state, loading: false};   
        default:
            return state;
    }
}