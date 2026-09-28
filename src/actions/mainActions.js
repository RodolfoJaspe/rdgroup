export const GET_HEADSHOT = "GET_HEADSHOT";
export const GET_LOGO = "GET_LOGO";

export const getHeadshot = () => dispatch => {
    let headshot = {
        title: "Juan Manuel",
        url: process.env.PUBLIC_URL + "/JuanManuelMorales.png"
    }
    dispatch({type: GET_HEADSHOT, payload: headshot})
}

export const getLogo = () => dispatch => {
    let logo = {
        title : " RD Group",
        url : "https://lh3.googleusercontent.com/pw/ABLVV852BS6A-FackcNASgeXBklSCoDBAPLsWHNWVcWs0O8ipLEwsVqcz9uEYFGJSgd5A-e4enYOEYKUWBDzVTK5ILzEvnEcSMMSHh-ERBdOp6K3ovqJqX_QRCTAYdq6au85acw4oX4-RHwhCu_79CG9mEAx=w2364-h1532-s-no-gm?authuser=0",
    }
    dispatch({type: GET_LOGO, payload: logo})
}

