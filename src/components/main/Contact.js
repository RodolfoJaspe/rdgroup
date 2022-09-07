import React, { useState, useRef } from 'react'
import '../../styles/main/Contact.css';
import {pageImages} from "../../Assets/images.js";
import emailjs from '@emailjs/browser';
import fb from "../../Assets/icons/fb.png";
import insta from "../../Assets/icons/insta.png";

function Contact() {
    
    const headshot = pageImages.find(image => image.id === 3)

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_i7uovoy', 'template_b7buchz', form.current, 'Up5-4xQj9a2Qjhm8N')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    
  return (
    <div className='contact'>
        <div className='banner-contact-div'>
            <div className='contact-info'>
                <h2>RD Group</h2>
                <p>4400 Memorial drive, <br/>Suite 2066<br/>Houston, TX 77007<br/><br/>juanmanuel@rdgroup-usa.com</p>
                <p>713.815.1803</p>
            </div>
            <form ref={form} onSubmit={sendEmail} className='form'>
                <input placeholder='Name' className='input' type="text" name="name" />
                <input placeholder='Email' className='input' type="email" name="email" />
                <div className='subject'>
                    <label htmlFor="subject">Subject :</label>
                        <select name="subject" id="subject" required>
                            <option value="defaultValue" disabled hidden>Select</option>
                            <option value="design">Design</option>
                            <option value="construction">Construction</option>
                            <option value="products">Products</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                <textarea placeholder='Message' className='input message' name="message" />
                <div className='submit-button-div'>
                    <input type="submit" value="Send" />  
                </div>
            </form>
        </div>
        <div className='footer-outer'>
            <div className='footer'>
                <div className='fl-tx'>
                    <h2>
                        TEXAS
                    </h2>
                    <h2>/</h2>
                    <h2>FLORIDA</h2>
                </div>
                <div className='socials-logo'>
                    <img 
                        src={fb} 
                        alt="facebook"
                        onClick={() => openInNewTab('https://www.facebook.com/RD-consultiong-group-1422172441139858/')}/>
                </div>
                <div className='socials-logo'>
                    <img 
                        src={insta} 
                        alt="insta" 
                        onClick={() => openInNewTab('https://www.instagram.com/rd.group.llc/')}/>                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact