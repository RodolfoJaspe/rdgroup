import React from 'react';
// import { pageImages } from '../Assets/images';
import '../styles/About.css';
import Slider from './Slider';

function About() {
    // const filteredImages = pageImages.filter(image => image.id !== 1)
    // console.log(filteredImages)
  return (
    <div className='about'>
        {/* <Slider images={filteredImages}/> */}
        <div className='about-inner-div'>
            <div className='company-story'>
                <h1> MISSION</h1>
                <h3>Right Design accompanies you to make your project a reality, we put our direction and design your vision</h3>
                <h2>WHY</h2>
                <p>
                    We believe in creating a design that stands the test of time.
                    We believe in challenging the conventional and traditional design products and services.
                    Our main focus is to utilize your vision and ideas to generate and create the best design that lasts through time.
                </p>
                <h2>HOW</h2>
                <p>    
                    Matching our clients' beliefs with the design and project.<br/>
                    Constantly evolving and responding to industry products and design.<br/>
                    Using products specifically for the project. <br/>Ensuring our clients' desires   
                </p>
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
        {/* <div className='about-bottom'>
                <h1>Products and Services</h1>
                <div className='products-and-services'>
                    <div className='products-and-services-child'>
                        <h4>RD Projects & Design:</h4>
                        <p>Commercial & Residential Design</p>
                    </div>
                    <div className='products-and-services-child'>
                        <h4>RD Construction & development:</h4>
                        <p>Turnkey commercial or residential project development </p>
                    </div>
                    <div className='products-and-services-child'>
                        <h4>RD Products:</h4>
                        <p>On of a kind designer product specially curated to enhance any design </p>
                    </div>
                </div>
                <h2>THE COMPETITIVE ADVANTAGE</h2>
                <p>The combination of and experience architect and designer with vast resources and access to hand selected construction materials.</p>
                
            </div> */}
    </div>
  )
}

export default About