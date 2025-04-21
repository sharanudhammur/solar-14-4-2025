"use client";
import React, { useState } from "react";
import LayoutContainer from "@/components/LayoutContainer";
import "./styles.scss";
import { IoIosArrowDown } from "react-icons/io";

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
    question: "How long does the installation process take?",
    answer:
      "Installation typically takes 1 to 3 days depending on the size and complexity of the system."
  },
  {
    question: "What happens during cloudy or rainy days?",
    answer:
      "Your system still works, just at reduced efficiency. Any shortfall is automatically covered by the grid."
  },
  {
    question: "Do I need to clean my solar panels regularly?",
    answer:
      "Occasional cleaning is recommended, especially in dusty areas. We also offer maintenance plans that include periodic cleaning."
  },
  {
    question: "Is financing available for solar panel installation?",
    answer:
      "Yes, we offer multiple financing options to make going solar affordable and accessible."
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
