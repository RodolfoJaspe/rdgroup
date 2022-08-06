import React, { useState, useRef } from 'react'
import '../styles/Contact.css';
import {pageImages} from "../Assets/images.js";
import emailjs from '@emailjs/browser';

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
            <div className='contact-content'>
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
        </div>
    </div>
  )
}

export default Contact