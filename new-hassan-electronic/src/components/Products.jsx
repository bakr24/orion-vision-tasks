import "./Products.css";
import { FaArrowRight } from "react-icons/fa";

import tvImage from "../assets/tv1.webp";
import refrigeratorImage from "../assets/refrigerator.avif";
import acImage from "../assets/ac.avif";
import washingMachineImage from "../assets/washing machine.jpg";

const products = [
  {
    name: "Smart LED TV",
    category: "Television",
    description:
      "Modern LED and smart televisions for homes, shops, and businesses.",
    image: tvImage,
  },
  {
    name: "Double Door Refrigerator",
    category: "Refrigerator",
    description:
      "Reliable refrigeration solutions with modern features and spacious storage.",
    image: refrigeratorImage,
  },
  {
    name: "Inverter Air Conditioner",
    category: "Air Conditioner",
    description:
      "Energy-efficient cooling solutions for homes and commercial spaces.",
    image: acImage,
  },
  {
    name: "Automatic Washing Machine",
    category: "Washing Machine",
    description:
      "Convenient and reliable washing solutions for everyday use.",
    image: washingMachineImage,
  },
];

function Products() {
  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">FEATURED PRODUCTS</p>

          <h2>Explore Our Popular Products</h2>

          <p>
            Discover a selection of electronic appliances available at
            New Hassan Electronics.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => {
            return (
              <div className="product-card" key={product.name}>
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                </div>

                <div className="product-content">
                  <span className="product-category">
                    {product.category}
                  </span>

                  <h3>{product.name}</h3>

                  <p>{product.description}</p>

                  <a href="#contact" className="product-link">
                    Ask for Details
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;