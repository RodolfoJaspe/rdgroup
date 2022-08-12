import React, { useState, useRef } from 'react'
import '../styles/Contact.css';
import {pageImages} from "../Assets/images.js";
import emailjs from '@emailjs/browser';
import fb from "../Assets/icons/fb.png";
import insta from "../Assets/icons/insta.png";

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
                <h3>713-815-1803</h3>
            </div>
            <form ref={form} onSubmit={sendEmail} className='form'>
                <input placeholder='Name' className='input' type="text" name="name" />
                <input placeholder='Email' className='input' type="email" name="email" />
                <input placeholder='Subject' className='input' type="subject" name="subject" />
                <textarea placeholder='Message' className='input message' name="message" />
                <div className='submit-button-div'>
                    <input type="submit" value="Send" />  
                </div>
            </form>
        </div>
        <div className='footer'>
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
  )
}

export default Contact