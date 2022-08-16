import React from 'react';
import { portfolio } from '../Assets/images';
import Slider from './Slider';
import "../styles/Portfolio.css";
import { pageImages } from '../Assets/images';
import { Link } from 'react-scroll';

export default function Portfolio() {
    const filteredImages = pageImages.filter(image => image.id !== 1)
    console.log(filteredImages)
    
    const ScrollTo = (window, companyBranch) => {
        let {innerWidth, innerHeight} = window
        let scrollTo = 0

        //portrait phone

        if(innerWidth <= 600 && innerHeight > innerWidth && companyBranch == "design"){
            scrollTo = 550
        }else if(innerWidth <= 600 && innerHeight > innerWidth && companyBranch == "construction"){
            scrollTo = 960
        }else if(innerWidth <= 600 && innerHeight > innerWidth && companyBranch == "products"){
            scrollTo = 1500
        }

        //landscape phone
        else if(innerWidth <= 900 && innerHeight < innerWidth && companyBranch == "design"){
            scrollTo = 550
        }else if(innerWidth <= 900 && innerHeight < innerWidth && companyBranch == "construction"){
            scrollTo = 960
        }else if(innerWidth <= 900 && innerHeight < innerWidth && companyBranch == "products"){
            scrollTo = 1400
        }
        

        //portrait tablet
        else if(innerWidth <= 800 && innerHeight > innerWidth && companyBranch == "design"){
            scrollTo = 700
        }else if(innerWidth <= 800 && innerHeight > innerWidth && companyBranch == "construction"){
            scrollTo = 1320
        }else if(innerWidth <= 800 && innerHeight > innerWidth && companyBranch == "products"){
            scrollTo = 1900
        }

        //landscape tablet
        else if(innerWidth <= 1100 && innerHeight < innerWidth && companyBranch == "design"){
            scrollTo = 800
        }else if(innerWidth <= 1100 && innerHeight < innerWidth && companyBranch == "construction"){
            scrollTo = 1620
        }else if(innerWidth <= 1100 && innerHeight < innerWidth && companyBranch == "products"){
            scrollTo = 2430
        }
        // laptop
        
        else if(innerWidth <= 1600 && companyBranch == "design"){
            scrollTo = 800 
        }else if(innerWidth <= 1600 && companyBranch == "construction"){
            scrollTo = 1650 
        }else if(innerWidth <= 1600 && companyBranch == "products"){
            scrollTo = 2500 
        }
        // desktop
        
        else if(innerWidth > 1600 && companyBranch == "design"){
            scrollTo = 1050
        } else if(innerWidth > 1600 && companyBranch == "construction"){
            scrollTo = 2250
        } else if(innerWidth > 1600 && companyBranch == "products"){
            scrollTo = 3400
        } 

        console.log(`width: ${window.innerWidth}, height: ${innerHeight}`)
        console.log(scrollTo)
        return scrollTo
    } 

  return (
    <div className='portfolio'>
        <div className='first-slider'>
            <Slider images={filteredImages}/> 
        </div> 
        <div className='products-and-services'>
            <div className='h1-div'>
                <h1>SERVICES AND PRODUCTS</h1>
            </div>
            <div className='services-outer'>
                <div className='service'>
                    <Link 
                        to='portfolio'
                        smooth={true}
                        offset={ScrollTo(window, "design")}
                        duration={1000}
                        className='title'>
                        <div className='square red-square'></div>
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
                        offset={ScrollTo(window,"construction")}
                        duration={1200}className='title'>
                        <div className='square yellow-square'></div>
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
                        offset={ScrollTo(window,"products")}
                        duration={2000}className='title'>
                        <div className='square blue-square'></div>
                        <h2>RD Products:</h2>
                    </Link>
                    <div className='p-div'>
                       <p>
                            On of a kind designer product specially curated to enhance any design
                        </p> 
                    </div>
                    
                </div> 
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
