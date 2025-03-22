import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';

function Join() {

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wuybnue', 'template_4e9x70n', form.current, {
        publicKey: '73Bdn5ex7i5Z4EP3H',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="join" id="join-us">
      <div className="left-join">
        <hr />
        <div><span className='stroke-text'>READY TO</span><span>LEVEL UP</span></div>
        <div><span>YOUR BODY</span><span className='stroke-text'>WITH US</span></div>
      </div>
      <div className="right-join">
        <form ref={form} action="" className='email-container' onSubmit={sendEmail}>
          <input type="email" name='user_email' placeholder='Enter your Email to join' />
          <button className='Btn btn-j'>Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default Join