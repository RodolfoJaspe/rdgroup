import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getConstructions } from '../../actions/constructionActions'
import { getDesigns } from '../../actions/designActions'
import { getLogo } from "../../actions/mainActions"
import "../../styles/main/Gallery.css"
import GalleryNavBar from './GalleryNavBar'
import GallerySlider from './GallerySlider'


function Gallery({designs, constructions, getConstructions, getDesigns, getLogo, logo}) {

    const {category, title} = useParams()

    const [images, setImages] = useState()
    const [sliderImage, setSliderImage] = useState()

    const navigate = useNavigate()


    useEffect(() => {
        console.log("gallery")
        getLogo()
        if(category === "projects&designs"){
            getDesigns(1,setImages)
        } else if (category === "constructions&developments"){
            getConstructions(1,setImages)
        }          

    },[getConstructions, getDesigns, getLogo])

  const openImage = (image) => {
        setSliderImage(image)
  }

  return (
    <div className='gallery'>
        <GalleryNavBar 
            setImages={setImages}
            category={category}/>
        <div 
            className='logo-slogan'
            >
            <img 
                src={logo.url}       
                className='logo' 
                alt="logo image" 
                width={500} height={500} 
                title='Home'
                onClick={()=>navigate('/')}/>
            <div 
                className='slogan'
                title='Home'
                onClick={()=>navigate('/')}>
                <h1><b>r i g h t </b><b> d e s i g n</b></h1>
            </div>  
        </div>
        <div className='image-list'>
            {images?images.map(image => (
                <div 
                    onClick={() => openImage(image)}
                    className='image-div'
                    key={image.id}
                    >
                    <img 
                        src={image.url} 
                        alt={image.title} 
                        width="200" 
                        height="200" 
                        />
                </div>
            )): null}
        </div>
        {sliderImage? <GallerySlider image={sliderImage} close={setSliderImage} /> : null}
    </div>
  )
}

const mapStateToProps = state => {
    return {
        designs : state.designReducer.images,
        constructions : state.constructionReducer.images,
        logo: state.mainReducer.logo
    }
}

export default connect(mapStateToProps, {getConstructions, getDesigns, getLogo})(Gallery)
