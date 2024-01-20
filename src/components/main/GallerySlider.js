import React from 'react'
import closeButton from "../../Assets/icons/blackClose.png"
import "../../styles/main/GallerySlider.css"

export default function GallerySlider({image, close}) {

  return (
    <div className='gallery-slider-outer'>
        <div className='gallery-slider'>
            <div className='button-div'>
                <img className="close-button"src={closeButton} alt="close" onClick={()=>close("")} />
            </div>
            <div className='image-title-div'>
                <div className='image-div'>
                    <img className="slider-image" src={image.url} alt={image.title}/>
                </div>
                <div className='title-div'>
                    <h3>{image.title}</h3>
                </div>
            </div>
        </div> 
    </div>

  )
}

