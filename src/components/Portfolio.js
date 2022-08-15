import React from 'react';
import { portfolio } from '../Assets/images';
import Slider from './Slider';
import "../styles/Portfolio.css";
import { pageImages } from '../Assets/images';
import { Link } from 'react-scroll';

export default function Portfolio() {
    const filteredImages = pageImages.filter(image => image.id !== 1)
    console.log(filteredImages)
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
                        offset={1050}
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
                        offset={2200}
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
                        offset={3380}
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
