"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactFormSection: React.FC = () => {
  const [state, handleSubmit] = useForm("mblreqgq");

  if (state.succeeded) {
    return (
      <p className="text-center text-green-500">Thanks for your message!</p>
    );
  }

  return (
    <section
      id="contact"
      className="sm:hidden mx-auto max-w-7xl text-white flex flex-col lg:flex-row items-center justify-between px-4 lg:px-48 py-14 lg:py-24 space-y-8 lg:space-y-0"
    >
      <div className="max-w-lg w-full lg:w-1/2">
        <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6">
          Get in Touch
        </h2>
        <p className="text-gray-300 mb-8">
          If you'd like to discuss a project, a job oportunity or just want to
          say hi, feel free to drop me a message.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="block w-full p-2 mt-1 border border-gray-700 bg-gray-800 text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 mt-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="block w-full p-2 mt-1 border border-gray-700 bg-gray-800 text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              rows={4}
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-500 mt-2"
            />
          </div>

          <div className="flex items-center space-x-4">
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-white text-gray-900 rounded-full px-3 py-1.5 text-sm lg:px-6 lg:py-2 lg:text-base font-semibold hover:bg-gray-200 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
