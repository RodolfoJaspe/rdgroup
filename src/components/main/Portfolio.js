import React,{useEffect, useState} from 'react';
import { portfolio } from '../../Assets/images';
import Slider from './Slider';
import "../../styles/main/Portfolio.css";
import { pageImages } from '../../Assets/images';
import { Link } from 'react-scroll';
import ScrollTo from '../helpers/ScrollTo';
import { getFirstSliders } from '../../actions/firstSliderActions';
import { getDesigns } from '../../actions/designActions';
import { getConstructions } from '../../actions/constructionActions';
import { getProducts } from '../../actions/productsActions';
import { connect } from 'react-redux';

function Portfolio({getFirstSliders,getDesigns,getConstructions,getProducts,firstSlider,designs,constructions,products}) {
    useEffect(()=>{
        getFirstSliders(1)
        getDesigns(1)
        getConstructions(1)
        getProducts(1)
    },[getFirstSliders, getDesigns, getConstructions, getProducts])

  return (
    <div className='portfolio'>
        <div className='first-slider'>
            <Slider images={firstSlider} category={'first-slider'}/>
        </div> 
        <div className='products-and-services'>
            <div className='h2-div'>
                <h2 className='h2'>WHAT WE DO</h2>
            </div>
            <div className='services-outer'>
                <div className='services-inner'>
                    <div className='service'>
                        <Link 
                            to='portfolio'
                            smooth={true}
                            offset={ScrollTo("design")}
                            delay={300}
                            duration={1000}
                            className='title design'
                            >
                                <div className='square-outer'>
                                    <div className='red-square'></div>
                                </div>
                                <h2>RD Projects & Design:</h2>
                        </Link>
                        <div className='p-div'>
                            <p>Commercial & residential Design</p>
                            <p>
                            Architectural and engineer drawing services, Rendering, 3D Modeling, and plans and permits execution 
                            </p>
                            
                        </div>
                    </div>
                    <div className='service'>
                        <Link 
                            to='portfolio'
                            smooth={true}
                            offset={ScrollTo("construction")}
                            delay={300}
                            duration={1200}
                            className='title construction'
                            >
                                <div className='square-outer'>
                                    <div className='yellow-square'></div>
                                </div>
                                <h2>RD Construction & development:</h2>
                        </Link>
                        <div className='p-div'>
                            <p>
                                Turnkey commercial or residential project development 
                            </p>
                        </div>
                    </div>
                    <div className='service'>
                        <Link 
                            to='portfolio'
                            smooth={true}
                            offset={ScrollTo("products")}
                            delay={300}
                            duration={2000}
                            className='title products'
                            >
                                <div className='square-outer'>   
                                    <div className='blue-square'></div>
                                </div>
                                <h2>RD Products:</h2>
                        </Link>
                        <div className='p-div'>
                        <p>
                        State of the art designer-products specially curated to enhance any space
                            </p> 
                        </div>
                        
                    </div>                     
                </div>

            </div>
        </div>
        <div className='portfolio-main'>
            <div className='portfolio-slider-outer' style={{background:`#ff0000de`}}>
                <div className='portfolio-slider-inner'>
                    <div className='portfolio-title'>
                        <img src='https://drive.google.com/uc?export=view&id=10zaF3juTzTEjietUm_chQO0VHPQi46nt' alt="logo"
                        width={50} height={50} title='logo'
                        />
                        <h2>Projects & Designs</h2>
                    </div>
                    <Slider images={designs} category={'designs'}/>  
                </div>
            </div>
            <div className='portfolio-slider-outer' style={{background:`#ffff1ebd`}}>
                <div className='portfolio-slider-inner'>
                    <div className='portfolio-title'>
                        <img src='https://drive.google.com/uc?export=view&id=10zaF3juTzTEjietUm_chQO0VHPQi46nt' alt="logo"
                        width={50} height={50} title='logo'
                        />
                        <h2>Constructions & Developments</h2>
                    </div>
                    <Slider images={constructions} category={'constructions'}/>  
                </div>
            </div>
            <div className='portfolio-slider-outer' style={{background:`#00009cc7`}}>
                <div className='portfolio-slider-inner'>
                    <div className='portfolio-title'>
                        <img src='https://drive.google.com/uc?export=view&id=10zaF3juTzTEjietUm_chQO0VHPQi46nt' alt="logo"
                        width={50} height={50} title='logo'
                        />
                        <h2>Products</h2>
                    </div>
                    <Slider images={products} category={'products'}/>  
                </div>
            </div>
        </div>


    </div>
  )
}

const mapStateToProps = state => {
    return {
        firstSlider : state.firstSliderReducer.images,
        designs : state.designReducer.images,
        constructions : state.constructionReducer.images,
        products: state.productsReducer.images
    }
}

export default connect(mapStateToProps, {getFirstSliders,getDesigns,getConstructions,getProducts})(Portfolio)