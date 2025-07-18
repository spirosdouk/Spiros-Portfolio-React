"use client";

import React, { useState } from "react";

function ContactFormSection() {
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

  if (isSubmitted) {
    return (
      <section
        id="contact"
        className="lg:hidden mx-auto max-w-7xl text-primary flex flex-col lg:flex-row items-center justify-between px-4 lg:px-12 py-14 lg:py-24 space-y-8 lg:space-y-0"
      >
        <div className="max-w-lg w-full lg:w-1/2">
          <p className="text-center text-green-500 text-lg">
            Thanks for your message!
          </p>
        </div>
      </section>
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
            <label
              htmlFor="email"
              className="block text-sm font-medium text-light-secondary mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
              className="block w-full p-2 mt-1 border border-primary bg-dark-secondary text-primary rounded-md shadow-sm focus:ring-accent-blue focus:border-accent-blue"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-light-secondary mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              autoComplete="off"
              required
              className="block w-full p-2 mt-1 border border-primary bg-dark-secondary text-primary rounded-md shadow-sm focus:ring-accent-blue focus:border-accent-blue"
              rows={4}
            />
          </div>

          <div className="flex items-center space-x-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-gray-900 rounded-full px-3 py-1.5 text-sm lg:px-6 lg:py-2 lg:text-base font-semibold hover:bg-gray-200 transition duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactFormSection;
