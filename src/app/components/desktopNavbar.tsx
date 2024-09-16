"use client";
import React, { useState } from "react";
import ContactFormModal from "./contactMeDesktop";
const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav
      className="hidden sm:block fixed top-0 left-0 w-full z-50 bg-black shadow-lg"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              className="h-12 w-auto"
              src="images/logosign.png"
              alt="Your Company Logo"
            />
          </div>

          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <div className="flex space-x-4">
              <a
                href="#about"
                className="rounded-md  px-3 py-2 text-sm font-medium text-gray-300"
              >
                About
              </a>
              <a
                href="#experience"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300"
              >
                Projects
              </a>
              <a
                href="#courses"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300"
              >
                Courses
              </a>
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
