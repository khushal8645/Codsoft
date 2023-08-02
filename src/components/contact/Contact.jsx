import React from 'react';
import "./contact.css";
import {AiOutlineMail} from "react-icons/ai";
import {BsInstagram} from "react-icons/bs";
import {BsWhatsapp} from "react-icons/bs";

const Contact = () => {

  return (

    <section id='contact'>

    <div className="heading-container">
    <div className='col-lg-12 heading'>
      <div className="title">
        <span>Contact Us</span>
        <h2>Let's Talk About Fitness</h2>
      </div>
    </div>
    </div>

    <div className='conatiner contact_container'>
        <div className='contact_options'>
        <article className='contact_option'>
        <AiOutlineMail className='contact_icon'/>
          <h4>Email</h4>
          <h5>progym12@gmail.com</h5>
          <a href="mailto:ProGYM12@gmail.com" target={'_blank'}>Send a Message</a>
        </article>
        <article className='contact_option'>
        <BsInstagram className='contact_icon'/>
          <h4>Instagram</h4>
          <h5>proGYM_8645</h5>
          <a href='https://instagram.com/khushal_8645?igshid=ZDc4ODBmNjlmNQ==' target={'_blank'}>Send a Message</a>
        </article>
        <article className='contact_option'>
        <BsWhatsapp className='contact_icon'/>
          <h4>Whatsapp</h4>
          <h5>+91 8565423643</h5>
          <a href='https://wa.me/+919328537327' target={'_blank'}>Send a Message</a>
        </article>
        </div>
        <form >
          <input name='name' placeholder='your full name' type='text' required />
          <input type='email' placeholder='your email address' required />
          <textarea name='message' placeholder='your message' rows="7" required />
          <button type='submit' className='btn'>Send message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact
