import { USER_LOGIN_START, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, CLEAR_LOGIN_ERROR, USER_LOGOUT, 
    // ADD_BIOGRAPHY_START,ADD_BIOGRAPHY_SUCCESS,ADD_BIOGRAPHY_FAILURE, GET_BIOGRAPHY_SUCCESS, GET_BIOGRAPHY_FAILURE 
} from "../../actions/admin/userActions"


const user = {
    user_id : "",
    username : "",
    loading: false,
    loginError: "",
}

export const userReducer = ( state = user, action ) => {
    switch( action.type ) {
        case USER_LOGIN_START:
            return {...state, loading: true };
        case USER_LOGIN_SUCCESS:
            return {...state, user_id:action.payload.user_id, username: action.payload.username, loading: false };
        case USER_LOGIN_FAILURE:
            return {...state, loading: false, loginError: action.payload };
        case CLEAR_LOGIN_ERROR:
            return { ...state, loginError: ""};
        case USER_LOGOUT:
            return {...state, user_id: "", username: "", loading:false };
        default:
            return state;
    }
}