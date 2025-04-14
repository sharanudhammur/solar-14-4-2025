// "use client";

import "./styles.scss";
import LayoutContainer from "@/components/LayoutContainer";
import Footer from "@/components/Footer";
import { FaCheckCircle } from "react-icons/fa";
import img3 from "../../Assets/Images/img3.png";
import { RiArrowRightLine } from "react-icons/ri";

export default function ProductsPage() {
  return (
    <>
      <div className="products-page">
        <LayoutContainer bgColor="#fff">
          <div data-aos="fade-left" className="page-title">
            <h1>Our Products</h1>

            <p>
              Explore our range of high-quality solar solutions and home
              appliances tailored for your everyday needs.
            </p>
          </div>
        </LayoutContainer>
        <LayoutContainer bgColor="#fff">
          {/* Main Products */}
          <div className="main-products">
            <div
              className="product-card"
              data-aos="fade-left"
              data-aos-delay="50"
            >
              <img src={img3.src} alt="FPC Solar Water Heater" />
              <div className="product-info">
                <div className="sub-title">FPC Solar Water Heater</div>
                <p className="desc">
                  Experience efficient water heating with our Flat Plate
                  Collector (FPC) Solar Water Heaters — built for durability and
                  outstanding performance under all weather conditions.
                </p>
                <button className="btn-primary">
                  Enquire Now <RiArrowRightLine size={18} />
                </button>
              </div>
            </div>

            <div
              className="product-card"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-offset="-200"
            >
              <img src={img3.src} alt="ETC Solar Water Heater" />
              <div className="product-info">
                <div className="sub-title">ETC Solar Water Heater</div>
                <p className="desc">
                  Our Evacuated Tube Collector (ETC) Solar Water Heaters ensure
                  high efficiency even in colder climates, offering an
                  eco-friendly way to heat your water effortlessly.
                </p>

                <button className="btn-primary">
                  Enquire Now <RiArrowRightLine size={18} />
                </button>
              </div>
            </div>
          </div>
        </LayoutContainer>

        {/* Other Products */}
        <LayoutContainer bgColor="#fecc30">
          <div className="other-products">
            <div className="sub-title" data-aos="slide-up" data-aos-delay="0">
              Other Products
            </div>
            <div className="other-products-grid">
              <div
                className="small-product-card"
                data-aos="slide-up"
                data-aos-delay="0"
              >
                <img src={img3.src} alt="Electric Geyser" />
                <h3>Electric Geyser</h3>
                <p className="desc">
                  Our Evacuated Tube Collector (ETC) Solar Water Heaters ensure
                  high efficiency even in colder climates, offering an
                  eco-friendly way to heat your water effortlessly.
                </p>
                <button className="btn-secondary">
                  Enquire <RiArrowRightLine size={18} />{" "}
                </button>
              </div>
              <div
                className="small-product-card"
                data-aos="slide-up"
                data-aos-delay="100"
              >
                <img src={img3.src} alt="Chimney" />
                <h3>Chimney</h3>
                <p className="desc">
                  Our Evacuated Tube Collector (ETC) Solar Water Heaters ensure
                  high efficiency even in colder climates, offering an
                  eco-friendly way to heat your water effortlessly.
                </p>
                <button className="btn-secondary">
                  Enquire <RiArrowRightLine size={18} />
                </button>
              </div>
              <div
                className="small-product-card"
                data-aos="slide-up"
                data-aos-delay="200"
              >
                <img src={img3.src} alt="RO Water Purifier" />
                <h3>RO Water Purifier</h3>
                <p className="desc">
                  Our Evacuated Tube Collector (ETC) Solar Water Heaters ensure
                  high efficiency even in colder climates, offering an
                  eco-friendly way to heat your water effortlessly.
                </p>
                <button className="btn-secondary">
                  Enquire <RiArrowRightLine size={18} />
                </button>
              </div>
            </div>
          </div>
        </LayoutContainer>
        <LayoutContainer>
          <div className="product-highlights">
            <div className="sub-title">Product Highlights</div>
            <ul>
              <li>
                <FaCheckCircle /> 25-Year Performance Warranty
              </li>
              <li>
                <FaCheckCircle /> High-Efficiency Mono/Poly Panels
              </li>
              <li>
                <FaCheckCircle /> Superior Temperature Coefficient
              </li>
              <li>
                <FaCheckCircle /> Excellent Low-Light Performance
              </li>
              <li>
                <FaCheckCircle /> Certified for Safety and Durability
              </li>
            </ul>
          </div>
        </LayoutContainer>

        <LayoutContainer>
          <div className="product-specifications">
            <div className="sub-title">Technical Specifications</div>
            <ul>
              <li>Type of Collector: ETC</li>
              <li>Tube size: 58 - 1800mm (100L - 300L)</li>
              <li>Tube size: 58 - 2100mm (500L)</li>
              <li>Tank diameter: 480mm (100L - 300L), 550mm (500L)</li>
              <li>
                Inner tank material: High-grade material with ceramic coating
              </li>
              <li>Tank insulation: PVF 50mm</li>
              <li>Flame angle: 27 degrees</li>
              <li>Method of building: MIG welding technology</li>
              <li>
                Outer tank material: Powder coated / Stainless Steel (S.S)
              </li>
              <li>Type of grommets: Silicon washers</li>
              <li>Suitable for: 3 - 8 persons</li>
            </ul>
          </div>
        </LayoutContainer>
      </div>
      <Footer />
    </>
  );
}
