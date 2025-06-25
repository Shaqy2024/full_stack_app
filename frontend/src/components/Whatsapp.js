import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsAppButton = () => {
  const phoneNumber = "7303909682"; // Replace with your number (with country code)
  const message = "Hello! I want to chat with you.";
  const encodedMessage = encodeURIComponent(message);


  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className=" text-blue px-4  ml-[50%] mb-72 "
    >
      
      
     <IoLogoWhatsapp className=" text-5xl  text-pink-500" />


    </button>
  );
};

export default WhatsAppButton;
