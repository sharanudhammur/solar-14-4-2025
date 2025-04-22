"use client";
import { useState } from "react";
import LayoutContainer from "@/components/LayoutContainer";
import Footer from "@/components/Footer";
import "./styles.scss";
import Image from "next/image";
import bannerImage1 from "@/Assets/gallery-images/bannerImage1.jpeg";

const images = [
  require("@/Assets/gallery-images/gallery-image (1).jpeg"),
  require("@/Assets/gallery-images/gallery-image (3).jpeg"),
  require("@/Assets/gallery-images/gallery-image (4).jpeg"),
  require("@/Assets/gallery-images/gallery-image (5).jpeg"),
  require("@/Assets/gallery-images/gallery-image (6).jpeg"),
  require("@/Assets/gallery-images/gallery-image (14).jpeg"),
  require("@/Assets/gallery-images/gallery-image (18).jpeg"),
  require("@/Assets/gallery-images/gallery-image (19).jpeg"),
  require("@/Assets/gallery-images/gallery-image (24).jpeg"),
  require("@/Assets/gallery-images/gallery-image (25).jpeg"),
  require("@/Assets/gallery-images/gallery-image (26).jpeg"),
  require("@/Assets/gallery-images/gallery-image (27).jpeg"),
  require("@/Assets/gallery-images/gallery-image (28).jpeg"),
  require("@/Assets/gallery-images/gallery-image (29).jpeg"),
  require("@/Assets/gallery-images/gallery-image (30).jpeg"),
  require("@/Assets/gallery-images/gallery-image (31).jpeg"),
  require("@/Assets/gallery-images/gallery-image (32).jpg"),
  // require("@/Assets/gallery-images/gallery-image (33).jpeg"),
  // require("@/Assets/gallery-images/gallery-image (34).jpeg"),
  require("@/Assets/gallery-images/gallery-image (35).jpg"),
  require("@/Assets/gallery-images/gallery-image (37).jpeg"),
  // require("@/Assets/gallery-images/gallery-image (36).jpg")
  // require('@/Assets/gallery-images/gallery-image (2).jpeg'),
  //   require("@/Assets/gallery-images/gallery-image (7).jpeg"),
  // require('@/Assets/gallery-images/gallery-image (8).jpeg'),
  require("@/Assets/gallery-images/gallery-image (9).jpeg"),
  require("@/Assets/gallery-images/gallery-image (14).jpeg")
  // require('@/Assets/gallery-images/gallery-image (11).jpeg'),
  // require('@/Assets/gallery-images/gallery-image (12).jpeg'),
  // require('@/Assets/gallery-images/gallery-image (13).jpeg'),
  // require('@/Assets/gallery-images/gallery-image (15).jpeg'),
  // require('@/Assets/gallery-images/gallery-image (16).jpeg'),
  // require('@/Assets/gallery-images/gallery-image (17).jpeg'),
  // require('@/Assets/gallery-images/gallery-image (20).jpeg'),
  // require('@/Assets/gallery-images/gallery-image (21).jpeg'),
  // require('@/Assets/gallery-images/gallery-image (22).jpeg'),
  // require('@/Assets/gallery-images/gallery-image (23).jpeg'),
];

export default function CompanyGallery() {
  const [lightbox, setLightbox] = useState(null);

  const delay = [
    50, 150, 200, 0, 0, 100, 250, 100, 100, 50, 150, 200, 150, 200, 100, 0, 50,
    200, 150, 200, 100, 0, 50, 0, 100, 250, 100, 100, 50, 150, 200, 150, 200,
    100, 50
  ];

  return (
    <>
      <LayoutContainer bgColor="#fff">
        <div className="company-gallery">
          <h2 className="title" data-aos="fade-left" data-aos-duration="700">
            Gallery: Our Photos
          </h2>
          <p className="subtitle" data-aos="fade-left" data-aos-duration="700">
            Take a peek behind the scenes at Shiva Sai Solar — from our office
            life to field installations.
          </p>

          <img
            className="banner-image1"
            src={bannerImage1.src}
            alt=""
            data-aos="zoom-out-up"
            data-aos-duration="700"
          />
          <div className="image-grid">
            {images.map((img, index) => (
              <div
                key={index}
                className="img-card"
                onClick={() => setLightbox(img)}
                data-aos="zoom-out-up"
                data-aos-duration="700"
                data-aos-delay={delay[index]}
              >
                <Image
                  // src="@/Assets/gallery-images/gallery-image (1).jpeg"        // Step 2: use path
                  src={img}
                  alt="Profile"
                  width={300}
                  height={260}
                />
                {/* <img src={img.src} alt={img.caption} /> */}
                {/* <div className="caption">{img}</div> */}
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
