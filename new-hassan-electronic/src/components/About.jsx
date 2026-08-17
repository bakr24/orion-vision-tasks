import "./About.css";
import { FaCheckCircle } from "react-icons/fa";

function About() {
  const features = [
    "Quality electronic appliances",
    "Competitive wholesale pricing",
    "Wide range of products",
    "Reliable customer service",
  ];

  return (
    <section id="about" className="about">
      <div className="container about-container">
        <div className="about-visual">
          <div className="about-main-card">
            <span className="about-small-text">NEW HASSAN</span>

            <h3>Electronics</h3>

            <p>
              Serving customers with quality products and reliable service.
            </p>
          </div>

          <div className="about-experience">
            <strong>Wholesale</strong>
            <span>Electronics Supplier</span>
          </div>
        </div>

        <div className="about-content">
          <p className="section-tag">ABOUT US</p>

          <h2>
            Your Reliable Partner for
            <span> Quality Electronics</span>
          </h2>

          <p className="about-description">
            New Hassan Electronics is an electronics wholesaler based in
            Sadar Market, Multan Road, Lodhran. We provide a range of
            electronic appliances and products for customers and businesses.
          </p>

          <p className="about-description">
            Our focus is simple: quality products, competitive wholesale
            prices, and reliable service.
          </p>

          <div className="about-features">
            {features.map((feature) => (
              <div className="about-feature" key={feature}>
                <FaCheckCircle />

                <span>{feature}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="primary-button">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;