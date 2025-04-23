"use client";

import { FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import "./styles.scss";
import LayoutContainer from "@/components/LayoutContainer";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Footer() {
  const openWhatsApp = () => {
    window.location.href = "https://wa.me/919535140581"; // Replace with your actual number
  };

  const openInstagram = () => {
    window.location.href =
      "https://www.instagram.com/royaldartblazesolars?igsh=ZHB3b3BubjgwbDVt";
  };

  return (
    <LayoutContainer bgColor="#e7ebf0">
      <div className="footer-component">
        <div className="details">
          <div className="subtitle">Contact Us</div>
          <div className="title">Get in touch</div>
          <div className="desc">
            Have questions, feedback, or just want to say hello? We'd love to
            hear from you. Our team is always ready to help and provide you with
            the best support possible. Fill out the form or reach out to us
            through the details below.
          </div>
          <div className="icons">
            <FaFacebook />
            <FaInstagram onClick={openInstagram} />
            <FaWhatsapp onClick={openWhatsApp} />
          </div>
          <div style={{ color: "#555" }}>
            © 2025. Shiva Sai Solar Panel. All rights reserved.
          </div>
        </div>
        <div className="side-links">
          <div>
            <div className="footer-info-title">Our Products</div>
            <div className="link-items">
              <div className="links" onClick={() => redirect("/products")}>
                FPC Solar Water Heater
              </div>
              <div className="links" onClick={() => redirect("/products")}>
                ETC Solar Water Heater
              </div>
              <div className="links" onClick={() => redirect("/products")}>
                Electric Geyser
              </div>
              <div className="links" onClick={() => redirect("/products")}>
                Chimney
              </div>
              <div className="links" onClick={() => redirect("/products")}>
                RO Water Purifier
              </div>
            </div>
          </div>
          <div>
            <div className="footer-info-title">Quick Link</div>
            <div className="link-items">
              <div className="links">
                <Link href="/" passHref>
                  Home
                </Link>
              </div>
              <div className="links">
                <Link href="/about" passHref>
                  About
                </Link>
              </div>
              <div className="links">
                <Link href="/products" passHref>
                  Products
                </Link>
              </div>
              <div className="links">
                <Link href="/services" passHref>
                  Services
                </Link>
              </div>
              <div className="links">
                <Link href="/brochure" passHref>
                  Brochure
                </Link>
              </div>
              <div className="links">
                <Link href="/gallery" passHref>
                  Gallery
                </Link>
              </div>
              <div className="links">
                <Link href="/contact" passHref>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutContainer>
  );
}
