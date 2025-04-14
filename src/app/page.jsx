// "use client";

import "./styles.scss";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import { Button } from "primereact/button";
import heroImg from "../Assets/Images/hero-img.png";
import AboutUs from "./about/page";
import LayoutContainer from "@/components/LayoutContainer";
import Footer from "@/components/Footer";
import "aos/dist/aos.css";

export default function Home() {
  return (
    <>
      <LayoutContainer>
        <div className="home-component">
          <div className="hero-section">
            <div className="hero-info">
              <div
                className="hero-title"
                data-aos="fade-left"
                data-aos-delay="0"
              >
                Power Your Future with Clean Energy
              </div>
              <div
                className="hero-desc"
                data-aos="fade-left"
                data-aos-delay="50"
              >
                Experience sustainable living with our leading solar energy and
                water heating solutions. Save on electricity costs and reduce
                your carbon footprint with reliable, eco-friendly systems
                designed for you.
              </div>

              <div data-aos="fade-left" data-aos-delay="100">
                <Button
                  style={{
                    marginTop: "30px",
                    backgroundColor: "#fecc30",
                    color: "black",
                    fontWeight: 500
                  }}
                  variant="solid"
                >
                  Get started <RiArrowRightLine style={{ marginLeft: "8px" }} />
                </Button>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="150">
              <Image
                style={{ borderRadius: "10px" }}
                className="hero-image"
                src={heroImg}
                alt=""
              />
            </div>
          </div>
          <div
            className="our-story-wrapper"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            <div>
              <div className="our-story">OUR STORY</div>
              <div className="title">Welcome to our products</div>
              <div className="content">
                <div className="desc">
                  Our products is one of the Leading Solar Water Heaters
                  manufacturing companies in India, based out of Bengaluru and
                  established in the year 2004. It has grown from a modest
                  customer base to a trusted brand in the home appliances market
                  across the country. We recently introduced Glass-Lined Solar
                  Water Heating Systems into the market, an internationally
                  renowned technology in Solar Water Heating Systems to help
                  provide clean hot water. Our products include Solar Water
                  Heaters (Evacuated Tube Collectors and Flat Plate Collectors),
                  Solar Rooftop Solutions, Electric Geysers, Heat Pumps, Kitchen
                  Chimneys, and more.
                </div>
              </div>
            </div>
            <img
              src="https://thumbs.dreamstime.com/b/ecological-vacuum-solar-tube-collectors-24404873.jpg"
              alt=""
            />
          </div>
        </div>
      </LayoutContainer>
      <AboutUs />
      {/* <Footer /> */}
    </>
  );
}
