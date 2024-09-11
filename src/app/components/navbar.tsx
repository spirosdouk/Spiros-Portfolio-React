"use client";

import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company Logo"
            />
          </div>

          <div className="flex justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  aria-current="page"
                >
                  About
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Expirience
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Skills
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Hobbies
                </a>
              </div>
            </div>
          </div>

          <div className="flex-initial">
            <button className="text-white bg-blue-950 hover:bg-blue-950 font-medium py-2 px-4 rounded-lg">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
