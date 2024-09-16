import React from "react";
import PreviewModal from "./previewModals";
import Image from "next/image";

const HeroSection: React.FC = () => {
  const documentUrl = "/assets/Resume-SpyrosDoukeris.pdf";

  return (
    <section id="about">
      <div className="mx-auto max-w-7xl text-white flex flex-col lg:flex-row items-center justify-between px-4 lg:px-48 py-24 space-y-8 lg:space-y-0">
        <div className="lg:hidden flex flex-col items-center w-full mb-8">
          <div className="w-56 h-56 bg-white rounded-full overflow-hidden relative">
            <Image
              src="/images/profile.png"
              alt="Spiros Doukeris"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="text-center mt-4">
            <div className="text-center mt-4">
              <h2 className="text-gray-200 text-xl lg:text-2xl font-semibold">
                Spiros Doukeris
              </h2>
              <h3 className="text-sm font-normal lg:text-xl mb-4 text-gray-400 dark:text-gray-500">
                Computer Science Under-Graduate
              </h3>
            </div>

            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/spyros-doukeris-856bb7288/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/LI-In-Bug.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  style={{ width: "auto", height: "auto" }}
                />
              </a>
              <a
                href="https://github.com/spirosdouk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/github-mark-white.svg"
                  alt="GitHub"
                  width={22}
                  height={22}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-lg">
          <h1 className="text-2xl lg:text-4xl font-bold leading-tight">
            Hey, I&apos;m an aspiring Front End Developer.
          </h1>
          <p className="mt-2 text-gray-300">
            I&apos;m Spiros, a student at the University of Crete with a passion
            for web development.
          </p>
          <div className="flex items-center space-x-4 mt-12">
            <button className="bg-white text-gray-900 rounded-full px-3 py-1.5 text-sm lg:px-6 lg:py-2 lg:text-base font-semibold hover:bg-gray-200 transition duration-300">
              <a
                href="/assets/Resume-SpyrosDoukeris.pdf"
                download="Resume-SpyrosDoukeris.pdf"
              >
                Download CV
              </a>
            </button>
            <div className="hidden lg:block">
              <PreviewModal document={documentUrl} />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col items-center">
          <div className="w-80 h-80 bg-white rounded-full overflow-hidden mb-4">
            <Image
              src="/images/profile.png"
              alt="Spiros Doukeris"
              width={320}
              height={320}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="text-center">
            <p className="text-white text-lg font-semibold">Spiros Doukeris</p>
            <h3 className="text-sm font-normal lg:text-lg mb-4 text-gray-400 dark:text-gray-500">
              Computer Science Under-Graduate
            </h3>
            <div className="flex justify-center space-x-4 mt-2">
              <a
                href="https://linkedin.com/in/spyros-doukeris-856bb7288"
                target="_blank"
              >
                <Image
                  src="/icons/LI-In-Bug.png"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  style={{ width: "auto", height: "auto" }}
                />
              </a>
              <a href="https://github.com/spirosdouk" target="_blank">
                <Image
                  src="/icons/github-mark-white.svg"
                  alt="GitHub"
                  width={28}
                  height={28}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
