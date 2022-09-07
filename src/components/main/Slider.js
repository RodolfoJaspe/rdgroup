import React from 'react';
import "../../styles/main/Slider.css";
import AliceCarousel from 'react-alice-carousel';
import NextArrow from "../../Assets/icons/rightArrowWhite.png"
import PrevArrow from "../../Assets/icons/leftArrowWhite.png"

export default function Slider({images, category}) {

    const handleDragStart = (e) => (e.preventDefault());
    // console.log(images)
    const pictures = images.map(image => (
        <div className='slider-image-div' key={image.id}>
            <img className="slider-image" src={image.url} alt={image.title} onDragStart={handleDragStart} role="presentation" width={900} height={600}/>
            <div className={category==="products"?"product-title-div":'image-title-div'}>
              <h3 className={category==="products"?"product-title":'image-title'}>{image.title}</h3>   
            </div>
        </div>
    ))
    
    const renderNextButton = ({ isDisabled }) => {
        return <div className='next-arrow'><img src={NextArrow} alt="next-arrow" width={50} height={50}/></div>
      };
    
    const renderPrevButton = ({ isDisabled }) => {
    return <div className='prev-arrow'><img src={PrevArrow} alt="prev-arrow" width={50} height={50}/></div>
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
