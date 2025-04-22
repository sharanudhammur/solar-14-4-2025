// "use client";

import "./styles.scss";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import { Button } from "primereact/button";
import heroImg from "../Assets/Images/hero-img.png";
import heroImg1 from "../Assets/Images/hero-img1.png";
import onlyLogoImage from "../Assets/Images/only-logo.png";
import AboutUs from "./about/page";
import LayoutContainer from "@/components/LayoutContainer";
import Footer from "@/components/Footer";
import "aos/dist/aos.css";
import React from "react";
import FaqSection from "@/components/FAQ";
import CustomerReviews from "@/components/CustomerReviews/indes";
import { getMetaInfo } from "@/utils/metaInfo";

export const metadata = getMetaInfo("Home");

export default function Home() {
  return (
    <div className="home-component-wrapper">
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
                src={heroImg1}
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
              <div className="title">Welcome to ROYAL DIRT BLAZE Products</div>
              <div className="content">
                <div className="desc">
                  Discover a wide range of high-quality solar products designed
                  to meet the latest BIS standards and customizable to suit your
                  needs. Established in Bengaluru in 2004,{" "}
                  <span style={{ fontWeight: 600 }}>ROYAL DIRT BLAZE</span> is a
                  pioneer in ETC and FPC-based solar water heaters. We proudly
                  introduced the advanced Ceramic Coated System using
                  world-class technology. Explore our full range under one
                  trusted brand—solar water heaters, electric geysers, RO water
                  purifiers, and heat pumps—all at attractive prices with
                  guaranteed performance.
                </div>
              </div>
            </div>
            <img src={onlyLogoImage.src} alt="" className="only-logo-image" />
          </div>
        </div>
      </LayoutContainer>
      <AboutUs hideFooter={true} />
      <CustomerReviews />
      <FaqSection />
      <Footer />
    </div>
  );
}
