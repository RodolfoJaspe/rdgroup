import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getConstructions } from '../../actions/constructionActions'
import { getDesigns } from '../../actions/designActions'
import { constructionReducer } from '../../reducers/constructionReducer'
import { designReducer } from '../../reducers/designReducer'

function Gallery({designs, constructions, getConstructions, getDesigns}) {

    const {category, title} = useParams()

    const [images, setImages] = useState()
    const [largeImage, setLargeImage] = useState(images?images[0]:{})

    console.log(largeImage)

    useEffect(() => {
        getConstructions(1)
        getDesigns(1)

        setImages(() => {
            if(category === "desings"){
                return designs.filter(image => image.title === title)
            } else {
                return constructions.filter(image => image.title === title)
            }          
        })

    },[getDesigns, getConstructions])

    console.log(images)
    console.log(largeImage)

  return (
    <div className='gallery'>
        {/* {largeImage?<div className='large-image'>
            <img 
                src={largeImage.url} 
                alt={largeImage.title}
                width="500"
                height="500"/>
        </div>: null} */}
        <div className='image-list'>
            {images?images.map(image => (
                <div 
                    // onClick={()=>setLargeImage(image)}
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
    </div>
  )
}

const mapStateToProps = state => {
    return {
        designs : state.designReducer.images,
        constructions : state.constructionReducer.images
    }
}

export default connect(mapStateToProps, {getConstructions, getDesigns})(Gallery)
