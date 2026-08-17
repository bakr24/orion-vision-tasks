

import "./Categories.css";

import tvImage from "../assets/tv1.webp";
import refrigeratorImage from "../assets/refrigerator.avif";
import acImage from "../assets/ac.avif";
import washingMachineImage from "../assets/washing machine.jpg";
import kitchenImage from "../assets/coffee makers.jpg";
import electronicsImage from "../assets/microwave.jpg";

const categories = [
  {
    name: "LED TVs",
    description: "Smart TVs and LED televisions from trusted brands.",
    image: tvImage,
  },
  {
    name: "Refrigerators",
    description: "Reliable refrigerators and cooling appliances.",
    image: refrigeratorImage,
  },
  {
    name: "Air Conditioners",
    description: "Efficient cooling solutions for homes and businesses.",
    image: acImage,
  },
  {
    name: "Washing Machines",
    description: "Quality washing machines for everyday use.",
    image: washingMachineImage,
  },
  {
    name: "Kitchen Appliances",
    description: "Essential electronic appliances for modern kitchens.",
    image: kitchenImage,
  },
  {
    name: "Other Electronics",
    description: "A variety of electronic products and accessories.",
    image: electronicsImage,
  },
];

function Categories() {
  return (
    <section id="categories" className="categories">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">OUR CATEGORIES</p>

          <h2>Explore Our Product Range</h2>

          <p>
            Discover a variety of electronic appliances and products
            available at competitive wholesale prices.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => {
            return (
              <div className="category-card" key={category.name}>
                <div className="category-image">
                  <img
                    src={category.image}
                    alt={category.name}
                  />
                </div>

                <div className="category-content">
                  <h3>{category.name}</h3>

                  <p>{category.description}</p>

                  <a href="#contact">Ask for Details →</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Categories;