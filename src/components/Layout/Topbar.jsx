import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-stone-100 to-gray-50 text-gray-700 text-sm border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        {/* Left - Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          {[TbBrandMeta, IoLogoInstagram, RiTwitterXLine].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="hover:text-black transform hover:scale-110 transition-all duration-300"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        {/* Center - Text */}
        <div className="text-center text-gray-600 tracking-wide animate-fadeIn">
          ✨ Free Shipping on Orders Over $100 — Worldwide ✈
        </div>

        {/* Right - Contact */}
        <div className="hidden md:block">
          <a
            href="tel:+919876543210"
            className="hover:text-black transition-all duration-300"
          >
            +91 98765 43210
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
