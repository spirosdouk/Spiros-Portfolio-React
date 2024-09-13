import React from "react";

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className=" text-white  px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center py-4">Experience</h2>{" "}
        <ol className="pt-12 relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-4 flex">
            <div className="absolute w-3 h-3 bg-indigo-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
            <img
              src="/images/logicea_logo.png"
              alt="Company Logo"
              className="w-12 h-12 mt-1 mr-4"
            />
            <div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                June 2024 - October 2024
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                (Internship) Front End Web Developer at Logicea
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Leading innovative projects with cutting-edge technologies.
              </p>
            </div>
          </li>{" "}
          <li className="mb-10 ml-4 flex">
            <div className="absolute w-3 h-3 dark:bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
            <img
              src="/images/uoc_logo.png"
              alt="Company Logo"
              className="w-12 h-12 mt-1 mr-4"
            />
            <div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                September 2021 - September 2025
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                (Bachelors Degree) University of Crete, Department of Computer
                Science
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Leading innovative projects with cutting-edge technologies.
              </p>
            </div>
          </li>
          <li className="mb-10 ml-4 flex">
            <div className="absolute w-3 h-3 dark:bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
            <img
              src="/images/forth_logo.png"
              alt="Company Logo"
              className="w-12 h-12 mt-1 mr-4"
            />
            <div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                June 2023 - July 2023
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                (Summer Internship) χρήση δικτυών RDMA σε σύστημα Δεδομένων
                Key_Values Stores
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Leading innovative projects with cutting-edge technologies.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;
