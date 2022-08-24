import { GET_FIRSTSLIDERS_START, GET_FIRSTSLIDERS_SUCCESS, GET_FIRSTSLIDERS_FAILURE, ADD_FIRSTSLIDER_START, ADD_FIRSTSLIDER_SUCCESS, ADD_FIRSTSLIDER_FAILURE, DELETE_FIRSTSLIDER_START, DELETE_FIRSTSLIDER_SUCCESS, DELETE_FIRSTSLIDER_FAILURE} from "../../actions/admin/firstSliderActions";



const firstSlider = {
    user_id : "",
    loading: false,
    images: []
}

export const firstSliderReducer = ( state = firstSlider, action ) => {
    switch( action.type ) {
        case GET_FIRSTSLIDERS_START:
            return {...state, loading: true};
        case GET_FIRSTSLIDERS_SUCCESS:
            return {...state, loading: false, images: action.payload};
        case GET_FIRSTSLIDERS_FAILURE:
            return {...state, loading: false};
        case ADD_FIRSTSLIDER_START:
            return {...state, loading: true};
        case ADD_FIRSTSLIDER_SUCCESS:
            return {...state, loading: false, images: [...state.images, action.payload]};
        case ADD_FIRSTSLIDER_FAILURE:
            return {...state, loading: false}; 
        case DELETE_FIRSTSLIDER_START:
            return {...state, loading: true};
        case DELETE_FIRSTSLIDER_SUCCESS:
            const filteredFirstSliders = state.images.filter(image => image.id !== action.payload.id)
            return {...state, loading: false, images: filteredFirstSliders};
        case DELETE_FIRSTSLIDER_FAILURE:
            return {...state, loading:false};   
        default:
            return state;
    }
}