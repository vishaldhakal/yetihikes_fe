"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
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
    <header className="sticky top-0 z-[99999] transition-all duration-300 bg-gradient-to-b to-blue-50 from-blue-100 group/nav focus-within:bg-white focus-within:shadow-md">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex" onClick={closeMenu}>
              <img className="w-24 h-auto" src="/logo.png" alt="iCommission" />
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-8">
            <nav className="flex items-center space-x-8">
              <Link
                href="/"
                className="text-base font-semibold text-black hover:text-blue-600 transition-colors duration-300"
              >
                Home
              </Link>

              <div className="relative group">
                <Link
                  href="/how-it-works"
                  className="flex items-center text-base font-semibold text-black hover:text-blue-600 cursor-pointer transition-colors duration-300"
                >
                  How it Works
                  <ChevronDown className="ml-1 w-4 h-4" />
                </Link>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link
                    href="/how-it-works#overview"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Overview
                  </Link>
                  <Link
                    href="/how-it-works#advance-types"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Advance Types
                  </Link>
                  <Link
                    href="/how-it-works#cost-calculator"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Cost Calculator
                  </Link>
                  <Link
                    href="/how-it-works#application-process"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Application Process
                  </Link>
                  <Link
                    href="/how-it-works#faq"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    FAQ
                  </Link>
                </div>
              </div>

              <div className="relative group">
                <Link
                  href="/company"
                  className="flex items-center text-base font-semibold text-black hover:text-blue-600 cursor-pointer transition-colors duration-300"
                >
                  Company
                  <ChevronDown className="ml-1 w-4 h-4" />
                </Link>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link
                    href="/company#about"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    About
                  </Link>
                  <Link
                    href="/company#reviews"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Reviews
                  </Link>
                  <div className="relative group/social">
                    <span className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">
                      Follow Us
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </span>
                    <div className="absolute left-full top-0 mt-0 w-48 rounded-md shadow-lg bg-white opacity-0 invisible group-hover/social:opacity-100 group-hover/social:visible transition-all duration-300">
                      <Link
                        href="https://www.linkedin.com/company/icommission/?viewAsMember=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                      </Link>
                      <Link
                        href="https://www.instagram.com/icommission_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <Instagram className="w-4 h-4 mr-2" /> Instagram
                      </Link>
                      <Link
                        href="https://x.com/iCommission_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <Twitter className="w-4 h-4 mr-2" /> X
                      </Link>
                      <Link
                        href="https://www.facebook.com/profile.php?id=61563112392385"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <Facebook className="w-4 h-4 mr-2" /> Facebook
                      </Link>
                      <Link
                        href="https://www.youtube.com/channel/UC3NQSXJzHVqSXuSo3lH9idQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <Youtube className="w-4 h-4 mr-2" /> YouTube
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <Link
                  href="/resources"
                  className="flex items-center text-base font-semibold text-black hover:text-blue-600 cursor-pointer transition-colors duration-300"
                >
                  Resources
                  <ChevronDown className="ml-1 w-4 h-4" />
                </Link>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link
                    href="/resources#blog"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/resources#partner"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Partner with iCommission
                  </Link>
                  <Link
                    href="/resources#free-download"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Free Download
                  </Link>
                </div>
              </div>
            </nav>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Apply Now
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
        <div className="px-2 pt-2 pb-3 space-y-3 sm:px-3">
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
              onClick={() => toggleSubmenu("howItWorks")}
            >
              How it Works
              {openSubmenu === "howItWorks" ? (
                <ChevronUp className="ml-1 w-4 h-4" />
              ) : (
                <ChevronDown className="ml-1 w-4 h-4" />
              )}
            </button>
            {openSubmenu === "howItWorks" && (
              <div className="pl-4 mt-2 space-y-2">
                <Link
                  href="/how-it-works#overview"
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  Overview
                </Link>
                <Link
                  href="/how-it-works#advance-types"
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  Advance Types
                </Link>
                <Link
                  href="/how-it-works#cost-calculator"
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  Cost Calculator
                </Link>
                <Link
                  href="/how-it-works#application-process"
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  Application Process
                </Link>
                <Link
                  href="/how-it-works#faq"
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  FAQ
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => toggleSubmenu("company")}
            >
              Company
              {openSubmenu === "company" ? (
                <ChevronUp className="ml-1 w-4 h-4" />
              ) : (
                <ChevronDown className="ml-1 w-4 h-4" />
              )}
            </button>
            {openSubmenu === "company" && (
              <div className="pl-4 mt-2 space-y-2">
                <Link
                  href="/company#about"
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  About
                </Link>
                <Link
                  href="/company#reviews"
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  Reviews
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => toggleSubmenu("resources")}
            >
              Resources
              {openSubmenu === "resources" ? (
                <ChevronUp className="ml-1 w-4 h-4" />
              ) : (
                <ChevronDown className="ml-1 w-4 h-4" />
              )}
            </button>
            {openSubmenu === "resources" && (
              <div className="pl-4 mt-2 space-y-2">
                <Link
                  href="/resources#blog"
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  Blog
                </Link>
                <Link
                  href="/resources#partner"
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  Partner with iCommission
                </Link>
                <Link
                  href="/resources#free-download"
                  className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  Free Download
                </Link>
              </div>
            )}
          </div>

          <div className="px-3 py-2">
            <span className="block text-base font-medium text-gray-700">
              Follow Us:
            </span>
            <div className="flex space-x-4 mt-2">
              <Link
                href="https://www.linkedin.com/company/icommission/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.instagram.com/icommission_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-600"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="https://x.com/iCommission_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-400"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61563112392385"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-800"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UC3NQSXJzHVqSXuSo3lH9idQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-red-600"
              >
                <Youtube className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <Link
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            onClick={closeMenu}
          >
            Apply Now
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
