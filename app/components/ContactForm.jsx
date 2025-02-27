"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState("success");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_z8kevx9", // Your EmailJS service ID
        "template_ooyb8oa", // Your EmailJS template ID
        e.target,
        "uOmVn1k4y7KTbVIex" // Your EmailJS public key
      )
      .then(
        (result) => {
          setFeedback("Message sent successfully!");
          setFeedbackType("success");
          setIsSubmitting(false);
          e.target.reset(); // Clear the form fields
        },
        (error) => {
          setFeedback(
            "There was an error sending your message. Please try again later."
          );
          setFeedbackType("error");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-zinc-50 py-32 px-6 flex flex-col items-center"
    >
      {/* Title & Subtext Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-6">CONTACT</h1>
        <p className="text-zinc-600">
          Feel free to contact me by submitting the form below and I will get
          back to you as soon as possible.
        </p>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-2xl bg-white rounded-md shadow-md p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label
              htmlFor="from_name"
              className="block text-sm font-medium text-zinc-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name" // <-- Must match EmailJS variable
              placeholder="Enter Your Name"
              className="w-full border border-zinc-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="reply_to"
              className="block text-sm font-medium text-zinc-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="reply_to"
              name="reply_to" // <-- Must match EmailJS variable
              placeholder="Enter Your Email"
              className="w-full border border-zinc-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-zinc-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message" // Keep this as "message" if your template uses {{message}}
              rows="5"
              placeholder="Enter Your Message"
              className="w-full border border-zinc-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-32 bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition-colors font-semibold"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>

        {/* Feedback Message */}
        {feedback && (
          <p
            className={`mt-4 text-center font-semibold ${
              feedbackType === "error" ? "text-red-600" : "text-green-600"
            }`}
          >
            {feedback}
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
