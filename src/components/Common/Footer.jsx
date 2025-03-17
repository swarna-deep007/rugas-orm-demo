import React from "react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaInfinity } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-to-t from-gray-200 to-white border-t">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg text-gray-800 font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-500 text-sm mb-2">
            Be the first to hear about new products, exclusive events, and
            online offers.
          </p>
          <p className="text-gray-600 text-sm font-medium mb-6">
            Sign up and get 10% off your first order.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg text-gray-800 font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            {["Men's Top Wear", "Women's Top Wear", "Men's Bottom Wear", "Women's Bottom Wear"].map((item, index) => (
              <li key={index}>
                <Link to="#" className="hover:text-gray-500 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg text-gray-800 font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            {["Contact Us", "About Us", "FAQs", "Features"].map((item, index) => (
              <li key={index}>
                <Link to="#" className="hover:text-gray-500 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us & Contact */}
        <div>
          <h3 className="text-lg text-gray-800 font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 text-gray-700 mb-4">
            <FaInfinity className="h-5 w-5" />
            <FaInstagram className="h-5 w-5" />
            <FaXTwitter className="h-5 w-5" />
          </div>
          <h3 className="text-lg text-gray-800 font-semibold mb-2">Call Us</h3>
          <div className="flex items-center space-x-2 text-gray-700 font-semibold">
            <IoCall className="h-5 w-5" />
            <span className="font-bold text-lg">0123-456-789</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-300 pt-6">
        <p className="text-gray-500 text-sm text-center tracking-tight">
          © 2025, CompileTab. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
