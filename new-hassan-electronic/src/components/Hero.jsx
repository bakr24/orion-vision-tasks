import "./Hero.css";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import showroomImg from "../assets/showroom.jpg"; // <-- Import the image correctly (change .webp to .jpg if your file is .jpg)

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-tag">Electronics Wholesale Supplier in Lodhran</p>

          <h1>
            Quality Electronics.
            <span> Better Wholesale Prices.</span>
          </h1>

          <p className="hero-description">
            New Hassan Electronics provides a wide range of electronic
            appliances and products for customers and businesses in Lodhran
            and surrounding areas.
          </p>

          <div className="hero-buttons">
            <a href="#products" className="primary-button">
              Explore Products
              <FaArrowRight />
            </a>

            <a href="#contact" className="secondary-button">
              <FaWhatsapp />
              Contact Us
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src={showroomImg} // <-- Use the imported variable here
            alt="New Hassan Electronics Showroom"
            className="hero-image"
          />

          <div className="floating-card card-one">
            <span style={{color: "white"}}>✓</span>
            Wholesale Prices
          </div>

          <div className="floating-card card-two">
            <span style={{color: "white"}}>★</span>
            Quality Products
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;