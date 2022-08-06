import React from 'react';
import "../styles/Slider.css";
import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';

export default function Slider({images}) {

    const handleDragStart = (e) => (e.preventDefault());

    const pictures = images.map(image => (
       
            <img className="slider-image" src={image.url} alt={image.title} onDragStart={handleDragStart} role="presentation"/>
     
    )) 
    console.log(pictures)
  return (
    <AliceCarousel 
        mouseTracking 
        items={pictures}
        className="slider"
        autoPlay
        autoPlayInterval={1000}
        animationDuration={800}
        infinite
        keyboardNavigation
        animationType="linear" 
        controlsStrategy="alternate"
        />
  )
}
