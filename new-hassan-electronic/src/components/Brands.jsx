import "./Brands.css";

import superAsia from "../assets/super asia logo.png";
import pel from "../assets/pel logo.png";
import orient from "../assets/orient logo.jpg";
import dawlance from "../assets/dawlance.png";
import lg from "../assets/lg logo.jpg";
import kenwood from "../assets/kenwood logo.jpg";
import hisense from "../assets/hisense logo.jpg";
import tcl from "../assets/tcl logo.png";
import haier from "../assets/haier logo.png";
import samsung from "../assets/samsung logo.png";

const brands = [
  {
    name: "Super Asia",
    image: superAsia,
  },
  {
    name: "PEL",
    image: pel,
  },
  {
    name: "Orient",
    image: orient,
  },
  {
    name: "Dawlance",
    image: dawlance,
  },
  {
    name: "LG",
    image: lg,
  },
  {
    name: "Kenwood",
    image: kenwood,
  },
  {
    name: "Hisense",
    image: hisense,
  },
  {
    name: "TCL",
    image: tcl,
  },
  {
    name: "Haier",
    image: haier,
  },
  {
    name: "Samsung",
    image: samsung,
  },
];

function Brands() {
  return (
    <section className="brands" id="brands">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">OUR BRANDS</p>

          <h2>Brands We Deal With</h2>

          <p>
            We offer electronics and appliances from trusted and leading brands.
          </p>
        </div>
      </div>

      <div className="brands-marquee">
        <div className="brands-track">
          {[...brands, ...brands].map((brand, index) => (
            <div
              className="brand-card"
              key={`${brand.name}-${index}`}
            >
              <img
                src={brand.image}
                alt={brand.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;