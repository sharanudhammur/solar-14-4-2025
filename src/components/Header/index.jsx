"use client";

import { redirect, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SideDrawer from "../SideDrawer";
import Link from "next/link";
import { Button } from "primereact/button";
import "./styles.scss";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import mainLogo from "../../Assets/Images/main-logo.png"; // Step 1: import path

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with desired duration
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <img className="logo-image" src={mainLogo.src} onClick={() => redirect("/")} />
        {/* Royal Dart Blaze */}
      </div>

      <div className="header-web">
        <div>
          <div className="menu-items">
            <Link href="/" passHref>
              <span className={pathname === "/" ? "activeLink" : ""}>Home</span>
            </Link>

            <Link href="/about" passHref>
              <span className={pathname === "/about" ? "activeLink" : ""}>
                About
              </span>
            </Link>

            <Link href="/products" passHref>
              <span className={pathname === "/products" ? "activeLink" : ""}>
                Products
              </span>
            </Link>

            <Link href="/services" passHref>
              <span className={pathname === "/services" ? "activeLink" : ""}>
                Services
              </span>
            </Link>

            <Link href="/brochure" passHref>
              <span className={pathname === "/brochure" ? "activeLink" : ""}>
                Brochure
              </span>
            </Link>

            <Link href="/gallery" passHref>
              <span className={pathname === "/gallery" ? "activeLink" : ""}>
                Gallery
              </span>
            </Link>

            <Link href="/contact" passHref>
              <span className={pathname === "/contact" ? "activeLink" : ""}>
                Contact
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="header-mobile">
        <Button icon="pi pi-bars" onClick={openDrawer} />
      </div>

      <SideDrawer isOpen={isOpen} onClose={closeDrawer} />
    </header>
  );
}
