import { GET_CONSTRUCTIONS_START, GET_CONSTRUCTIONS_SUCCESS, GET_CONSTRUCTIONS_FAILURE, ADD_CONSTRUCTION_START, ADD_CONSTRUCTION_SUCCESS, ADD_CONSTRUCTION_FAILURE, DELETE_CONSTRUCTION_START, DELETE_CONSTRUCTION_SUCCESS, DELETE_CONSTRUCTION_FAILURE,CHANGE_ORDER_CONSTRUCTION_START, CHANGE_ORDER_CONSTRUCTION_SUCCESS, CHANGE_ORDER_CONSTRUCTION_FAILURE} from "../actions/constructionActions";



const constructions = {
    user_id : "",
    loading: false,
    images: []
}

export const constructionReducer = ( state = constructions, action ) => {
    switch( action.type ) {
        case GET_CONSTRUCTIONS_START:
            return {...state, loading: true};
        case GET_CONSTRUCTIONS_SUCCESS:
            return {...state, loading: false, images: action.payload};
        case GET_CONSTRUCTIONS_FAILURE:
            return {...state, loading: false};
        case ADD_CONSTRUCTION_START:
            return {...state, loading: true};
        case ADD_CONSTRUCTION_SUCCESS:
            return {...state, loading: false, images: [...state.images, action.payload]};
        case ADD_CONSTRUCTION_FAILURE:
            return {...state, loading: false}; 
        case DELETE_CONSTRUCTION_START:
            return {...state, loading: true};
        case DELETE_CONSTRUCTION_SUCCESS:
            const filteredConstructions = state.images.filter(image => image.id !== action.payload.id)
            return {...state, loading: false, images: filteredConstructions};
        case DELETE_CONSTRUCTION_FAILURE:
            return {...state, loading:false};
        case CHANGE_ORDER_CONSTRUCTION_START:
            return {...state, loading: true};
        case CHANGE_ORDER_CONSTRUCTION_SUCCESS:
            const changedImages = state.images.map(image => {
                if(image.id === action.payload.id){
                    image.order_number = action.payload.order_number
                }
                return image
            })
            return {...state, loading: false, images: changedImages};
        case CHANGE_ORDER_CONSTRUCTION_FAILURE:
            return {...state, loading: false};   
        default:
            return state;
    }
}