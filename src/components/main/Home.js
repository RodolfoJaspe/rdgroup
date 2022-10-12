import React, { useEffect } from 'react'
import '../../styles/main/Home.css';
import { getLogo } from "../../actions/mainActions";
import { connect } from 'react-redux';


function Home({getLogo, logo}) {

    useEffect(()=> {
       getLogo()
    },[getLogo])

    return (
        <div className='home'>
            <div className='logo-slogan'>
                <img 
                    src={logo.url}       
                    className='logo' 
                    alt="logo image" 
                    width={500} height={500} 
                    title={logo.title}/>
                <div className='slogan'>
                    <h1><b>r i g h t </b><b> d e s i g n</b></h1>
                </div>  
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        logo: state.mainReducer.logo
    }
}

export default connect(mapStateToProps, {getLogo}) (Home)