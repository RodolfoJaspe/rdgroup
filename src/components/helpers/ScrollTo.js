export default function ScrollTo(companyBranch) {
        
    let scrollTo = 0

    //portrait phone

    if(window.innerWidth <= 600 && window.innerHeight > window.innerWidth && companyBranch === "design"){
        scrollTo = 550
    }else if(window.innerWidth <= 600 && window.innerHeight > window.innerWidth && companyBranch === "construction"){
        scrollTo = 960
    }else if(window.innerWidth <= 600 && window.innerHeight > window.innerWidth && companyBranch === "products"){
        scrollTo = 1500
    }

    //landscape phone
    else if(window.innerWidth <= 900 && window.innerHeight < window.innerWidth && companyBranch === "design"){
        scrollTo = 550
    }else if(window.innerWidth <= 900 && window.innerHeight < window.innerWidth && companyBranch === "construction"){
        scrollTo = 960
    }else if(window.innerWidth <= 900 && window.innerHeight < window.innerWidth && companyBranch === "products"){
        scrollTo = 1400
    }
    

    //portrait tablet
    else if(window.innerWidth <= 800 && window.innerHeight > window.innerWidth && companyBranch === "design"){
        scrollTo = 700
    }else if(window.innerWidth <= 800 && window.innerHeight > window.innerWidth && companyBranch === "construction"){
        scrollTo = 1320
    }else if(window.innerWidth <= 800 && window.innerHeight > window.innerWidth && companyBranch === "products"){
        scrollTo = 1900
    }

    //landscape tablet
    else if(window.innerWidth <= 1100 && window.innerHeight < window.innerWidth && companyBranch === "design"){
        scrollTo = 800
    }else if(window.innerWidth <= 1100 && window.innerHeight < window.innerWidth && companyBranch === "construction"){
        scrollTo = 1620
    }else if(window.innerWidth <= 1100 && window.innerHeight < window.innerWidth && companyBranch === "products"){
        scrollTo = 2430
    }
    // laptop
    
    else if(window.innerWidth <= 1600 && companyBranch === "design"){
        scrollTo = 800 
    }else if(window.innerWidth <= 1600 && companyBranch === "construction"){
        scrollTo = 1650 
    }else if(window.innerWidth <= 1600 && companyBranch === "products"){
        scrollTo = 2500 
    }
    // desktop
    
    else if(window.innerWidth > 1600 && companyBranch === "design"){
        scrollTo = 1050
    } else if(window.innerWidth > 1600 && companyBranch === "construction"){
        scrollTo = 2250
    } else if(window.innerWidth > 1600 && companyBranch === "products"){
        scrollTo = 3400
    } 

    return scrollTo
} 