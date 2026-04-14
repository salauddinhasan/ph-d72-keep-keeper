import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { PiXLogoLight } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
          KeenKeeper
        </h1>

        <p className="max-w-xl mx-auto text-sm md:text-base text-gray-400 mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <p className="text-sm text-gray-500 mb-3">Social Links</p>

        <div className="flex justify-center gap-5 text-xl">
          <FaInstagram className="cursor-pointer hover:text-pink-500 transition duration-300" />
          <FaFacebook className="cursor-pointer hover:text-blue-500 transition duration-300" />
          <PiXLogoLight className="cursor-pointer hover:text-white transition duration-300" />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p className="text-gray-500 text-center md:text-left">
          &copy; 2026 KeenKeeper. All rights reserved.
        </p>

        <ul className="flex gap-5 text-gray-400">
          <li className="cursor-pointer hover:text-white transition">
            Privacy Policy
          </li>
          <li className="cursor-pointer hover:text-white transition">
            Terms of Service
          </li>
          <li className="cursor-pointer hover:text-white transition">
            Cookies
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
