// "use client";

import "./styles.scss";
import Image from "next/image";
import img1 from "../../Assets/Images/img1.png";
import img2 from "../../Assets/Images/img2.png";
import LayoutContainer from "@/components/LayoutContainer";
import Footer from "@/components/Footer";

export default function AboutUs({ hideFooter = false }) {
  return (
    <div className="about-us-component">
      <LayoutContainer>
        <section className="section1" data-aos="fade-left">
          <div className="title">About Us</div>
          <div className="about-section about-section1">
            <div className="content">
              <p className="desc">
                <span style={{ color: "#3182ce", fontWeight: 500 }}>
                  "SHIVA SAI SOALR SLYSTEM"
                </span>{" "}
                is one of the leading company in the solar industry, pioneer in
                the field of solar water Heater Systems both ETC & FPC, Our
                Brand name{" "}
                <span style={{ color: "#3182ce", fontWeight: 500 }}>
                  (ROYAL DART BLAZE)
                </span>
                , We also supplying in OEM base Solar Water Heater. Our motto is
                to help and reduce the cost of electricity by utilizing the
                renewable energy, to save planet resources and keep the universe
                clean and green.
              </p>
              <p className="desc">
                We have the most efficient and well-trained employees who are
                ready to take up the challenges of the changing scenario on
                renewable energy segment. We have been providing the value added
                and committed services all along with innovative ideas which
                made us one of the leading and trusted company in renewable
                sector. country.
              </p>
              <p className="desc">
                To empower every individual by providing access to safe and
                reliable power at affordable cost by combining innovative
                technology and skill to give high performance products to ensure
                trust and faith in all the customers. We at "SHIVA SAI SOLAR
                SYSTEM" have the latest infrastructure & equipment for
                processing the products.
              </p>
            </div>
            <img
              data-aos="zoom-out"
              src="https://atlas-content-cdn.pixelsquid.com/stock-images/solar-water-heater-rvMxER6-600.jpg"
              alt="Solar Panel Factory"
              className="section-image img1"
            />
          </div>

          <div className="about-section about-section2">
            <img
              data-aos="zoom-out"
              src="https://5.imimg.com/data5/ANDROID/Default/2024/10/455286058/DX/LQ/PS/30791316/product-jpeg-500x500.jpg"
              alt="Solar Panel Factory"
              className="section-image img1"
            />
            <div className="content" data-aos="fade-left">
              <p className="desc">
                We are a leading technology and production enterprise, dedicated
                to delivering unmatched quality and complete customer
                satisfaction. With a strong focus on innovation and service
                excellence, we proudly meet global standards in both quality and
                technology, ensuring our clients always receive the best.
              </p>
              <p className="desc">
                Our expertise covers a wide range of solar solutions, including
                Solar Photovoltaic Modules, Solar Home Lighting Systems, Solar
                Street Lights, Solar Lanterns, Solar Power Plants, Solar
                Inverters, and many more. Every product is designed to be
                efficient, durable, and environmentally friendly.
              </p>
              <p className="desc">
                Driven by a commitment to clean energy, we continue to grow and
                innovate in the solar industry. Our goal is to empower our
                customers with sustainable, high-quality products that
                contribute to a greener future.
              </p>
            </div>
          </div>

          <div className="experience-section">
            <div className="each-card">
              <div className="text" data-aos="zoom-in">
                8+
              </div>
              <div className="label">Years Experience</div>
            </div>
            <div className="each-card">
              <div className="text" data-aos="zoom-in" data-aos-delay="100">
                5,000+
              </div>
              <div className="label">Happy Customers</div>
            </div>
            <div className="each-card">
              <div className="text" data-aos="zoom-in" data-aos-delay="200">
                100+
              </div>
              <div className="label">Projects Completed</div>
            </div>
            <div className="each-card">
              <div className="text" data-aos="zoom-in" data-aos-delay="300">
                15+
              </div>
              <div className="label">Cities Covered</div>
            </div>
          </div>
        </section>
      </LayoutContainer>
      <LayoutContainer bgColor="#e7ebf0">
        <div className="core-value-section">
          <div className="sub-title">Our Core Values</div>
          <section className="values-section ">
            <div className="values">
              <div className="value" data-aos="fade-left" data-aos-delay="0">
                <h2>Innovation</h2>
                <p className="desc">
                  We constantly push boundaries to develop better, more
                  efficient technologies.
                </p>
              </div>
              <div className="value" data-aos="fade-left" data-aos-delay="100">
                <h2>Quality</h2>
                <p className="desc">
                  We adhere to the highest standards to ensure our products are
                  reliable and durable.
                </p>
              </div>
              <div className="value" data-aos="fade-left" data-aos-delay="200">
                <h2>Sustainability</h2>
                <p className="desc">
                  We are committed to practices that support the health of our
                  environment.
                </p>
              </div>
              <div className="value" data-aos="fade-left" data-aos-delay="300">
                <h2>Integrity</h2>
                <p className="desc">
                  We build trust through transparency, honesty, and respect for
                  our customers and partners.
                </p>
              </div>
            </div>
          </section>
        </div>
      </LayoutContainer>
      <LayoutContainer>
        <div className="sub-title">Our Commitment</div>
        <section className="mission-vision">
          <div
            className="mission"
            // data-aos="fade-up"
            data-aos="zoom-in"
            data-aos-delay="0"
            data-aos-duration="1000"
          >
            <h2>Our Quality</h2>
            <p className="desc">
              Products withstand the toughest environmental condition to provide
              the prefect solution for electricity generation. Shiva Sai solar
              system (ROYAL DART BLAZE) PV modules are made of highly efficient
              mono and poly crystalline solar cell which are resistant to rain,
              water abrasion and hail impact.
            </p>
          </div>
          <div
            className="mission"
            // data-aos="fade-up"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <h2>Mission</h2>
            <p className="desc">
              Our mission is to continue to help expand global solar energy
              industry to make our solar power a clean, reliable and accessible
              energy source for everyone in the world with quick and fast
              delivery of quality services in satisfaction our customers need.
            </p>
          </div>
          <div
            className="mission"
            // data-aos="fade-up"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <h2>Vision</h2>
            <p className="desc">
              To fill the energy gaps around the world using high quality and
              cost-effective solar system and power solutions that will provide
              clean, reliable & grid competitive power in India.
            </p>
          </div>
        </section>
      </LayoutContainer>
      {!hideFooter && <Footer />}
    </div>
  );
}
