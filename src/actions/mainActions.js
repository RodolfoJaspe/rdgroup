export const GET_HEADSHOT = "GET_HEADSHOT";
export const GET_LOGO = "GET_LOGO";

export const getHeadshot = () => dispatch => {
    let headshot = {
        title: "Juan Manuel",
        url: "https://lh3.google.com/u/0/d/1m6YODj9WHHq86qS7Noz6WRgFw-NiAPpl"
    }
    dispatch({type: GET_HEADSHOT, payload: headshot})
}

export const getLogo = () => dispatch => {
    let logo = {
        title : " RD Group",
        url : "https://lh3.google.com/u/0/d/10zaF3juTzTEjietUm_chQO0VHPQi46nt",
    }
    dispatch({type: GET_LOGO, payload: logo})
}

