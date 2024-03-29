import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import { getSliderConstructions } from '../../actions/constructionActions';
import { getSliderDesigns } from '../../actions/designActions';
import { getSliderFirstSliders } from '../../actions/firstSliderActions';
import { getSliderProducts } from '../../actions/productsActions';
import "../../styles/main/Portfolio.css";
import ScrollTo from '../helpers/ScrollTo';
import Slider from './Slider';

function Portfolio({getSliderFirstSliders,getSliderDesigns,getSliderConstructions,getSliderProducts, getDesigns, getConstructions,firstSlider,designs,constructions,products}) {
    useEffect(()=>{
        getSliderFirstSliders(1)
        getSliderDesigns(1)
        getSliderConstructions(1)
        getSliderProducts(1)
    },[getSliderFirstSliders, getSliderDesigns, getSliderConstructions, getSliderProducts])

    const navigate = useNavigate()

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
                        <img 
                        src="https://lh3.googleusercontent.com/pw/ABLVV852BS6A-FackcNASgeXBklSCoDBAPLsWHNWVcWs0O8ipLEwsVqcz9uEYFGJSgd5A-e4enYOEYKUWBDzVTK5ILzEvnEcSMMSHh-ERBdOp6K3ovqJqX_QRCTAYdq6au85acw4oX4-RHwhCu_79CG9mEAx=w2364-h1532-s-no-gm?authuser=0" 
                        alt="logo"
                        width={50} height={50} title='logo'
                        />
                        <h2 onClick={()=>navigate('/projects&designs')}>Projects & Designs</h2>
                    </div>
                    <Slider images={designs} category={'projects&designs'}/>  
                </div>
            </div>
            <div className='portfolio-slider-outer' style={{background:`#ffff1ebd`}}>
                <div className='portfolio-slider-inner'>
                    <div className='portfolio-title'>
                    <img 
                        src="https://lh3.googleusercontent.com/pw/ABLVV852BS6A-FackcNASgeXBklSCoDBAPLsWHNWVcWs0O8ipLEwsVqcz9uEYFGJSgd5A-e4enYOEYKUWBDzVTK5ILzEvnEcSMMSHh-ERBdOp6K3ovqJqX_QRCTAYdq6au85acw4oX4-RHwhCu_79CG9mEAx=w2364-h1532-s-no-gm?authuser=0" 
                        alt="logo"
                        width={50} height={50} title='logo'
                        />
                        <h2 onClick={()=>navigate('/constructions&developments')}>Constructions & Developments</h2>
                    </div>
                    <Slider images={constructions} category={'constructions&developments'}/>  
                </div>
            </div>
            <div className='portfolio-slider-outer' style={{background:`#00009cc7`}}>
                <div className='portfolio-slider-inner'>
                    <div className='portfolio-title'>
                    <img 
                        src="https://lh3.googleusercontent.com/pw/ABLVV852BS6A-FackcNASgeXBklSCoDBAPLsWHNWVcWs0O8ipLEwsVqcz9uEYFGJSgd5A-e4enYOEYKUWBDzVTK5ILzEvnEcSMMSHh-ERBdOp6K3ovqJqX_QRCTAYdq6au85acw4oX4-RHwhCu_79CG9mEAx=w2364-h1532-s-no-gm?authuser=0" 
                        alt="logo"
                        width={50} height={50} title='logo'
                        />
                        <h2><a href='https://www.myaccento.com' target="_blank">Products</a></h2>
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
        firstSlider : state.firstSliderReducer.sliderImages,
        designs : state.designReducer.sliderImages,
        constructions : state.constructionReducer.sliderImages,
        products: state.productsReducer.sliderImages
    }
}

export default connect(mapStateToProps, {getSliderFirstSliders,getSliderDesigns,getSliderConstructions,getSliderProducts})(Portfolio)