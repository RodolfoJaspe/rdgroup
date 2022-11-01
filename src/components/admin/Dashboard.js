import React, { useEffect, useState } from 'react';
import {getDesigns, addDesign, deleteDesign, changeOrderDesign
} from "../../actions/designActions";
import {getConstructions, addConstruction, deleteConstruction, changeOrderConstruction} from "../../actions/constructionActions";
import {getProducts, addProduct, deleteProduct, changeOrderProducts} from "../../actions/productsActions";
import {getFirstSliders, addFirstSlider, deleteFirstSlider, changeOrderFirstSlider} from "../../actions/firstSliderActions";
import { connect } from 'react-redux';
import AdminImages from './AdminImages';
import "../../styles/admin/Dashboard.css";

function Dashboard({
    user_id,
    designs,
    constructions,
    products,
    firstSlider,
    getConstructions,
    getDesigns,
    getProducts,
    getFirstSliders,
    addConstruction,
    addDesign,
    addFirstSlider,
    addProduct,
    deleteDesign,
    deleteConstruction,
    deleteProduct,
    deleteFirstSlider,
    changeOrderFirstSlider,
    changeOrderDesign,
    changeOrderConstruction,
    changeOrderProducts
}) {

    const [designPics, setDesignPics] = useState()
    const [constructionPics, setConstructionPics] = useState()

    useEffect(() => {
        console.log("dashboard")
        getDesigns(user_id, setDesignPics)
        getConstructions(user_id, setConstructionPics)
        getProducts(user_id)
        getFirstSliders(user_id)
    },[])
  return (
    <div className='dashboard'>
        <div className='category1'>
            <h2>First Slider</h2>
            <AdminImages images={firstSlider} addImage={addFirstSlider} user_id={user_id} deleteImage={deleteFirstSlider} 
            changeOrder={changeOrderFirstSlider}/>  
        </div>
        <div className='category2'>
            <h2>Design</h2>
            <AdminImages images={designPics} addImage={addDesign} user_id={user_id} deleteImage={deleteDesign}
            changeOrder={changeOrderDesign}
            />  
        </div>
        <div className='category3' >
            <h2>Construction</h2>
            <AdminImages images={constructionPics} addImage={addConstruction} user_id={user_id} deleteImage={deleteConstruction}
            changeOrder={changeOrderConstruction}
            />  
        </div>
        <div className='category4'>
            <h2>Products</h2>
            <AdminImages images={products} addImage={addProduct} user_id={user_id} deleteImage={deleteProduct}
            changeOrder={changeOrderProducts}
            />  
        </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        user_id: state.userReducer.user_id,
        designs: state.designReducer.images,
        constructions: state.constructionReducer.images,
        products: state.productsReducer.images,
        firstSlider: state.firstSliderReducer.images
    }
}

export default connect(mapStateToProps, {
    getConstructions,
    getDesigns,
    getProducts,
    getFirstSliders,
    addConstruction,
    addDesign,
    addFirstSlider,
    addProduct,
    deleteDesign,
    deleteConstruction,
    deleteProduct,
    deleteFirstSlider,
    changeOrderFirstSlider,
    changeOrderDesign,
    changeOrderConstruction,
    changeOrderProducts
}) (Dashboard)
