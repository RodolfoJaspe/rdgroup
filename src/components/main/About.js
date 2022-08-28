import React from 'react';
import '../../styles/main/About.css';
import Slider from './Slider';

function About() {
  return (
    <div className='about'>
        <div className='about-inner-div'>
            <div className='company-story'>
                <h2> MISSION</h2>
                <p>RD Group accompanies you to make your project a reality, we put our direction and design your vision.. Like our slogan says.. </p>
                <h3>..RD the Right Design ...Your design !!!</h3>
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
                <div className='bio-div'>
                    <p>    
                    Received an architectural degree from "Universidad Central de Venezuela in 1992 and continued education at Miami International Univerity of Art and Design with a Post graduate degree in Interior design in 1995.
                    </p><br/>
                    <p>
                    ..." I'm taking your ideas and creating the best design that will last you through time#... <br/><br/><b className='signature'>Juan Manuel Morales CEO</b> 
                    </p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About