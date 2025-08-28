"use client";

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white pt-12 pb-3">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">
        
        {/* Logo & About */}
        <div>
          <Link href="/" className="text-2xl font-bold text-white">
            Vegi<span className="text-green-400">Export</span>
          </Link>
          <p className="mt-4 text-sm text-gray-300">
            Delivering fresh, high-quality vegetables worldwide with trust and care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/" className="hover:text-green-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-green-400">About</Link></li>
            {/* <li><Link href="/products" className="hover:text-green-400">Products</Link></li> */}
            <li><Link href="/contact" className="hover:text-green-400">Contact</Link></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Products</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/vegetables" className="hover:text-green-400">Vegetables</Link></li>
            <li><Link href="/spices" className="hover:text-green-400">Spices</Link></li>
            <li><Link href="/fruits" className="hover:text-green-400">Fruits</Link></li>
           
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300 text-sm">
            123 Export Lane, Green City, India
          </p>
          <p className="text-gray-300 text-sm mt-2">
            Email: <a href="mailto:info@vegiexport.com" className="hover:text-green-400">info@vegiexport.com</a>
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="p-2 bg-green-700 rounded-full hover:bg-green-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-green-700 rounded-full hover:bg-green-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-green-700 rounded-full hover:bg-green-500 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700 mt-10 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} VegiExport. All rights reserved.
      </div>
    </footer>
  );
}
