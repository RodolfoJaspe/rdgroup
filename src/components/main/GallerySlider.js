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
                    <img    
                        className="slider-image" 
                        src={image.url.includes("https://drive.google.com/uc?export=view&id=")?`https://lh3.google.com/u/0/d/${image.url.slice(43,image.url.length)}`:image.url} 
                        alt={image.title}/>
                </div>
                <div className='title-div'>
                    <h3>{image.title}</h3>
                </div>
            </div>
        </div> 
    </div>

  )
}

