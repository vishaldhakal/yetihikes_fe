"use client";
"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (submenu) => {
    setOpenSubmenu(openSubmenu === submenu ? null : submenu);
  };

  return (
    <header className="sticky top-0 z-[99999] transition-all duration-300 bg-white group/nav focus-within:bg-white focus-within:shadow-md">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex" onClick={closeMenu}>
              <img
                className="w-[200px] h-auto"
                src="/logo.svg"
                alt="Nepal Trek"
              />
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-8">
            <nav className="flex items-center space-x-8">
              <Link
                href="/"
                className="text-base font-semibold text-black hover:text-green-600 transition-colors duration-300"
              >
                Home
              </Link>

              <div className="relative group">
                <Link
                  href="/"
                  className="flex items-center text-base font-semibold text-black hover:text-green-600 cursor-pointer transition-colors duration-300"
                >
                  Nepal
                  <ChevronDown className="ml-1 w-4 h-4" />
                </Link>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-1">
                    <span className="block px-4 py-2 text-sm font-semibold text-gray-700">
                      Travel Categories
                    </span>
                    <Link
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Trekking
                    </Link>
                    <Link
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Climbing
                    </Link>
                    <Link
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Tours
                    </Link>
                  </div>
                  <div className="py-1 border-t border-gray-200">
                    <span className="block px-4 py-2 text-sm font-semibold text-gray-700">
                      Packages
                    </span>
                    <Link
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Everest Base Camp
                    </Link>
                    <Link
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Annapurna Circuit
                    </Link>
                    <Link
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Langtang Valley
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <Link
                  href="/"
                  className="flex items-center text-base font-semibold text-black hover:text-green-600 cursor-pointer transition-colors duration-300"
                >
                  Trekking Regions
                  <ChevronDown className="ml-1 w-4 h-4" />
                </Link>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Manaslu Region
                  </Link>
                  <Link
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Everest Region
                  </Link>
                  <Link
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Annapurna Region
                  </Link>
                  <Link
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Langtang Region
                  </Link>
                </div>
              </div>

              <div className="relative group">
                <Link
                  href="/"
                  className="flex items-center text-base font-semibold text-black hover:text-green-600 cursor-pointer transition-colors duration-300"
                >
                  About
                  <ChevronDown className="ml-1 w-4 h-4" />
                </Link>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Our Company
                  </Link>
                  <Link
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Testimonials
                  </Link>
                </div>
              </div>

              <Link
                href="/"
                className="text-base font-semibold text-black hover:text-green-600 transition-colors duration-300"
              >
                Blog
              </Link>

              <Link
                href="/"
                className="text-base font-semibold text-black hover:text-green-600 transition-colors duration-300"
              >
                Contact
              </Link>
            </nav>

            <Link
              href="/"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <nav
        className={`lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        } transition-all duration-300 ease-in-out bg-white`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={closeMenu}
          >
            Home
          </Link>

          <div className="relative">
            <button
              className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => toggleSubmenu("nepal")}
            >
              Nepal
              {openSubmenu === "nepal" ? (
                <ChevronUp className="ml-1 w-4 h-4" />
              ) : (
                <ChevronDown className="ml-1 w-4 h-4" />
              )}
            </button>
            {openSubmenu === "nepal" && (
              <div className="pl-4 mt-2 space-y-2">
                <span className="block px-3 py-2 text-sm font-semibold text-gray-700">
                  Travel Categories
                </span>
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  Trekking
                </Link>
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  Climbing
                </Link>
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  Tours
                </Link>
                <span className="block px-3 py-2 text-sm font-semibold text-gray-700">
                  Packages
                </span>
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  Everest Base Camp
                </Link>
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  Annapurna Circuit
                </Link>
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  Langtang Valley
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => toggleSubmenu("trekking-regions")}
            >
              Trekking Regions
              {openSubmenu === "trekking-regions" ? (
                <ChevronUp className="ml-1 w-4 h-4" />
              ) : (
                <ChevronDown className="ml-1 w-4 h-4" />
              )}
            </button>
            {openSubmenu === "trekking-regions" && (
              <div className="pl-4 mt-2 space-y-2">
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  Manaslu Region
                </Link>
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  Everest Region
                </Link>
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  Annapurna Region
                </Link>
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  Langtang Region
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => toggleSubmenu("about")}
            >
              About
              {openSubmenu === "about" ? (
                <ChevronUp className="ml-1 w-4 h-4" />
              ) : (
                <ChevronDown className="ml-1 w-4 h-4" />
              )}
            </button>
            {openSubmenu === "about" && (
              <div className="pl-4 mt-2 space-y-2">
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  Our Company
                </Link>
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  Our Team
                </Link>
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  Testimonials
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={closeMenu}
          >
            Blog
          </Link>

          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={closeMenu}
          >
            Contact
          </Link>

          <div className="px-3 py-2">
            <span className="block text-base font-medium text-gray-700">
              Follow Us:
            </span>
            <div className="flex space-x-4 mt-2">
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-600"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-400"
              >
                <Twitter className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-green-600 hover:bg-green-700"
            onClick={closeMenu}
          >
            Book Now
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
