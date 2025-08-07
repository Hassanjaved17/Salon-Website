import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";




const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 text-sm ">
      {/* Top Row: Logo and Social Icons */}
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto px-6 py-6">
        <img src="./Dictate-logo-new.svg" alt="logo" className="h-14" />
        <div className="flex gap-3 mt-4 sm:mt-0">
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-white text-lg p-3 rounded-full cursor-pointer bg-[#3B5998] hover:bg-[#4E69A2] transition-transform duration-300 hover:scale-110 active:scale-110"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-white text-lg p-3 rounded-full cursor-pointer bg-[#33AAF3] hover:bg-[#1d9bf0] transition-transform duration-300 hover:scale-110 active:scale-110"
          />
          <FontAwesomeIcon
            icon={faPinterest}
            className="text-white text-lg p-3 rounded-full cursor-pointer bg-[#BD081C] hover:bg-[#8c0615] transition-transform duration-300 hover:scale-110 active:scale-110"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-white text-lg p-3 rounded-full cursor-pointer bg-[#1984BC] hover:bg-[#0a66c2] transition-transform duration-300 hover:scale-110 active:scale-110"
          />
        </div>


      </div>

      {/* Middle Grid: About, Contact, Hours */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#DDDAD0] border-y border-[#DDDAD0]">
        {/* About Us */}
        <div className="sm:pr-8 pb-8 sm:pb-0">
          <p className="text-lg font-bold mb-4 text-black">About Us</p>
          <p className="leading-relaxed text-gray-600">
            Lorem ipsum dolor sit amet, consecte tuer.auctor aliquet. Aenean sollicitudi,
            lorem quis bibendum auctor. Lorem lie ipsum dolor sit amet, consecte unlieu
            tuer.auctor aliquet.
          </p>
        </div>

        {/* Contact Us */}
        <div className="sm:px-8 py-8 sm:py-0">
          <p className="text-lg font-bold mb-4 text-black">Contact Us</p>
          <div className="flex items-start gap-3 mb-3">
            <span className="bg-[#DFF6F8] text-black p-2 rounded-full">
              <FaLocationDot />
            </span>
            <p className="text-gray-700">
              Parkway, Solent Business Park, Whiteley, Hants, PO15 7AN
            </p>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-[#DFF6F8] text-black p-2 rounded-full">
              <FaEnvelope />
            </span>
            <p>support@webinane.com</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-[#DFF6F8] text-black p-2 rounded-full">
              <FaMobile />
            </span>
            <p>+1 9175610778</p>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="sm:pl-8 pt-8 sm:pt-0">
          <p className="text-lg font-bold mb-4 text-black">Opening Hours</p>
          <div className="flex justify-between text-gray-700 mb-2">
            <p>Monday - Wednesday:</p>
            <p className="font-bold">11am - 7pm</p>
          </div>
          <div className="flex justify-between text-gray-700 mb-2">
            <p>Thursday - Saturday:</p>
            <p className="font-bold">11am - 8pm</p>
          </div>
          <div className="flex justify-between text-gray-700 mb-2">
            <p>Sunday:</p>
            <p className="font-bold">11.30am - 6pm</p>
          </div>
          <p className="mt-3 text-[#F6526D] text-center sm:text-left underline text-sm font-semibold cursor-pointer">
            Book Appointment
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-sm text-black py-4">
        Copyright © 2025, <span className="font-medium text-black">Dictate</span>{" "}
        Powered by <span className="font-medium text-black">Webinane</span>.
      </div>
    </footer>
  );
};

export default Footer;
