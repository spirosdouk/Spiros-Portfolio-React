import React from "react";
import Image from "next/image";

const CoursesSection: React.FC = () => {
  return (
    <section id="courses" className="text-white px-4 lg:px-12 pt-14 lg:pt-18">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-center lg:py-4 ">
          Courses
        </h2>
        <ol className="pt-12 relative border-l border-gray-200 dark:border-gray-700 ">
          <li className="mb-10 ml-4 flex">
            <div className="absolute w-3 h-3 bg-indigo-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
            <Image
              src="/images/codewithmosh_logo.png"
              alt="Company Logo"
              width={48}
              height={48}
              className="w-12 h-12 mt-1 mr-4"
            />
            <div>
              <p className="text-sm font-normal text-gray-400 dark:text-gray-500">
                Code With Mosh
              </p>
              <h3 className="text-sm lg:text-lg font-semibold text-gray-900 dark:text-white">
                Clean Coding and Refactoring
              </h3>
            </div>
          </li>
          <li className="mb-10 ml-4 flex">
            <div className="absolute w-3 h-3 dark:bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
            <Image
              src="/images/codewithmosh_logo.png"
              alt="Company Logo"
              width={48}
              height={48}
              className="w-12 h-12 mt-1 mr-4"
            />
            <div>
              <p className="text-sm font-normal text-gray-400 dark:text-gray-500">
                Code With Mosh
              </p>
              <h3 className="text-sm lg:text-lg font-semibold text-gray-900 dark:text-white">
                React 18: for Beginners
              </h3>
            </div>
          </li>
          <li className="mb-10 ml-4 flex">
            <div className="absolute w-3 h-3 dark:bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
            <Image
              src="/images/codewithmosh_logo.png"
              alt="Company Logo"
              width={48}
              height={48}
              className="w-12 h-12 mt-1 mr-4"
            />
            <div>
              <p className="text-sm font-normal text-gray-400 dark:text-gray-500">
                Code With Mosh
              </p>
              <h3 className="text-sm lg:text-lg font-semibold text-gray-900 dark:text-white">
                React 18: Intermediate Topics
              </h3>
            </div>
          </li>
          <li className="mb-10 ml-4 flex">
            <div className="absolute w-3 h-3 dark:bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
            <div className="flex items-center">
              <div className="w-12 h-12  rounded-full flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.364 5.636l-12.728 12.728m12.728 0l-12.728-12.728"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-normal text-gray-400 dark:text-gray-500">
                  Udemy
                </p>
                <h3 className="text-sm lg:text-lg font-semibold text-gray-900 dark:text-white">
                  Javascript Essentials
                </h3>
              </div>
            </div>
          </li>
          <li className="mb-10 ml-4 flex">
            <div className="absolute w-3 h-3 dark:bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
            <Image
              src="/images/codewithmosh_logo.png"
              alt="Company Logo"
              width={48}
              height={48}
              className="w-12 h-12 mt-1 mr-4"
            />
            <div>
              <p className="text-sm font-normal text-gray-400 dark:text-gray-500">
                Code With Mosh
              </p>
              <h3 className="text-sm lg:text-lg font-semibold text-gray-900 dark:text-white">
                The Ultimate Git Course
              </h3>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default CoursesSection;
