import React from 'react';
import { portfolio } from '../Assets/images';
import Slider from './Slider';
import "../styles/Portfolio.css";

export default function Portfolio() {
    
  return (
    <div className='portfolio'> 
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
