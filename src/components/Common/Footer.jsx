import React from "react";
import { Link } from "react-router-dom";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Join Our Newsletter
          </h3>
          <p className="text-gray-400 mb-4 text-sm leading-relaxed">
            Stay updated on new arrivals, exclusive events, and special offers.
          </p>
          <form className="flex mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm bg-transparent border border-gray-700 rounded-l-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              type="submit"
              className="bg-white text-black px-5 py-3 text-sm font-medium rounded-r-md hover:bg-gray-200 transition-all"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">
            Get 10% off on your first order
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="collection/all?gender=Men" className="hover:text-white transition-colors">
                Men’s Top Wear
              </Link>
            </li>
            <li>
              <Link to="collection/all?gender=Women" className="hover:text-white transition-colors">
                Women’s Top Wear
              </Link>
            </li>
            <li>
              <Link to="collection/all?gender=Men" className="hover:text-white transition-colors">
                Men’s Bottom Wear
              </Link>
            </li>
            <li>
              <Link to="collection/all?gender=Women" className="hover:text-white transition-colors">
                Women’s Bottom Wear
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="#" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white transition-colors">
                Features
              </Link>
            </li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Connect With Us
          </h3>
          <div className="flex space-x-5 mb-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <TbBrandMeta className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <IoLogoInstagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <RiTwitterXLine className="h-5 w-5" />
            </a>
          </div>
          <div className="flex items-center text-sm text-gray-400">
            <FiPhoneCall className="mr-2 text-white" />
            9876543210
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © 2025 <span className="font-semibold text-white">QuickCart | Your Style, Our Passion</span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
