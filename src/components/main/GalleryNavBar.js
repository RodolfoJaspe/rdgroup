import React,{useState} from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getConstructions } from '../../actions/constructionActions'
import { getDesigns } from '../../actions/designActions'
import "../../styles/main/GalleryNavBar.css";
import home from "../../Assets/icons/home.png"

function GalleryNavBar({getConstructions, getDesigns, setImages, category}) {

    const navigate = useNavigate()

    const changeCategory = (catFunction, category) => {
        catFunction(1, setImages)
        navigate(`/${category}`)
    }

    return (
        <div className='gallery-navbar'>
            <div className='home-btn-div' onClick={()=>navigate('/')} title='Home'>
               <img src={home} alt='home-button'/> 
            </div>
            <nav className='nav-menu'>
                <div className={category === "projects&designs"?'nav-item active': 'nav-item'}
                    onClick={() => changeCategory(getDesigns, "projects&designs")}>
                    Projects & Designs
                </div>
                <div className={category === "constructions&developments"?'nav-item active': 'nav-item'}
                    onClick={() => changeCategory(getConstructions, "constructions&developments")}>
                    Constructions & Developments
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        designs : state.designReducer.images,
        constructions : state.constructionReducer.images
    }
}

export default connect(mapStateToProps , {getDesigns,getConstructions})(GalleryNavBar)
