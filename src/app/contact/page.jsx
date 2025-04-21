// "use client";

import { FaClock, FaPhoneAlt, FaTimes } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import LayoutContainer from "@/components/LayoutContainer";
import Footer from "@/components/Footer";
import "./styles.scss";

export default function Contact() {
  return (
    <div className="contact-component">
      <LayoutContainer bgColor="">
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
                <div>
                  <div className="labeling">Email</div>
                  <a href="mailto:shivasaisolar12@gmail.com">
                    shivasaisolar12@gmail.com
                  </a>
                </div>
              </div>
              <div className="info-item">
                <FaPhoneAlt className="icon" />
                <div>
                  <div className="labeling">Phone</div>
                  <div>
                    <a href="tel:+919535140581">95351 40581</a> /{" "}
                    <a href="tel:+919380151772">93801 51772</a>
                  </div>
                </div>
              </div>
              <div className="info-item">
                <FaClock className="icon location-icon" />
                <div>
                  <div className="labeling">Business days</div>
                  <div className="address">
                    <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                    <div>Saturday: 10:00 AM - 4:00PM</div>
                  </div>
                </div>
              </div>
              <div className="address-section">

                <div className="info-item">
                  <FaLocationDot className="icon location-icon" />
                  <div>
                    <div className="labeling">Office Address</div>
                    <div className="address">
                      No #45/5, Chikkagollarahatti, Magadi Main Road, Near Embassy
                      School, Bangalore - 560091
                    </div>
                    <div className="map-wrapper">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3887.3969902173676!2d77.5369280748421!3d13.010372537308571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1745092268120!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                      />



                    </div>
                  </div>
                </div>
                <div className="info-item">
                  <FaLocationDot className="icon location-icon" />
                  <div>
                    <div className="labeling">Factory Address</div>
                    <div className="address">
                      No #45/5, Chikkagollarahatti, Magadi Main Road, Near Embassy
                      School, Bangalore - 560091
                    </div>
                    <div className="map-wrapper">


                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3887.3969902173676!2d77.5369280748421!3d13.010372537308571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1745092268120!5m2!1sen!2sin"
                        width="100%"
                        // height="300"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>

      </LayoutContainer >
      {/* <LayoutContainer>
        <div className="contact-form-wrapper">
          <div className="sub-title">Raise a query</div>
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
      </LayoutContainer> */}
      <Footer />
    </div>
  );
}
