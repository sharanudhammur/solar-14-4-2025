// "use client";

import { FaClock, FaPhoneAlt, FaTimes } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import LayoutContainer from "@/components/LayoutContainer";
import Footer from "@/components/Footer";
import "./styles.scss";

export default function Contact() {
  return (
    <>
      <LayoutContainer bgColor="#f3f5f6">
        <div className="contact-component">
          <div className="title">Contact Us</div>
          <div className="contact-component-wrapper">
            <div className="contact-info">
              <div className="info-list">
                <div className="desc">
                  Feel free to reach out to us! We're here to answer your
                  questions and help you out.
                </div>
                <div className="info-item">
                  <IoMail className="icon" />
                  <a href="mailto:shivasaisolar12@gmail.com">
                    shivasaisolar12@gmail.com
                  </a>
                </div>
                <div className="info-item">
                  <FaPhoneAlt className="icon" />
                  <div>
                    <a href="tel:+919535140581">95351 40581</a> /{" "}
                    <a href="tel:+919380151772">93801 51772</a>
                  </div>
                </div>
                <div className="info-item">
                  <FaLocationDot className="icon location-icon" />
                  <div className="address">
                    No #45/5, Chikkagollarahatti, Magadi Main Road, Near Embassy
                    School, Bangalore - 560091
                  </div>
                </div>
                <div className="info-item">
                  <FaClock className="icon location-icon" />
                  <div className="address">
                    <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                    <div>Saturday: 10:00 AM - 4:00PM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form className="form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button type="submit" className="submit-button">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </LayoutContainer>
      <Footer />
    </>
  );
}
