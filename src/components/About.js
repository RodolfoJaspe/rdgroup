import React from 'react';
import { pageImages } from '../Assets/images';
import '../styles/About.css';
import Slider from './Slider';

function About() {
    const filteredImages = pageImages.filter(image => image.id !== 1)
    console.log(filteredImages)
  return (
    <div className='about'>
        <Slider images={filteredImages}/>
        <div className='about-inner-div'>
            <div className='company-story'>
                <h1>Lorem Ipsum</h1>
                <h2>What is Lorem Ipsum?</h2>
                <p>
                    
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.   
                </p>
                <h2>What is Lorem Ipsum?</h2>
                <p>
                    
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.   
                </p>
            </div>
            <div className='juan-story'>
                <div className='image-div'>
                   <img src='https://media-exp1.licdn.com/dms/image/C4D03AQGRi7gOFkzzPg/profile-displayphoto-shrink_400_400/0/1516972987542?e=1665619200&v=beta&t=nJsGmoi_eA3hFYvqLIBrFbno3Za3CCzo7AVceD1wD6I' alt='juan manuel' /> 
                </div>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About