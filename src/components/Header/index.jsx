"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SideDrawer from "../SideDrawer";
import Link from "next/link";
import { Button } from "primereact/button";
import "./styles.scss";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with desired duration
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <img
          style={{ height: "45px", width: "45px" }}
          src="https://coffeeweb.s3.amazonaws.com/uyz2o1kb.4gu-image-(36).png"
        />
        Royal Dart Blaze
      </div>

      <div className="header-web">
        <div>
          <div className="menu-items">
            <Link href="/" passHref>
              <span className={pathname === "/" ? "activeLink" : ""}>Home</span>
            </Link>

            <Link href="/products" passHref>
              <span className={pathname === "/products" ? "activeLink" : ""}>
                Products
              </span>
            </Link>

            <Link href="/about" passHref>
              <span className={pathname === "/about" ? "activeLink" : ""}>
                About Us
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
