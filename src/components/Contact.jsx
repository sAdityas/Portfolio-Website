import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-4">Feel free to reach out for collaborations or projects!</p>
        <a
          href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSBpDrwXlfdzbxpVLndHLxWlzxslTKFJWFTHdLhLfggvVfQGbRJCwZGRFGXWKfMgBwlRpGbf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-purple-800 text-white rounded-lg hover:bg-purple-900"
        >
          Say Hello 👋
        </a>
      </div>
    </section>
  );
}

export default Contact;
