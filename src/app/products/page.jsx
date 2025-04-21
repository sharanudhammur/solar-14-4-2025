// "use client";

import "./styles.scss";
import LayoutContainer from "@/components/LayoutContainer";
import Footer from "@/components/Footer";
import { FaCheckCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import img3 from "../../Assets/Images/img3.png";
import ETCSolarWaterHeaterImage from "../../Assets/Images/ETCSolarWaterHeaterImage.png";
import FPCSolarWaterHeaterImage from "../../Assets/Images/FPCSolarWaterHeaterImage.png";
import ROPurifierImage from "../../Assets/Images/ROPurifierImage.jpg";
import ChimneyImage from "../../Assets/Images/ChimneyImage.png";
import ElectricGeyserImage from "../../Assets/Images/ElectricGeyserImage.png";
import { RiArrowRightLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";

export default function ProductsPage() {
  return (
    <>
      <div className="products-page">
        <LayoutContainer bgColor="#fff">
          <div
            data-aos="fade-left"
            className="page-title"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="700"
          >
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
              data-aos-delay="100"
              data-aos-offset="-200"
            >
              <div className="image-wrapper">
                <img
                  src={ETCSolarWaterHeaterImage.src}
                  alt="ETC Solar Water Heater"
                />
              </div>
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
            <div
              className="product-card"
              data-aos="fade-left"
              data-aos-delay="50"
            >
              <div className="image-wrapper">
                <img
                  src={FPCSolarWaterHeaterImage.src}
                  alt="FPC Solar Water Heater"
                />
              </div>
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
          </div>
        </LayoutContainer>

        {/* Other Products */}
        <LayoutContainer bgColor="#e7ebf0">
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
                <div className="image-wrapper">
                  <img
                    src={ElectricGeyserImage.src}
                    // src="https://www.aysonline.pk/wp-content/uploads/2024/11/BOSS-ELECTRIC-WATER-HEATER-KE-SIE-25CL-SUP-STL.png"
                    alt="Electric Geyser"
                  />
                </div>

                <h3>Electric Geyser</h3>
                <p className="desc">
                  Our Evacuated Tube Collector (ETC) Solar Water Heaters ensure
                  high efficiency even in colder climates, offering an
                  eco-friendly way to heat your water effortlessly.
                </p>
                <div>
                  <button className="btn-secondary">
                    Enquire <RiArrowRightLine size={18} />{" "}
                  </button>
                </div>
              </div>
              <div
                className="small-product-card"
                data-aos="slide-up"
                data-aos-delay="100"
              >
                <div className="image-wrapper">
                  <img
                    src={ChimneyImage.src}
                    // src="https://5.imimg.com/data5/ANDROID/Default/2024/10/455286058/DX/LQ/PS/30791316/product-jpeg-500x500.jpg"
                    alt="Chimney"
                  />
                </div>
                <h3>Chimney</h3>
                <p className="desc">
                  Our Evacuated Tube Collector (ETC) Solar Water Heaters ensure
                  high efficiency even in colder climates, offering an
                  eco-friendly way to heat your water effortlessly.
                </p>
                <div>
                  <button className="btn-secondary">
                    Enquire <RiArrowRightLine size={18} />{" "}
                  </button>
                </div>
              </div>
              <div
                className="small-product-card"
                data-aos="slide-up"
                data-aos-delay="200"
              >
                <div className="image-wrapper">
                  <img src={ROPurifierImage.src} alt="RO Water Purifier" />
                </div>
                <h3>RO Water Purifier</h3>
                <p className="desc">
                  Our Evacuated Tube Collector (ETC) Solar Water Heaters ensure
                  high efficiency even in colder climates, offering an
                  eco-friendly way to heat your water effortlessly.
                </p>
                <div>
                  <button className="btn-secondary">
                    Enquire <RiArrowRightLine size={18} />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </LayoutContainer>

        <LayoutContainer>
          <div className="product-options-wrapper">
            <div className="product-option">
              <h2 className="sub-title">Material Options</h2>
              <ul className="option-list">
                <li>
                  <FaCheck />
                  <div>Copper</div>
                </li>
                <li>
                  <FaCheck />
                  <div>Stainless Steel (SS)</div>
                </li>
                <li>
                  <FaCheck />
                  <div>Galvanized Iron (GI) with Enamel Coated</div>
                </li>
                <li>
                  <FaCheck />
                  <div>Ceramic Coated</div>
                </li>
              </ul>
            </div>

            <div className="product-option">
              <h2 className="sub-title">Warranty Options</h2>
              <ul className="option-list">
                <li>
                  <FaCheck />
                  <div>5 Years Guarantee & Warranty</div>
                </li>
                <li>
                  <FaCheck />
                  <div>10 Years Warranty</div>
                </li>

                <li>
                  <FaCheck />
                  <div>15 Years Warranty</div>
                </li>
              </ul>
            </div>
          </div>
        </LayoutContainer>

        <LayoutContainer bgColor="#fff">
          <div className="product-specifications">
            <div className="sub-title">
              Technical Specifications of ETC Solar Water Heater
            </div>
            <div className="specs">
              <ul>
                <li>Type of Collector: ETC</li>
                <li>Tube size: 58 - 1800mm (100L - 300L)</li>
                <li>Tube size: 58 - 2100mm (500L)</li>
                <li>Tank diameter: 480mm (100L - 300L), 550mm (500L)</li>
                <li>
                  Inner tank material: High-grade material with ceramic coating
                </li>
                <li>Tank insulation: PVF 50mm</li>
              </ul>
              <ul>
                <li>Flame angle: 27 degrees</li>
                <li>Method of building: MIG welding technology</li>
                <li>
                  Outer tank material: Powder coated / Stainless Steel (S.S)
                </li>
                <li>Type of grommets: Silicon washers</li>
                <li>Suitable for: 3 - 8 persons</li>
              </ul>
            </div>
          </div>
        </LayoutContainer>

        <LayoutContainer bgColor="">
          <div className="product-highlights">
            <div className="sub-title">Product Highlights</div>
            <div className="highlight">
              <ul>
                <li>
                  <FaCheckCircle /> High-Efficiency Mono/Poly Panels
                </li>
                <li>
                  <FaCheckCircle /> Superior Temperature Coefficient
                </li>
              </ul>
              <ul>
                <li>
                  <FaCheckCircle /> Excellent Low-Light Performance
                </li>
                <li>
                  <FaCheckCircle /> Certified for Safety and Durability
                </li>
              </ul>
            </div>
          </div>
        </LayoutContainer>

        <LayoutContainer>
          <div className="offer-section">
            <div className="title">Exclusive Combo Offer</div>
            <p>
              Get the main product along with 4 other products at an
              unbelievable price!
            </p>
            <div className="offer-products-list">
              <div className="combo-product-card">
                <div className="combo-main-product">
                  <div className="price">
                    <div>Combo Offer</div>
                  </div>
                  <div className="all-products-label">(All products)</div>
                  <div className="each">
                    <img
                      src={ETCSolarWaterHeaterImage.src}
                      alt="Main Product"
                      className="product-image"
                    />
                    <div className="product-name">ETC Solar Water Heater</div>
                  </div>
                </div>
              </div>
              <div>
                <FaPlus className="plus-icon" />
              </div>
              <div className="combo-product-card">
                <div className="other-combo-products">
                  <div className="each">
                    <img
                      src={FPCSolarWaterHeaterImage.src}
                      alt="Main Product"
                      className="product-image"
                    />
                    <div className="product-name">FPC Solar Water Heater</div>
                  </div>
                  <div className="each">
                    <img
                      src={ElectricGeyserImage.src}
                      alt="Main Product"
                      className="product-image"
                    />
                    <div className="product-name">Electric Geyser</div>
                  </div>
                  <div className="each">
                    <img
                      src={ChimneyImage.src}
                      alt="Main Product"
                      className="product-image"
                    />
                    <div className="product-name">Chimney</div>
                  </div>
                  <div className="each">
                    <img
                      // src="https://www.citywaterpurifier.com/wp-content/uploads/2019/12/City-Gold-1.jpg"
                      src={ROPurifierImage.src}
                      alt="Main Product"
                      className="product-image"
                    />
                    <div className="product-name">RO Water Purifier</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LayoutContainer>
      </div>
      <Footer />
    </>
  );
}
