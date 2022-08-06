import React from 'react'
import '../styles/Home.css';
import {pageImages} from "../Assets/images.js";

function Home() {

    const logo = pageImages.find(image => image.id === 1)

  return (
        <div className='home'>
            <img src={logo.url} className='logo' alt="logo image"/>
        </div>
  )
}

export default Home