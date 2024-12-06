import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

function Footer() {
  return (
    <footer className="bg-navy text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5 md:px-10">
        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <HiOutlineLocationMarker className="text-orange text-2xl mt-1" />
              <p className="ml-3 text-gray-300">
                <strong>Saddar Branch:</strong><br />
                Shop # 02-20, Techno City Mall,<br />
                II Chundrigar Road, Karachi, 74400.
              </p>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-orange text-xl" />
              <a href="tel:+923451234567" className="ml-3 text-orange hover:underline">
                +92 345 1234567
              </a>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-orange text-xl" />
              <a href="mailto:info@company.com" className="ml-3 text-orange hover:underline">
                info@company.com
              </a>
            </div>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-xl font-bold mb-4">Products</h3>
          <ul className="space-y-3">
            {["Apple", "Dell", "HP", "Lenovo"].map((product, index) => (
              <li key={index} className="group">
                <a href="#" className="flex items-center hover:text-orange">
                  <span className="w-2 h-2 bg-orange rounded-full group-hover:scale-125 transition-transform mr-2"></span>
                  {product}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="text-xl font-bold mb-4">Account</h3>
          <ul className="space-y-3">
            {["Sign Up", "My Account", "Shopping Cart", "Order History"].map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:text-orange">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="p-3 bg-orange text-white rounded-full hover:bg-orange/90 transform hover:scale-110 transition-transform duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mt-10"></div>

      {/* Bottom Section */}
      <div className="container mx-auto px-5 mt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        <a href="#" className="text-orange hover:text-orange/90">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}

export default Footer;
