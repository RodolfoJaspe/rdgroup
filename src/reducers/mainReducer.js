import { GET_HEADSHOT, GET_LOGO } from "../actions/mainActions";

const main = {
    headshot: {},
    logo: {}
}

export const mainReducer = (state = main, action ) => {
    switch( action.type ){
        case GET_HEADSHOT:
            return {...state, headshot: action.payload};
        case GET_LOGO:
            return {...state, logo: action.payload};
        default:
            return state;
    }
}