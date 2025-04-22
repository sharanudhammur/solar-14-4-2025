"use client";
import "./styles.scss";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingChatButton() {
    const openWhatsApp = () => {
        window.open("https://wa.me/919535140581", "_blank");
    };

    return (
        <div>
            {/* Your existing content */}

            {/* Floating WhatsApp Button */}
            <button className="floating-chat-button" onClick={openWhatsApp}>
                <FaWhatsapp size={28} />
            </button>
        </div>
    );
}
