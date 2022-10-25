import React from 'react'
import "../../styles/main/GallerySlider.css"
import closeButton from "../../Assets/icons/blackClose.png"

export default function GallerySlider({image, close}) {

    console.log(image)
  return (
    <div className='gallery-slider-outer'>
        <div className='gallery-slider'>
            <img className="slider-image" src={image.url} alt={image.title}/>
            <h3 className='image-title'>{image.title}</h3>
            <img className="close-button"src={closeButton} alt="close" onClick={()=>close("")} />
        </div> 
    </div>

  )
}
