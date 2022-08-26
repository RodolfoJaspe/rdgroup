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
        <div className='h1-div'>
           <h1 className='h1'>HOW IT WORKS</h1> 
        </div>
        <div className='steps-outer'>
            <div className='steps'>
                <Link 
                    className='step'
                    to='contact'
                    smooth={true}
                    offset={0}
                    duration={800}>
                    <h2>1</h2>
                    <p>Fill out the form</p>
                    <img src={form} alt='form-logo'/>
                </Link>
                <Link className='step'
                    to='contact'
                    smooth={true}
                    offset={0}
                    duration={800}>
                    <h2>2</h2>
                    <p>We review your inquiry</p>
                    <img src={review} alt='form-logo'/>
                </Link>
                <Link 
                    className='step'
                    to='contact'
                    smooth={true}
                    offset={0}
                    duration={800}>
                    <h2>3</h2>
                    <p>Get the quote</p>
                    <img src={quote} alt='form-logo'/>
                </Link>
                <Link 
                    className='step'
                    to='contact'
                    smooth={true}
                    offset={0}
                    duration={800}>
                    <h2>4</h2>
                    <p>Project execution</p>
                    <img src={work} alt='form-logo'/>
                </Link>
            </div>
        </div>
    </div>
  )
}
