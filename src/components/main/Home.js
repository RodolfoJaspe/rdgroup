import React from 'react'
import '../../styles/main/Home.css';
import {pageImages} from "../../Assets/images.js";

function Home() {

    const logo = pageImages.find(image => image.id === 1)

  return (
        <div className='home'>
            <div className='logo-slogan'>
                <img src={logo.url} className='logo' alt="logo image"/>
                <div className='slogan'>
                    <p>r i g h t </p><p>d e s i g n</p>
                </div>  
            </div>
        </div>
  )
}

export default Home