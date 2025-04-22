
import LayoutContainer from "@/components/LayoutContainer";
import "./styles.scss";
import ServicesImageForWeb from '@/Assets/Images/ServicesImageForWeb.png'
import ServicesImageForMobile from '@/Assets/Images/ServicesImageForMobile.png'
import { IoSettingsOutline } from "react-icons/io5";
import { GiAutoRepair } from "react-icons/gi";
import { TbReplace } from "react-icons/tb";
import Footer from "@/components/Footer";

import { getMetaInfo } from "@/utils/metaInfo";

export const metadata = getMetaInfo("Services")

export default function Services() {


    return (
        <div className="services-component" data-aos="fade-left"
            data-aos-duration="700">
            <img
                className="service-image-for-web"
                src={ServicesImageForWeb.src}        // Step 2: use path
                alt="Profile"
            />
            <img
                className="service-image-for-mobile"
                src={ServicesImageForMobile.src}        // Step 2: use path
                alt="Profile"
            />

            <LayoutContainer>
                <div>
                    <div className="title">
                        Our Services
                    </div>
                    <div className="desc">
                        We provide end-to-end solar energy solutions tailored to your needs — from system design and installation to maintenance and performance monitoring. Whether it's residential, commercial, or industrial, our expert team ensures a smooth transition to clean, cost-effective solar power.
                    </div>
                </div>

                <section className="service-section">
                    <div
                        className="service"
                        // data-aos="fade-up"
                        data-aos="zoom-in"

                    >
                        <IoSettingsOutline className="service-icon" />
                        <h2>Installation</h2>
                        <p className="desc">
                            Our expert installation services ensure a hassle-free setup, tailored to meet your specific needs.
                        </p>
                    </div>
                    <div
                        className="service"
                        // data-aos="fade-up"
                        data-aos="zoom-in"

                    >
                        <GiAutoRepair className="service-icon" />
                        <h2>Repair</h2>
                        <p className="desc">
                            We provide reliable repair services across India, ensuring your equipment operates smoothly and efficiently.
                        </p>
                    </div>
                    <div
                        className="service"
                        // data-aos="fade-up"
                        data-aos="zoom-in"

                    >
                        <TbReplace className="service-icon" />
                        <h2>Replacement</h2>
                        <p className="desc">
                            Our seamless replacement solutions guarantee minimal downtime, keeping your operations running without interruption.
                        </p>
                    </div>
                </section>
            </LayoutContainer>
            <Footer />
        </div>
    );
}
