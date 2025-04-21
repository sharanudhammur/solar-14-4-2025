import { FaDownload } from "react-icons/fa";
import LayoutContainer from "@/components/LayoutContainer";
import Footer from "@/components/Footer";
import "./styles.scss";

import Brochure1 from "../../Assets/Brochure/Brochure1.png";
import Brochure2 from "../../Assets/Brochure/Brochure2.png";
import Brochure3 from "../../Assets/Brochure/Brochure3.png";
import Brochure4 from "../../Assets/Brochure/Brochure4.png";

export default function Brochure() {
  return (
    <div className="brochure-component" data-aos="fade-left" data-aos-duration="700">
      <LayoutContainer bgColor="">
        <h2 className="title">Download Our Company Brochure</h2>
        <p className="desc">
          Explore our detailed brochures to learn more about our services,
          quality standards, and product offerings. You can view them below and
          download the complete brochure PDF using the floating button.
        </p>

        <div className="brochure-wrapper">
          <img src={Brochure1.src} alt="Brochure Page 1" />
          <img src={Brochure2.src} alt="Brochure Page 2" />
          <img src={Brochure3.src} alt="Brochure Page 3" />
          <img src={Brochure4.src} alt="Brochure Page 4" />
        </div>
      </LayoutContainer>

      {/* Floating Download Button */}
      <a
        href="https://github.com/sharanudhammur/solar-14-4-2025/raw/refs/heads/main/Royal%20Dart%20Blzae%20Solar.pdf" // Ensure this is in your public folder
        download
        className="floating-download-button"
        title="Download Full Brochure PDF"
      >
        <FaDownload />
      </a>

      <Footer />
    </div>
  );
}
