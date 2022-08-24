import React, { useEffect } from 'react';
import {getDesigns, addDesign, deleteDesign} from "../../actions/admin/designActions";
import {getConstructions, addConstruction, deleteConstruction} from "../../actions/admin/constructionActions";
import {getProducts, addProduct, deleteProduct} from "../../actions/admin/productsActions";
import {getFirstSliders, addFirstSlider, deleteFirstSlider} from "../../actions/admin/firstSliderActions";
import { connect } from 'react-redux';
import AdminImages from './AdminImages';

function Dashboard({
    user_id,
    designs,
    constructions,
    products,
    firstSliders,
    getDesigns,
    getConstructions,
    getProducts,
    getFirstSliders,
}) {

    useEffect(() => {
        getDesigns(user_id)
        getConstructions(user_id)
        getProducts(user_id)
        getFirstSliders(user_id)
    },[])
  return (
    <div>
        <div>
            <h2>First Slider</h2>
            <AdminImages images={firstSliders} addImage={addFirstSlider} user_id={user_id} deleteImage={deleteFirstSlider} />  
        </div>
        <div>
            <h2>Design</h2>
            <AdminImages images={designs} addImage={addDesign} user_id={user_id} deleteImage={deleteDesign}/>  
        </div>
        <div>
            <h2>Construction</h2>
            <AdminImages images={constructions} addImage={addConstruction} user_id={user_id} deleteImage={deleteConstruction}/>  
        </div>
        <div>
            <h2>Products</h2>
            <AdminImages images={products} addImage={addProduct} user_id={user_id} deleteImage={deleteProduct}/>  
        </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        user_id: state.userReducer.user_id,
        design: state.designReducer.images,
        construction: state.constructionReducer.images,
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
