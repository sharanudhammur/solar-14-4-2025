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
import React from "react";
import FaqSection from "@/components/FAQ";
import CustomerReviews from "@/components/CustomerReviews/indes";
// import { useState } from "react";

// src/app/page.js

export const metadata = {
  title: "Shiva Sai Solar System | Royal Dart Blaze - Best Solar Solutions",
  description:
    "Official site for Shiva Sai Solar System and Royal Dart Blaze. Discover top-tier solar technology and energy solutions for homes and businesses.",
  keywords:
    "Shiva Sai Solar System, Royal Dart Blaze, solar panels, solar systems, renewable energy",
  openGraph: {
    title: "Shiva Sai Solar System | Royal Dart Blaze",
    description:
      "Leading provider of solar systems and energy solutions. Explore Royal Dart Blaze today!",
    url: "https://yourdomain.com",
    siteName: "Shiva Sai Solar System",
    images: [
      {
        url: "https://yourdomain.com/solar-banner.jpg", // good image for sharing
        width: 1200,
        height: 630
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

const faqs = [
  {
    question: "What services does your company offer?",
    answer:
      "We offer a range of solar panel installation, maintenance, and consulting services tailored to residential and commercial needs."
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach out to us via the Contact Us page or email us directly at support@yourcompany.com."
  },
  {
    question: "Do you provide warranty for your installations?",
    answer:
      "Yes, we provide a 10-year warranty on installations and a 25-year warranty on solar panels."
  },
  {
    question: "What is the average installation time for solar panels?",
    answer:
      "The installation typically takes between 1 to 3 days, depending on the size and complexity of the system."
  },
  {
    question: "Can solar panels work in cloudy weather?",
    answer:
      "Yes, solar panels can still generate power on cloudy days, though they may be less efficient compared to sunny conditions."
  },
  {
    question: "Do you offer financing options for solar installations?",
    answer:
      "Yes, we offer flexible financing options including loans, leases, and power purchase agreements (PPA)."
  },
  {
    question: "Are solar panels suitable for all types of roofs?",
    answer:
      "Solar panels can be installed on most types of roofs, but our experts will assess the condition and suitability of your roof before installation."
  }
];

export default function Home() {
  // const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    // setActiveIndex(activeIndex === index ? null : index);
  };
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
      <AboutUs hideFooter={true} />
      <CustomerReviews />
      <FaqSection />
      <Footer />
    </div>
  );
}
