import React, { useEffect } from 'react';
import '../../styles/main/About.css';
import { getHeadshot } from "../../actions/mainActions.js";
import { connect } from 'react-redux';

function About({ getHeadshot, headshot }) {

    useEffect(()=> {
        getHeadshot()
     },[getHeadshot])

  return (
    <div className='about'>
        <div className='about-inner-div'>
            <div className='company-story'>
                <h2> MISSION</h2>
                <p>RD Group accompanies you to make your project a reality, we put our direction and design your vision.. Like our slogan says.. </p>
                <h3>..RD, the Right Design ..Your design</h3>
                <h2>WHY</h2>
                <p>
                    We believe in creating a design that stands the test of time.
                    We believe in challenging the conventional and traditional design products and services.
                    Our main focus is to utilize your vision and ideas to generate and create the best design that lasts through time.
                </p>
                <h2>HOW</h2>
                <ul>
                    <li>Matching our clients' beliefs with the design and project.</li>
                    <li>Constantly evolving and responding to industry products and design.</li>
                    <li>Using products specifically for the project.</li>
                    <li>Ensuring our clients' desires.</li>
                </ul>
            </div>
            <div className='juan-story'>
                <div className='image-div'>
                   <img src={headshot.url} alt={headshot.title} width={200} height={350} title={headshot.title}/> 
                </div>
                <div className='bio-div'>
                    <p>    
                    Received an architectural degree from "Universidad Central de Venezuela in 1992 and continued education at Miami International University of Art and Design with a Post graduate degree in Interior design in 1995.
                    </p>
                    <p>
                    ..." I'm taking your ideas and creating the best design that will last you through time... "" <br/><br/><b className='signature'>Juan Manuel Morales CEO</b> 
                    </p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        headshot: state.mainReducer.headshot
    }
}

export default connect(mapStateToProps, {getHeadshot})(About)
