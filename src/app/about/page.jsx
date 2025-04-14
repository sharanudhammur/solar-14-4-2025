// "use client";

import "./styles.scss";
import Image from "next/image";
import img1 from "../../Assets/Images/img1.png";
import img2 from "../../Assets/Images/img2.png";
import LayoutContainer from "@/components/LayoutContainer";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'SHIVA SAI SOLAR SYSTEM | ROYAL DART BLAZE - Official Site',
  description: 'Get the best deals on SHIVA SAI SOLAR SYSTEM and explore the powerful ROYAL DART BLAZE products. Trusted by thousands!',
};

export default function AboutUs() {
  return (
    <div className="about-us-component">
      <LayoutContainer>
        <section className="section1">
          <div
            className="title"
            data-aos="fade-left"
            data-aos-delay="0"
            data-aos-duration="1000"
          >
            About Us
          </div>
          <div className="about-section">
            <div
              className="content"
              data-aos="fade-left"
              data-aos-delay="0"
              data-aos-duration="1000"
            >
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
            </div>
            <Image
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1000"
              src={img1}
              alt="Solar Panel Factory"
              className="section-image"
            />
          </div>
          <p
            className="desc"
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            To empower every individual by providing access to safe and reliable
            power at affordable cost by combining innovative technology and
            skill to give high performance products to ensure trust and faith in
            all the customers. We at "SHIVA SAI SOLAR SYSTEM" have the latest
            infrastructure & equipment for processing the products.
          </p>
          <div className="about-section">
            <Image
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1000"
              src={img2}
              alt="Solar Panel Factory"
              className="section-image"
            />
            <div
              className="content"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <p className="desc">
                As the pre-eminent technology and production enterprises, we are
                committed to endowing our esteemed clients with unmatchable
                quality and complete satisfaction, through our quality products
                and services. We believe in our capability to meet competition
                globally in quality and technology.
              </p>
              <p className="desc">
                We also in the field of Solar Photovoltaic Module, Solar Home
                Light, Solar Street Light, Solar Lantern, Solar Power Plant,
                Solar Invertors and May More.
              </p>
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
            data-aos="fade-up"
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
            data-aos="fade-up"
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
            data-aos="fade-up"
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
      <Footer />
    </div>
  );
}
