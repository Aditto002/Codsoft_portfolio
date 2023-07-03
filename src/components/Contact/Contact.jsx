import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import Swal from 'sweetalert2';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_91tj1kh', 'template_re33tix', form.current, 'QX1mIcEf7V-FI-6H8')
      .then((result) => {
        if(result.text==="OK"){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Done',
            showConfirmButton: false,
            timer: 1500
          })
        }
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>adittokoiri002@gmail.com</h5>
            <a href="mailto:adittokoiri002@gmail.com" target='__blank'>Send a message</a>

          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+8801752403475</h5>
            <a href="https://wa.me/8801752403475" target='__blank'>Send a message</a>

          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required/>
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="massage" rows="7" placeholder='Your Massage'></textarea>
          <button type='submit' className='btn btn-primary'>Send Massager</button>
        </form>
      </div>

    </section>
  )
}

export default Contact