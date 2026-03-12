"use client";

import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "../context/cartContext";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">FH</span>
              </div>
              <span className="text-xl font-bold text-gray-800">
                FreshHarvest <span className="text-green-700">Foods</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-green-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-gray-700 hover:text-green-700 transition-colors"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-700 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <a
              href="#contact"
              className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition-colors"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-gray-700 hover:text-green-700 transition-colors"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-700 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-700 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-green-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition-colors text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
