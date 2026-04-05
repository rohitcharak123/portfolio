import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-description">
            Although I'm not currently looking for any new opportunities, my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="contact-form-container glass-card">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your message here..." required></textarea>
              </div>
              <button type="submit" className="primary-btn submit-btn">
                Say Hello
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
