import "./WhyChooseUs.css";

import {
  FaTags,
  FaShieldAlt,
  FaBoxes,
  FaHeadset,
} from "react-icons/fa";

const reasons = [
  {
    title: "Competitive Prices",
    description:
      "Get quality electronic products at competitive wholesale prices.",
    icon: FaTags,
  },
  {
    title: "Quality Products",
    description:
      "We focus on providing reliable and quality electronic appliances.",
    icon: FaShieldAlt,
  },
  {
    title: "Wide Product Range",
    description:
      "Explore different electronics and appliances in one convenient place.",
    icon: FaBoxes,
  },
  {
    title: "Reliable Service",
    description:
      "We aim to provide helpful and reliable service to every customer.",
    icon: FaHeadset,
  },
];

function WhyChooseUs() {
  return (
    <section id="why-us" className="why-us">
      <div className="container why-us-container">
        <div className="why-us-content">
          <p className="section-tag">WHY CHOOSE US</p>

          <h2>
            More Than Just
            <span> Electronics</span>
          </h2>

          <p>
            At New Hassan Electronics, we focus on providing customers
            with quality products, competitive prices, and reliable service.
          </p>

          <a href="#contact" className="primary-button">
            Contact Us Today
          </a>
        </div>

        <div className="why-us-grid">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div className="why-us-card" key={reason.title}>
                <div className="why-us-icon">
                  <Icon />
                </div>

                <h3>{reason.title}</h3>

                <p>{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;