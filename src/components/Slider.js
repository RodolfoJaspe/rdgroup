import React from 'react';
import "../styles/Slider.css";
import AliceCarousel from 'react-alice-carousel';
import NextArrow from "../Assets/icons/rightArrowWhite.png"
import PrevArrow from "../Assets/icons/leftArrowWhite.png"

export default function Slider({images}) {

    const handleDragStart = (e) => (e.preventDefault());

    const pictures = images.map(image => (
        <div className='slider-image-div'>
            <img className="slider-image" src={image.url} alt={image.title} onDragStart={handleDragStart} role="presentation"/>
            <h3>{image.description}</h3>
        </div>
    )) 
    
    const renderNextButton = ({ isDisabled }) => {
        return <div className='next-arrow'><img src={NextArrow} alt="next-arrow"/></div>
      };
    
    const renderPrevButton = ({ isDisabled }) => {
    return <div className='prev-arrow'><img src={PrevArrow} alt="prev-arrow"/></div>
    };

  return (
    <AliceCarousel 
        mouseTracking 
        items={pictures}
        className="slider"
        autoPlay
        autoPlayInterval={2000}
        animationDuration={1500}
        infinite
        keyboardNavigation
        animationType="linear" 
        controlsStrategy="alternate"
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        disableDotsControls={true}
        />
  )
}
