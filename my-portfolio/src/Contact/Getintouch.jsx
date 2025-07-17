import React, { useState } from "react";
import emailjs from "emailjs-com";

const Getintouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = "service_0boquxm";
  const TEMPLATE_ID = "template_ot5j1hk";
  const USER_ID = "lfuqmbZoU3Pb_dZQT";

  const handlesubbmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        alert("Message sent successfully");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("An error occurred. Please try again later.");
      });
  };

  return (
    <div className="min-h-screen   flex items-center justify-center px-4 py-10">
      <div
        className="w-full max-w-md sm:max-w-lg md:max-w-xl hover:shadow-emerald-500 shadow-2xl bg-blue-900 rounded-xl  p-6"
        id="contact"
      >
        <h1 className="text-white text-3xl font-bold text-center mb-6">
          Get in Touch
        </h1>

        <form
          onSubmit={handlesubbmit}
          className="flex flex-col gap-4 text-white"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="bg-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="bg-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="bg-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold rounded py-2 hover:bg-blue-600 w-full transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Getintouch;
