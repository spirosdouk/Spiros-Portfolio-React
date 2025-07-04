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
      className="lg:hidden mx-auto max-w-7xl text-primary flex flex-col lg:flex-row items-center justify-between px-4 lg:px-12 py-14 lg:py-24 space-y-8 lg:space-y-0"
    >
      <div className="max-w-lg w-full lg:w-1/2">
        <h2 className="text-2xl lg:text-4xl font-bold text-primary mb-6">
          Get in Touch
        </h2>
        <p className="text-gray-300 mb-8">
          If you&apos;d like to discuss a project, a job opportunity, or just
          want to say hi, feel free to drop me a message.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-light-secondary mb-1">
              Email Address
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="on"
                required
                className="block w-full p-2 mt-1 border border-primary bg-dark-secondary text-primary rounded-md shadow-sm focus:ring-accent-blue focus:border-accent-blue"
              />
            </label>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 mt-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-light-secondary mb-1">
              Message
              <textarea
                id="message"
                name="message"
                autoComplete="on"
                required
                className="block w-full p-2 mt-1 border border-primary bg-dark-secondary text-primary rounded-md shadow-sm focus:ring-accent-blue focus:border-accent-blue"
                rows={4}
              ></textarea>
            </label>
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
