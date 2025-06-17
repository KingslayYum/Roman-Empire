import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert("Ahh, something went wrong. Please try again.");
      });
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-gray-900 p-6 rounded-xl w-[300px] text-white backdrop-blur-sm bg-opacity-80"
    >
      <h3 className="text-xl font-bold mb-4">Contact</h3>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full mb-3 px-3 py-2 bg-gray-800 rounded"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="w-full mb-3 px-3 py-2 bg-gray-800 rounded"
      />
      <textarea
        name="message"
        rows="4"
        value={form.message}
        onChange={handleChange}
        placeholder="Your Message"
        className="w-full mb-3 px-3 py-2 bg-gray-800 rounded"
      />
      <button
        type="submit"
        className="w-full py-2 bg-blue-600 rounded hover:bg-blue-500"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default ContactForm;
