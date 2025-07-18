"use client";

import React, { useState } from "react";

interface ContactFormModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

function ContactFormModal({ isOpen, toggleModal }: ContactFormModalProps) {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mblreqgq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ email: "", message: "" });
        setTimeout(() => {
          toggleModal();
          setIsSubmitted(false);
        }, 2000);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-dark-primary bg-opacity-90 z-50 flex justify-center items-center">
      <div className="relative p-8 shadow-xl w-full max-w-xl rounded-lg bg-primary">
        <button
          type="button"
          onClick={toggleModal}
          className="absolute top-6 right-8 text-2xl text-light-secondary hover:text-primary transition duration-300 focus:outline-none"
        >
          &#x2715;
        </button>

        <h2 className="text-2xl font-bold text-primary mb-6">Contact Me</h2>

        {isSubmitted ? (
          <p className="text-green-500 text-center">Thanks for your message!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="modal-email"
                className="block text-sm font-medium text-light-secondary mb-1"
              >
                Email Address
              </label>
              <input
                id="modal-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className="block w-full p-2 mt-1  bg-dark-secondary text-primary rounded-md shadow-sm focus:ring-accent-blue focus:border-accent-blue"
              />
            </div>

            <div>
              <label
                htmlFor="modal-message"
                className="block text-sm font-medium text-light-secondary mb-1"
              >
                Message
              </label>
              <textarea
                id="modal-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                autoComplete="off"
                required
                className="block w-full p-2 mt-1  bg-dark-secondary text-primary rounded-md shadow-sm focus:ring-accent-blue focus:border-accent-blue"
                rows={4}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-gray-900 rounded-full px-3 py-1.5 text-sm lg:px-6 lg:py-2 lg:text-base font-semibold hover:bg-gray-200 transition duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactFormModal;
