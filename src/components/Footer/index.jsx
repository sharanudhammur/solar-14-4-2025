// "use client";

import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./styles.scss";
import LayoutContainer from "@/components/LayoutContainer";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
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
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
          <div style={{ color: "#555" }}>
            © 2022. Company Name. All rights reserved.
          </div>
        </div>
        <div className="side-links">
          <div>
            <div className="footer-info-title">Our Products</div>
            <div className="link-items">
              <div className="links">FPC Solar Water Heater</div>
              <div className="links">ETC Solar Water Heater</div>
              <div className="links">Electric Geyser</div>
              <div className="links">Chimney</div>
              <div className="links">RO Water Purifier</div>
            </div>
          </div>
          <div>
            <div className="footer-info-title">Quick Link</div>
            <div className="link-items">
              <div className="links">Home</div>
              <div className="links">Products</div>
              <div className="links">About Us</div>
              <div className="links">contact</div>
            </div>
          </div>
        </div>
      </div>
    </LayoutContainer>
  );
}
