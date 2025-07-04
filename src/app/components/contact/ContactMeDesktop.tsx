"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

interface ContactFormModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({
  isOpen,
  toggleModal,
}) => {
  const [state, handleSubmit] = useForm("mblreqgq");

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-dark-primary bg-opacity-90 z-50 flex justify-center items-center">
      <div className="relative p-8 shadow-xl w-full max-w-xl rounded-lg bg-primary">
        <button
          onClick={toggleModal}
          className="absolute top-6 right-8 text-2xl text-light-secondary hover:text-primary transition duration-300 focus:outline-none"
        >
          &#x2715;
        </button>

        <h2 className="text-2xl font-bold text-primary mb-6">Contact Me</h2>

        {state.succeeded ? (
          <p className="text-green-500">Thanks for your message!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-light-secondary mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                required
                className="block w-full p-2 mt-1 border border-primary bg-dark-secondary text-primary rounded-md shadow-sm focus:ring-accent-blue focus:border-accent-blue"
              />
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
              </label>
              <textarea
                id="message"
                name="message"
                autoComplete="on"
                required
                className="block w-full p-2 mt-1 border border-primary bg-dark-secondary text-primary rounded-md shadow-sm focus:ring-accent-blue focus:border-accent-blue"
                rows={4}
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 mt-2"
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-white text-gray-900 rounded-full px-3 py-1.5 text-sm lg:px-6 lg:py-2 lg:text-base font-semibold hover:bg-gray-200 transition duration-300"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactFormModal;
