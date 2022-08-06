import React from 'react';
import { portfolio } from '../Assets/images';
import Slider from './Slider';
import "../styles/Portfolio.css";

export default function Portfolio() {

    const projectsAndDesign = portfolio.filter(category => category.category === "Projects & Design")
    const constructionAndDev = portfolio.filter(category => category.category === "Construction & Development")
    const plans = portfolio.filter(category => category.category === "plans")
    
  return (
    <div className='portfolio'> 
        {portfolio.map(category => (
            <div className='portfolio-slider-outer' style={{background:`${category.color}`}}>
                <div className='portfolio-slider-inner'>
                  <Slider images={category.images} />  
                </div>
            </div>
        ))}
    </div>
  )
}
