import React,{useState} from 'react';
import { portfolio } from '../Assets/images';
import Slider from './Slider';
import "../styles/Portfolio.css";
import { pageImages } from '../Assets/images';
import { Link } from 'react-scroll';

export default function Portfolio() {
    const filteredImages = pageImages.filter(image => image.id !== 1)
    
    const ScrollTo = (companyBranch) => {
        
        // let {innerWidth, innerHeight} = window
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

    const [redState, setRedState] = useState(false)
    const [yellowState, setYellowState] = useState(false)
    const [blueState, setBlueState] = useState(false)

    const handleMouseEnter = (color) => {
        if(color === "red"){
           setRedState(true) 
        } else if (color === "yellow"){
            setYellowState(true)
        } else if(color === "blue"){
            setBlueState(true)
        }
    }

    const handleMouseLeave = (color) => {
        if(color === "red"){
           setRedState(false) 
        } else if (color === "yellow"){
            setYellowState(false)
        } else if(color === "blue"){
            setBlueState(false)
        }
    }

  return (
    <div className='portfolio'>
        <div className='first-slider'>
            <Slider images={filteredImages}/> 
        </div> 
        <div className='products-and-services'>
            <div className='h1-div'>
                <h1 className='h1'>SERVICES & PRODUCTS</h1>
            </div>
            <div className='services-outer'>
                <div className='service'>
                    <Link 
                        to='portfolio'
                        smooth={true}
                        offset={ScrollTo("design")}
                        duration={1000}
                        className='title design'
                        onMouseEnter={()=>handleMouseEnter("red")}
                        onMouseLeave ={()=>handleMouseLeave("red")}>
                            <div className='square-outer'>
                                <div className={redState?'red-square' : 'red-square-off'}></div>
                            </div>
                            <h2>RD Projects & Design:</h2>
                    </Link>
                    <div className='p-div'>
                        <p>
                            Commercial & Residential Design
                        </p>
                    </div>
                </div>
                <div className='service'>
                    <Link 
                        to='portfolio'
                        smooth={true}
                        offset={ScrollTo("construction")}
                        duration={1200}
                        className='title construction'
                        onMouseEnter={()=>handleMouseEnter("yellow")}
                        onMouseLeave ={()=>handleMouseLeave("yellow")}>
                            <div className='square-outer'>
                                <div className={yellowState?'yellow-square' : 'yellow-square-off'}></div>
                            </div>
                            <h2>RD Construction & development:</h2>
                    </Link>
                    <div className='p-div'>
                        <p>
                            Turnkey commercial or residential project development 
                        </p>
                    </div>
                </div>
                <div className='service'>
                    <Link 
                        to='portfolio'
                        smooth={true}
                        offset={ScrollTo("products")}
                        duration={2000}
                        className='title products'
                        onMouseEnter={()=>handleMouseEnter("blue")}
                        onMouseLeave ={()=>handleMouseLeave("blue")}>
                            <div className='square-outer'>   
                                <div className={blueState?'blue-square' : 'blue-square-off'}></div>
                            </div>
                            <h2>RD Products:</h2>
                    </Link>
                    <div className='p-div'>
                       <p>
                            On of a kind designer product specially curated to enhance any design
                        </p> 
                    </div>
                    
                </div> 
            </div>
            <div className='right-bar'>
                <div className='right-bar-red'></div>
                <div className='right-bar-yellow'></div>
                <div className='right-bar-blue'></div>
            </div>
        </div>
        
        {portfolio.map(category => (
            <div className='portfolio-slider-outer' style={{background:`${category.color}`}}>
                <div className='portfolio-slider-inner'>
                    <div className='portfolio-title'>
                        <img src='https://drive.google.com/uc?export=view&id=1Q-qaTTbYVJgxY1pE4-a6dKMu1b0Fj-tn' alt="logo"/>
                        <h2>{category.category}</h2>
                    </div>
                    <Slider images={category.images} />  
                </div>
            </div>
        ))}
    </div>
  )
}
