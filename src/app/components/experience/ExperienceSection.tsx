import React from "react";
import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section id="experience" className=" text-primary  px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-center lg:py-4 ">
          Experience
        </h2>
        <ol className="pt-12 relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-4 flex">
            <div className="flash-effect absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900" />
            <Image
              src="/images/logicea_logo.png"
              alt="Company Logo"
              width={48}
              height={48}
              className="w-12 h-12 mt-1 mr-4"
            />
            <div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-300">
                September 2024 - Currently
              </time>
              <h3 className="text-sm lg:text-lg font-semibold  dark:text-white">
                (FullTime) Front End Developer (React/React Native) at Logicea
              </h3>
              <p className="text-sm lg:text-base font-normal text-gray-500 dark:text-gray-400">
                Leading innovative projects with cutting-edge technologies.
              </p>
            </div>
          </li>
          <li className="mb-10 ml-4 flex">
            <div className="flash-effect absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900" />
            <Image
              src="/images/forth_logo.png"
              alt="Company Logo"
              width={48}
              height={48}
              className="w-12 h-12 mt-1 mr-4"
            />
            <div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-300">
                October 2024 - July 2025
              </time>
              <h3 className="text-sm lg:text-lg font-semibold  dark:text-white">
                (Scholarship) Undergraduate Scholar, Human-Computer Interaction
                (HCI) Lab
              </h3>
              <p className="text-sm lg:text-base font-normal text-gray-500 dark:text-gray-400">
                Participated in projects focused on enhancing user interaction
                with computing technologies, aligning with the institute’s
                strategic objectives.
              </p>
            </div>
          </li>
          <li className="mb-10 ml-4 flex">
            <div className="absolute w-3 h-3 dark:bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900" />
            <Image
              src="/images/logicea_logo.png"
              alt="Company Logo"
              width={48}
              height={48}
              className="w-12 h-12 mt-1 mr-4"
            />
            <div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-300">
                June 2024 - October 2024
              </time>
              <h3 className="text-sm lg:text-lg font-semibold  dark:text-white">
                (Internship) Front End Web Developer at Logicea
              </h3>
              <p className="text-sm lg:text-base font-normal text-gray-500 dark:text-gray-400">
                Leading innovative projects with cutting-edge technologies.
              </p>
            </div>
          </li>
          <li className="mb-10 ml-4 flex">
            <div className="absolute w-3 h-3 dark:bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900" />
            <Image
              src="/images/uoc_logo.png"
              alt="Company Logo"
              width={48}
              height={48}
              className="w-12 h-12 mt-1 mr-4"
            />
            <div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-300">
                September 2021 - September 2025
              </time>
              <h3 className="text-sm lg:text-lg font-semibold dark:text-white">
                (Bachelors Degree) University of Crete, Department of Computer
                Science
              </h3>
              <p className="text-sm lg:text-base font-normal text-gray-500 dark:text-gray-400">
                Focused on computing technology research and innovative project
                participation.
              </p>
            </div>
          </li>
          <li className="mb-10 ml-4 flex">
            <div className="absolute w-3 h-3 dark:bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900" />
            <Image
              src="/images/forth_logo.png"
              alt="Company Logo"
              width={48}
              height={48}
              className="w-12 h-12 mt-1 mr-4"
            />
            <div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-300">
                June 2023 - July 2023
              </time>
              <h3 className="text-sm lg:text-lg font-semibold  dark:text-white">
                (Summer Internship) Summer Internship utilizing RDMA networks in
                Key-Value Data Store Systems
              </h3>
              <p className="text-sm lg:text-base font-normal text-gray-500 dark:text-gray-400">
                Engaged in key-value data storage optimization techniques
                through RDMA network technology.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
