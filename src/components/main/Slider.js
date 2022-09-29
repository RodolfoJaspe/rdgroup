import React from 'react';
import "../../styles/main/Slider.css";
import AliceCarousel from 'react-alice-carousel';
import NextArrow from "../../Assets/icons/rightArrowWhite.png"
import PrevArrow from "../../Assets/icons/leftArrowWhite.png"

export default function Slider({images, category}) {

    const handleDragStart = (e) => (e.preventDefault());
    
    const pictures = images.map(image => (
        <div className='slider-image-div' key={image.id}>
            <img className="slider-image" src={image.url} alt={image.title} onDragStart={handleDragStart} role="presentation" width={900} height={600} title={image.title}
            />
            <div className={category==="products"?"product-title-div":'image-title-div'}>
              <h3 
                className={category==="products"?"product-title":'image-title'}
                style={image.title === "Accento" && image.order_number === 1?{fontSize:'0px'}:null}>
                {image.title === "Accento"? <a href='https://www.myaccento.com' target="_blank">{image.title}</a> : image.title}
            </h3>   
            </div>
        </div>
    ))
    
    const renderNextButton = ({ isDisabled }) => {
        return <div className='next-arrow'><img src={NextArrow} alt="next-arrow" width={50} height={50} title='next'
        loading='lazy'/></div>
      };
    
    const renderPrevButton = ({ isDisabled }) => {
    return <div className='prev-arrow'><img src={PrevArrow} alt="prev-arrow" width={50} height={50} title='prev'
    loading='lazy'/></div>
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
