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
            <div className='about-bottom'>
                <h1>Products and Services</h1>
                <div className='products-and-services'>
                    <div className='products-and-services-child'>
                        <Link 
                            to='portfolio'
                            smooth={true}
                            offset={1050}
                            duration={1000}>
                            <h2>RD Projects & Design:</h2>
                        </Link>
                        
                        <p>Commercial & Residential Design</p>
                    </div>
                    <div className='products-and-services-child'>
                        <Link 
                            to='portfolio'
                            smooth={true}
                            offset={2200}
                            duration={1200}>
                            <h2>RD Construction & development:</h2>
                        </Link>
                        <p>Turnkey commercial or residential project development </p>
                    </div>
                    <div className='products-and-services-child'>
                        <Link 
                            to='portfolio'
                            smooth={true}
                            offset={3380}
                            duration={2000}>
                            <h2>RD Products:</h2>
                        </Link>
                        <p>On of a kind designer product specially curated to enhance any design </p>
                    </div>
                </div>
                {/* <h2>THE COMPETITIVE ADVANTAGE</h2>
                <p>The combination of and experience architect and designer with vast resources and access to hand selected construction materials.</p> */}
                
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
