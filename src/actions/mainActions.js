export const GET_HEADSHOT = "GET_HEADSHOT";
export const GET_LOGO = "GET_LOGO";

export const getHeadshot = () => dispatch => {
    let headshot = {
        title: "Juan Manuel",
        url: "https://lh3.googleusercontent.com/pw/ABLVV84kbSpzCzVaQYkHvYiS2_n_rrAkG6K23SRISfEHNffM8M6DaCrL_S9VtR4s-z_qStvRrutUI9HL-tQhGQff1b2Ozjb3MLFMBIWDK7wfhYXEjqIKz7Xa3B1qdf4JB6a6PReJc_WrzVDMelbSLrSfgdXs=w400-h400-s-no-gm?authuser=0"
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

