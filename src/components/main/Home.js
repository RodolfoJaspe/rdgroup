import React from 'react'
import '../../styles/main/Home.css';
import {pageImages} from "../../Assets/images.js";

function Home() {

    const logo = pageImages.find(image => image.id === 1)

  return (
        <div className='home'>
            <div className='logo-slogan'>
                <img src={logo.url}       className='logo' alt="logo image" width={500} height={500} title={logo.title} loading='lazy'/>
                <div className='slogan'>
                    <h1><b>r i g h t </b><b> d e s i g n</b></h1>
                </div>  
            </div>
        </div>
  )
}

export default Home