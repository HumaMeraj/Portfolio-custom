import React from 'react';
import { IoMail } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import '../app/styles/contact.css';

function Contact() {
  return (
    <div id='contact' className='contact-container'>
        <div className='contact-grid md:grid-cols-2 '>
            <div className='-contact-space'>
                <h2 className='contact-heading'data-aos="zoom-in-up">Get in Touch</h2>
                <p className='contact-text 'data-aos="zoom-in-up">

                   Feel free to Drop me a line,Give me a Call or send me a message.
                </p>
                <div className='contact-flex'data-aos="zoom-in-up">
                    <IoMail size={20} /> abc@gmail.com
                </div>
                <div className='contact-flex' data-aos="zoom-in-up">
                    <FaPhoneVolume size={20} /> (092) 222-333-111
                </div>
            </div>
            <div className='contact-space'>
                <div className='form'data-aos="zoom-in-up">
                    <label htmlFor='name'>Name</label>
                    <input type="text" className='input-field' id='name'/>
                    
                   
                </div>
                <div className='form'data-aos="zoom-in-up">
                    <label htmlFor='email'>Email</label>
                    <input type="text"  className='input-field' id='email'/>
                   
                   
                </div>
                <div className='form'data-aos="zoom-in-up">
                    <label htmlFor='message'>Message</label>
                    <textarea defaultValue={"Hello"} placeholder='Write message here' rows={4}cols={40} className='textarea-field'></textarea>
                
               </div>
                <button className='button' data-aos="zoom-in-up">Send</button>
            </div>
        </div>
    </div>
  );
};

export default Contact;