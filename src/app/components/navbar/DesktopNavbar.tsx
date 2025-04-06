"use client";

import React, { useState } from "react";
import Logo from "../shared/logo";
import ContactFormModal from "../contactMeDesktop";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const navLinks = ["about", "experience", "projects", "courses"];

  return (
    <nav
      className="hidden lg:block fixed top-0 left-0 w-full z-50 bg-black shadow-lg"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <Logo />
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <div className="flex space-x-4">
              {navLinks.map((link) => (
                <a
                  href={`#${link}`}
                  key={link}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              ))}
            </div>
          </div>

          <div className="flex-initial">
            <button
              onClick={toggleModal}
              className="text-white bg-blue-950 hover:bg-blue-950 font-medium py-2 px-4 rounded-lg"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ContactFormModal isOpen={isModalOpen} toggleModal={toggleModal} />
      )}
    </nav>
  );
};

export default Navbar;
