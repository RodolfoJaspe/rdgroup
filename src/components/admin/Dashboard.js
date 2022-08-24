import React, { useEffect } from 'react';
import {getDesigns, addDesign, deleteDesign} from "../../actions/admin/designActions";
import {getConstructions, addConstruction, deleteConstruction} from "../../actions/admin/constructionActions";
import {getProducts, addProduct, deleteProduct} from "../../actions/admin/productsActions";
import {getFirstSliders, addFirstSlider, deleteFirstSlider} from "../../actions/admin/firstSliderActions";
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
    deleteFirstSlider
}) {

    useEffect(() => {
        getDesigns(user_id)
        getConstructions(user_id)
        getProducts(user_id)
        getFirstSliders(user_id)
    },[])
  return (
    <div className='dashboard'>
        <div className='category'>
            <h2>First Slider</h2>
            <AdminImages images={firstSlider} addImage={addFirstSlider} user_id={user_id} deleteImage={deleteFirstSlider} />  
        </div>
        <div className='category'>
            <h2>Design</h2>
            <AdminImages images={designs} addImage={addDesign} user_id={user_id} deleteImage={deleteDesign}/>  
        </div>
        <div className='category'>
            <h2>Construction</h2>
            <AdminImages images={constructions} addImage={addConstruction} user_id={user_id} deleteImage={deleteConstruction}/>  
        </div>
        <div className='category'>
            <h2>Products</h2>
            <AdminImages images={products} addImage={addProduct} user_id={user_id} deleteImage={deleteProduct}/>  
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
    deleteFirstSlider
}) (Dashboard)
