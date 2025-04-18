"use client";
import { useState } from "react";
import LayoutContainer from "@/components/LayoutContainer";
import Footer from "@/components/Footer";
import "./styles.scss";

const companyImages = [
  {
    src: "https://www.cvent.com/sites/default/files/styles/focus_scale_and_crop_800x450/public/image/2023-07/52410684206_1906b040aa_c.jpg?h=c9f93661&itok=9QL-c2QY",
    caption: "Our Office HQ"
  },
  {
    src: "https://wp-media-partyslate.imgix.net/2021/08/photo-0aa62ef3-a626-45e4-a7f7-c8934c7f51ca.jpeg?auto=compress%2Cformat&ixlib=php-3.3.1",
    caption: "Team Meetup - Jan 2024"
  },
  {
    src: "https://thepaintsesh.com/wp-content/uploads/2021/04/corporate-580e8bbf3df78c2c73adc69a-scaled.jpeg",
    caption: "On-Site Installation - Mysore"
  },
  {
    src: "https://assets.partywizz.com/blog/20230313084324/corporate_events.png",
    caption: "Solar Awareness Campaign"
  },
  {
    src: "https://wp-media-partyslate.imgix.net/2021/08/photo-0aa62ef3-a626-45e4-a7f7-c8934c7f51ca.jpeg?auto=compress%2Cformat&ixlib=php-3.3.1",
    caption: "Factory Visit - Coimbatore"
  },
  {
    src: "https://snacknation.com/wp-content/uploads/2019/08/SnackNation-group.jpg",
    caption: "Diwali Celebration at Office"
  },
  {
    src: "https://wp-media-partyslate.imgix.net/2021/08/photo-0aa62ef3-a626-45e4-a7f7-c8934c7f51ca.jpeg?auto=compress%2Cformat&ixlib=php-3.3.1",
    caption: "Team Meetup - Jan 2024"
  },
  {
    src: "https://thepaintsesh.com/wp-content/uploads/2021/04/corporate-580e8bbf3df78c2c73adc69a-scaled.jpeg",
    caption: "On-Site Installation - Mysore"
  },
  {
    src: "https://assets.partywizz.com/blog/20230313084324/corporate_events.png",
    caption: "Solar Awareness Campaign"
  }
];

export default function CompanyGallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <LayoutContainer bgColor="#fff">
        <div className="company-gallery">
          <h2 className="title">Gallery: Our Photos</h2>
          <p className="subtitle">
            Take a peek behind the scenes at Shiva Sai Solar — from our office
            life to field installations.
          </p>

          <div className="image-grid">
            {companyImages.map((img, index) => (
              <div
                key={index}
                className="img-card"
                onClick={() => setLightbox(img.src)}
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-delay={index * 50}
              >
                <img src={img.src} alt={img.caption} />
                <div className="caption">{img.caption}</div>
              </div>
            ))}
          </div>

          {lightbox && (
            <div className="lightbox" onClick={() => setLightbox(null)}>
              <img src={lightbox} alt="View" />
              <span className="close">×</span>
            </div>
          )}
        </div>
      </LayoutContainer>
      <Footer />
    </>
  );
}
