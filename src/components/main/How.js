import React from 'react';
import "../../styles/main/How.css";
import form from "../../Assets/icons/form.png";
import review from "../../Assets/icons/review.png";
import quote from "../../Assets/icons/quote.svg";
import work from "../../Assets/icons/work.png";
import { Link } from 'react-scroll';

export default function How() {
  return (
    <div className='how'>
        <div className='h2-div'>
           <h2 className='h2'>HOW IT WORKS</h2> 
        </div>
        <div className='steps-outer'>
            <div className='steps'>
                <Link 
                    className='step'
                    to='contact'
                    smooth={true}
                    offset={0}
                    duration={800}>
                    <img src={form} alt='form-logo' width={100} height={100} title='form' loading='lazy'/>
                    <p>Fill out the form</p>
                </Link>
                <Link className='step'
                    to='contact'
                    smooth={true}
                    offset={0}
                    duration={800}>
   
                    <img src={review} alt='form-logo' width={100} height={100} title='review' loading='lazy'/>
                    <p>We review your inquiry</p>
                </Link>
                <Link 
                    className='step'
                    to='contact'
                    smooth={true}
                    offset={0}
                    duration={800}>
                    <img src={quote} alt='form-logo' width={100} height={100} title='quote' loading='lazy'/>
                    <p>Get the quote</p>
                </Link>
                <Link 
                    className='step'
                    to='contact'
                    smooth={true}
                    offset={0}
                    duration={800}>
              
                    <img src={work} alt='form-logo' width={100} height={100} title='work' loading='lazy'/>
                    <p>Project execution</p>
                </Link>
            </div>
        </div>
    </div>
  )
}
