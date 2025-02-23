import React from "react";

const ContactForm = () => {
  return (
    <section
      id="contact"
      className="bg-gray-50  py-32 px-6 flex flex-col items-center"
    >
      {/* Title & Subtext Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-6">CONTACT</h1>
        <p className="text-gray-600">
          Feel free to contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-2xl bg-white rounded-md shadow-md p-8">
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              className="w-full border border-gray-300 rounded px-3 py-2 
                                             focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-full border border-gray-300 rounded px-3 py-2 
                                             focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Enter Your Message"
              className="w-full border border-gray-300 rounded px-3 py-2 
                                             focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-32 bg-green-600 text-white py-2 rounded-md 
                                             hover:bg-green-700 transition-colors"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
