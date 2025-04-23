"use client";
import React, { useState } from "react";
import LayoutContainer from "@/components/LayoutContainer";
import "./styles.scss";
import { IoIosArrowDown } from "react-icons/io";

const faqs = [
  {
    question: "What services does your company offer?",
    answer:
      "We offer a range of services including solar panel installation, repair, replacement, maintenance, and consulting tailored to both residential and commercial needs."
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can email us at shivasaisolar12@gmail.com, call us at 95351 40581 / 93801 51772, or directly visit our office. You can also reach out via the Contact Us page."
  },
  {
    question: "Do you provide warranty for your installations?",
    answer:
      "Yes, we provide warranty and guarantee ranging from 5 to 15 years depending on the product — including 5 Years Guarantee & Warranty, 10 Years Warranty, and 15 Years Warranty."
  },
  {
    question: "How long does the installation process take?",
    answer:
      "The installation usually takes between 1 to 3 days, depending on the product, site conditions, and system size."
  },
  {
    question: "Do I need to clean my solar panels regularly?",
    answer:
      "Occasional cleaning is recommended, especially in dusty areas. We also offer maintenance plans that include periodic cleaning."
  },
  {
    question: "Is financing available for solar panel installation?",
    answer:
      "No, currently we do not offer financing options for solar panel installation."
  }
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <LayoutContainer bgColor="#fff">
      <div className="faq-section">
        <div className="sub-title">Frequently Asked Questions</div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {activeIndex === index ? (
                  <IoIosArrowDown
                    style={{
                      color: "#444",
                      marginTop: "2px",
                      rotate: "180deg"
                    }}
                  />
                ) : (
                  <IoIosArrowDown style={{ color: "#444", marginTop: "2px" }} />
                )}

                {faq.question}
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LayoutContainer>
  );
}
