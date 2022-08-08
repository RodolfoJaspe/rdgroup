import React, { useState, useRef } from 'react'
import '../styles/Contact.css';
import {pageImages} from "../Assets/images.js";
import emailjs from '@emailjs/browser';
import fb from "../Assets/icons/fb.png";
import insta from "../Assets/icons/insta.png";

function Contact() {
    
    const headshot = pageImages.find(image => image.id === 3)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h6yxzhl', 'template_496smvb', form.current, 'cY7LThc4skVPB9RcW')
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
                <p>street address<br/>Zip City, State</p>
                <h3>888-888-8888</h3>
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
                <img src={fb} alt="facebook"/>
            </div>
            <div className='socials-logo'>
                <img src={insta} alt="insta" />                
            </div>
        </div>  
    </div>
  )
}

export default Contact