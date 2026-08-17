import "./Footer.css";
import { Pointer } from "lucide-react";
import {
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span>New Hassan</span>
              Electronics
            </a>

            <p>
              Your trusted electronics wholesale partner in Lodhran,
              providing quality products and reliable service.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#categories">Categories</a>
            <a href="#products">Products</a>
          </div>

          <div className="footer-links">
            <h3>Contact</h3>

            <a href="#contact">Get in Touch</a>
            <a href="#contact">Product Inquiry</a>
            <a href="#contact">Wholesale Information</a>
          </div>

          <div className="footer-location">
            <h3>Visit Us</h3>

            <div>
              <FaMapMarkerAlt />

              <p style={{ cursor: "pointer" }}>
                Sadar Market, Multan Road,
                <br />
                Lodhran, Pakistan
              </p>
              
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 New Hassan Electronics. All rights reserved.
          </p>

          <a href="#home" className="back-to-top">
            Back to Top
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;