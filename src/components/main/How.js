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
                    {/* <h2>1</h2> */}
                    <img src={form} alt='form-logo' width={100} height={100}/>
                    <p>Fill out the form</p>
                </Link>
                <Link className='step'
                    to='contact'
                    smooth={true}
                    offset={0}
                    duration={800}>
                    {/* <h2>2</h2> */}
   
                    <img src={review} alt='form-logo' width={100} height={100}/>
                    <p>We review your inquiry</p>
                </Link>
                <Link 
                    className='step'
                    to='contact'
                    smooth={true}
                    offset={0}
                    duration={800}>
                    {/* <h2>3</h2> */}
                
                    <img src={quote} alt='form-logo' width={100} height={100}/>
                    <p>Get the quote</p>
                </Link>
                <Link 
                    className='step'
                    to='contact'
                    smooth={true}
                    offset={0}
                    duration={800}>
                    {/* <h2>4</h2> */}
              
                    <img src={work} alt='form-logo' width={100} height={100}/>
                    <p>Project execution</p>
                </Link>
            </div>
        </div>
    </div>
  )
}
