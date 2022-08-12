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
                <h2> MISSION</h2>
                <h3>Right Design accompanies you to make your project a reality, we put our direction and design your vision</h3>
                <h2>OUR WHY?</h2>
                <p>
                    We believe in creating a design that stands the test of time.
                    We believe in challenging the conventional and traditional design products and services.
                    Our main focus is to utilize your vision and ideas to generate and create the best design that lasts through time.
                </p>
                <h3>How do we do this?</h3>
                <p>    
                    By matching our clients' beliefs with the design and project.<br/>
                    By constantly evolving and responding to industry products and design.<br/>
                    By using products specifically for the project. <br/>By ensuring our clients' des   
                </p>
                <h3>Our products and services include:</h3>
                <div>
                    <h4>RD Projects & Design:</h4>
                    <p className='indented-p'>Commercial & Residential Design</p>
                    <h4>RD Construction & development:</h4>
                    <p className='indented-p'>Turnkey commercial or residential project development </p>
                    <h4>RD Products:</h4>
                    <p className='indented-p'>On of a kind designer product specially curated to enhance any design </p>
                </div>
                <h2>THE COMPETITIVE ADVANTAGE</h2>
                <p>The combination of and experience architect and designer with vast resources and access to hand selected construction materials.</p>
                
            </div>
            <div className='juan-story'>
                <div className='image-div'>
                   <img src='https://media-exp1.licdn.com/dms/image/C4D03AQGRi7gOFkzzPg/profile-displayphoto-shrink_400_400/0/1516972987542?e=1665619200&v=beta&t=nJsGmoi_eA3hFYvqLIBrFbno3Za3CCzo7AVceD1wD6I' alt='juan manuel' /> 
                </div>
                <p>
                "We are taking your ideas and creating the best design that will last you through time" <br/> Juan Morales CEO.
                </p>
                <p>
                    A passion to educate our clients, create their own vision and leave a design that last through time.
                </p>
                <p>    
                    After the clients know us, they become a part of that group of top people with our designs, products and visions.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About