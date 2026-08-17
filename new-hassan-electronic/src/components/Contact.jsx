import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">CONTACT US</p>

          <h2>Let's Get in Touch</h2>

          <p>
            Contact New Hassan Electronics for product inquiries,
            wholesale information, and other details.
          </p>
        </div>

        <div className="contact-container">
          

          <div className="contact-form-wrapper">
            <h3>Send Us a Message</h3>

            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button type="submit" className="primary-button">
                Send Message
                <FaArrowRight />
              </button>
            </form>
          </div>



          <div className="contact-info">
            <h3>Visit or Contact Us</h3>

            <p>
              Have a question about our products or wholesale information?
              Get in touch with us.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <span>Our Location</span>

                  <p>
                    Sadar Market, Multan Road, Lodhran, Pakistan
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <span>Email</span>

                  <p>1234@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaWhatsapp />
                </div>

                <div>
                  <span>WhatsApp</span>
                  <p>+92 1234567891</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Contact;