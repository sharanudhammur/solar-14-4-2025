"use client";

import { RiArrowRightLine } from "react-icons/ri";
import { Button } from "primereact/button";

export default function GetStartedButton() {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight - 120, // You can adjust the scroll distance
      behavior: "smooth"
    });
  };

  return (
    <Button
      style={{
        marginTop: "30px",
        backgroundColor: "#fecc30",
        color: "black",
        fontWeight: 500
      }}
      onClick={handleScroll}
    >
      Get started <RiArrowRightLine style={{ marginLeft: "8px" }} />
    </Button>
  );
}
