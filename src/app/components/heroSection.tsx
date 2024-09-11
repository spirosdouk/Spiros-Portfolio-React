import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="mx-auto max-w-5xl  text-white flex items-center justify-between px-10 py-28">
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold leading-tight">
          Hey, I'm an aspiring Front End Developer.
        </h1>
        <p className="mt-4 text-gray-300">
          I'm Spiros, a student at the University of Crete with a passion for
          web development. I am dedicated to learning modern web technologies
          and creating user-friendly web applications.
        </p>
        <button className="mt-8 bg-white text-gray-900 rounded-full px-6 py-2 font-semibold hover:bg-gray-200 transition duration-300">
          Download CV
        </button>
      </div>
      <div className="flex-1 flex justify-end">
        <div className="w-96 h-96 bg-white rounded-full overflow-hidden">
          <img
            src="/images/profile.png"
            alt="Vitax D. Dowson"
            className="object-cover object-center w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
