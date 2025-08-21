import React from "react";

function Contact() {
  return (
    <section id="contact" className="mt-20 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-4">Feel free to reach out for collaborations or projects!</p>
        <a
          href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSBpDrwXlfdzbxpVLndHLxWlzxslTKFJWFTHdLhLfggvVfQGbRJCwZGRFGXWKfMgBwlRpGbf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3  text-white font-semibold rounded-lg transition-colors duration-300 hover:bg-yellow-500 hover:border-2 hover:text-black" 
        >
          Say Hello 👋
        </a>
      </div>
    </section>
  );
}

export default Contact;
