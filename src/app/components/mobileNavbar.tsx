"use client";

import React, { useState } from "react";
import Image from "next/image";

const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="fixed lg:hidden top-0 left-0 w-full z-50 bg-black shadow-lg"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="relative flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <Image
            src="/images/logosign.png"
            alt="Your Company Logo"
            width={192}
            height={48}
            className="h-12 w-auto"
            quality={100}
            priority
          />
        </div>

        <button
          onClick={toggleMenu}
          className="text-gray-400 hover:text-white focus:outline-none mr-10"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 6h18M3 12h18m-18 6h18"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute top-full left-0 w-full z-50 shadow-lg"
          style={{ backgroundColor: "var(--background)" }}
        >
          <div className="px-4 py-2 space-y-1">
            <a
              href="#about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#experience"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={toggleMenu}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#courses"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={toggleMenu}
            >
              Courses
            </a>
            <a
              href="#contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={toggleMenu}
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
