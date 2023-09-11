import React from 'react';
import './Contact.css';
import imagecontact from '../../assets/contactus.png';

const Contact = () => {
  return (
    <div>
   <div className="hero-section">
      <div className="hc">
        <h1 className="hero-heading">Get in Touch with Kiwi Studio.</h1>
        <p className="hero-paragraph">Thank you for your interest in Kiwi Studio! We would love to hear from you and assist you. Whether you have a question, need a quote, or simply want to discuss your project ideas, our dedicated team is here to help. With our expertise, we are committed to delivering outstanding results that exceed your expectations.</p>
      </div>
    </div>

    <div className="getintouch">
  <div className='cont'>
  <div className="upperdivnod">
    <div className="heading">Get in touch</div>
    <div className="para">Got a question, project, or crazy idea? Let's talk about it over a cup of coffee</div>
  </div>
  <div className="lowerdivnod">
    <div className="leftdiv">
      <img src={imagecontact} alt="Get in touch" style={{ borderRadius: '28.4444px' }} />
    </div>
    <div className="rightdiv">
      <div className="row1abc">
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
      </div>
      <div className="row2abc">
        <input type="text" placeholder="E-mail" />
      </div>
      <div className="row3abc">
        <textarea placeholder="Your Message"></textarea>
      </div>
      <div className="cta-button2">
        <span>Send</span>
      </div>
    </div>
  </div>
  
    
      </div>
      </div>
    </div>
  );
};

export default Contact;