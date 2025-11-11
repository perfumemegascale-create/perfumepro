import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
   <>
      <a
        href="https://wa.me/918850011652" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-gradient-to-br from-[#8c6226] via-[#70470d] to-[#3e2505] text-white p-4 rounded-full shadow-lg hover:scale-105 hover: transition-all duration-300 z-50 glow-effect"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Inline style tag for glow animation */}
      <style>
        {`
          @keyframes glow {
            0% {
              box-shadow: 0 0 0px rgb(112, 71, 13);
            }
            50% {
              box-shadow: 0 0 20px 8px rgb(112, 71, 13);
            }
            100% {
              box-shadow: 0 0 0px rgb(112, 71, 13);
            }
          }

          .glow-effect {
            animation: glow 1.8s infinite ease-in-out;
          }
        `}
      </style>
    </>
  );
};

export default WhatsAppButton;