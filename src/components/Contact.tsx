import React from 'react'
import { IoMail } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";

function Contact() {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl'data-aos="zoom-in-up">Get in Touch</h2>
                <p className='text-neutral-300 text-[18px] pt-2'data-aos="zoom-in-up">
                   Feel free to Drop me a line,Give me a Call or send me a message.
                </p>
                <div className='flex gap-3 items-center'data-aos="zoom-in-up">
                    <IoMail size={20} /> abc@gmail.com
                </div>
                <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                    <FaPhoneVolume size={20} /> (092) 222-333-111
                </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                    <label htmlFor='name'>Name</label>
                    <input type="text" 
                    className='h-[30px] bg-transparent border border-accent'
                    id='name'/>
                </div>
                <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                    <label htmlFor='email'>Email</label>
                    <input type="text" 
                    className='h-[30px] bg-transparent border border-accent'
                    id='email'/>
                </div>
                <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                    <label htmlFor='msg'>Message</label>
                    <textarea 
                    className=' bg-transparent border border-accent'
                    id='msg' rows={5}>
                    </textarea>
                </div>
                <button className='bg-accent p-2 px-5' data-aos="zoom-in-up">Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact